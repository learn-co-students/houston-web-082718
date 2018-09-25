class AddKoalaIdToPetRocks < ActiveRecord::Migration[5.2]
  def change
    add_reference :pet_rocks, :koala, foreign_key: true
  end
end
