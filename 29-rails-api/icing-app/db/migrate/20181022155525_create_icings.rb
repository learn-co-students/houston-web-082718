class CreateIcings < ActiveRecord::Migration[5.2]
  def change
    create_table :icings do |t|
      t.boolean :boolean
      t.string :color
      t.integer :quantity

      t.timestamps
    end
  end
end
