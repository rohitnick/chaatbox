class AddPayableamountToOrder < ActiveRecord::Migration
  def change
    add_column :orders, :payableamount, :string
  end
end
