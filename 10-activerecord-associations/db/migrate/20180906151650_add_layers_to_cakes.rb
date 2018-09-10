class AddLayersToCakes < ActiveRecord::Migration[5.2]
  def change
    add_column :cakes, :layers, :integer
  end
end
