class CreateOccasions < ActiveRecord::Migration[5.2]
  def change
    create_table :occasions do |t|
      t.belongs_to :cake
      t.integer :eater_id
      t.string :occasion_name
    end
  end
end
