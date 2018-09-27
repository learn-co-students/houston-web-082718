class CreateHumen < ActiveRecord::Migration[5.2]
  def change
    create_table :humen do |t|
      t.string :name
      t.string :roast_preference
      t.boolean :female

      t.timestamps
    end
  end
end
