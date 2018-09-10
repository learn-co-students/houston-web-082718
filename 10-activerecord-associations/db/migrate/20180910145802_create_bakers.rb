class CreateBakers < ActiveRecord::Migration[5.2]
  def change
    create_table :bakers do |t|
      t.string :name
      t.integer :num_years_experience
    end
  end
end
