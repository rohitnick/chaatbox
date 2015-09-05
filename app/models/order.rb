class Order < ActiveRecord::Base
  has_many :line_items
  has_many :products, :through => :line_items

  # Do not change the order of values nor include any new value in between, always add new values in the end.
  enum status: [:Arrived, :"In Progress", :Completed, :Cancelled, :Fake, :"Not Deliverable",:Tinyowl,:FoodPanda]
end
