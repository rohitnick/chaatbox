class Order < ActiveRecord::Base
  has_many :line_items
  has_many :products, :through => :line_items
  enum status: { cancelled: 0, in_progress: 1, completed: 2, invoiced: 3 }
end
