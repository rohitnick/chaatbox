class CreateBeverages < ActiveRecord::Migration
  def change
    create_table :beverages do |t|
      t.string :name
      t.integer :price
      t.string :title
      t.integer :sale_price
      t.string :image_url

      t.timestamps null: false
    end
  end
end
