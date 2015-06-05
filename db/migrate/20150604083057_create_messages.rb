class CreateMessages < ActiveRecord::Migration
  def change
    create_table :messages do |t|
      t.string :name
      t.string :mobilenumber
      t.string :email
      t.string :message

      t.timestamps null: false
    end
  end
end