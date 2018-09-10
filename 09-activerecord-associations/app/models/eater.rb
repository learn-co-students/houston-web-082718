class Eater < ActiveRecord::Base
  # belongs_to :baker

  has_many :occasions
  has_many :cakes, through: :occasions
end