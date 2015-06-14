class CreateMessags < ActiveRecord::Migration
  def change
    create_table :messags do |t|
      t.string :name
      t.string :email
      t.string :mobile
      t.string :messageus

      t.timestamps null: false
    end
  end
end
