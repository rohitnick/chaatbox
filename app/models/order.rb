class Order < ActiveRecord::Base
  has_many :line_items
  has_many :products, :through => :line_items
  has_many :beverages, :through => :line_items
  # Do not change the order of values nor include any new value in between, always add new values in the end.
  enum status: [:Arrived, :"In Progress", :Completed, :Cancelled, :Fake, :Incomplete]
  enum source: [:Call ,:Whatsapp ,:Tinyowl ,:Foodpanda ,:Website ,:other]
  
  scope :incomplete, -> { where(status: 5)}

	def self.current_order(token)
			@current_order=Order.find_or_create_by(guest_token: token)
			@current_order.update_attribute(:status,'Incomplete')

		if @current_order
			return @current_order
		end
	end

end
