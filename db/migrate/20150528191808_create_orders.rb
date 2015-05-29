class CreateOrders < ActiveRecord::Migration
  def change
    create_table :orders do |t|
      t.integer :customers_id
      t.string :customers_name
      t.string :customers_street_address
      t.string :customers_telephone
      t.string :customers_email_address
      t.integer :products_id
      t.integer :order_total

      t.timestamps null: false
    end
  end
end
