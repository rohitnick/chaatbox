class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string :name
      t.integer :price
      t.string :title
      t.string :ingredients
      t.float :sale_price
      t.integer :packing_cost
      t.integer :spicy
      t.integer :hot
      t.string :image_url

      t.timestamps null: false
    end
  end
end
