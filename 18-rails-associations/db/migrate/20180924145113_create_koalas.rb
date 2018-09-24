class CreateKoalas < ActiveRecord::Migration[5.2]
  def change
    create_table :koalas do |t|
      t.string :name
      t.string :favorite_hobby

      t.timestamps
    end
  end
end
