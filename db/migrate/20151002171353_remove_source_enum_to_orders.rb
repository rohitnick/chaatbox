class RemoveSourceEnumToOrders < ActiveRecord::Migration
  def change
    remove_column :orders, :source, :integer
  end
end
