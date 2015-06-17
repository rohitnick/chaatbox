class CreateLeavemessages < ActiveRecord::Migration
  def change
    create_table :leavemessages do |t|
      t.string :name
      t.string :email
      t.string :mobile
      t.string :review

      t.timestamps null: false
    end
  end
end
