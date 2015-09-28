class AddBeverageIdToLineItems < ActiveRecord::Migration
  def change
    add_column :line_items, :beverage_id, :integer
  end
end
