class CoffeeCup < ApplicationRecord
  belongs_to :human

  validates :size, presence: true, length: {minimum: 5}
end
