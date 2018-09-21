class CreateChewToys < ActiveRecord::Migration[5.2]
  def change
    create_table :chew_toys do |t|
      t.string :desc
    end
  end
end
