class AddEmailToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :deliveryarea, :string
  end
end
