class CreateCollars < ActiveRecord::Migration[5.2]
  def change
    create_table :collars do |t|
      t.integer :cost
      t.references :dog, foreign_key: true

      t.timestamps
    end
  end
end
