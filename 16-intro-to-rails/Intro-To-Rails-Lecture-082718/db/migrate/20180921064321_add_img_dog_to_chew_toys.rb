class AddImgDogToChewToys < ActiveRecord::Migration[5.2]
  def change
    add_column :chew_toys, :img_url, :string
    add_column :chew_toys, :dog_id, :integer
  end
end
