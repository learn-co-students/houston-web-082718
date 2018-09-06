class CreateCakes < ActiveRecord::Migration[5.2]
  def change
    create_table :cakes do |t|
      t.string :flavor
      t.string :shape
      t.boolean :icing
    end
  end
end
