class Occasion < ActiveRecord::Base
  belongs_to :baker

  belongs_to :cake
  belongs_to :eater
end