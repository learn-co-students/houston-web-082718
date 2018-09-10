class Cake < ActiveRecord::Base
  # belongs_to :baker

  has_many :occasions
  has_many :eaters, through: :occasions
end