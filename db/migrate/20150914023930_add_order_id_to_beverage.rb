class AddOrderIdToBeverage < ActiveRecord::Migration
  def change
    add_column :beverages, :order_id, :integer
  end
end
