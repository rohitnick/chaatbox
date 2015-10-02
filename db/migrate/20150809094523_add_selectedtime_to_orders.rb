class AddSelectedtimeToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :selectedtime, :string
  end
end
