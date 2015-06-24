class AddTimeToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :time, :string
  end
end
