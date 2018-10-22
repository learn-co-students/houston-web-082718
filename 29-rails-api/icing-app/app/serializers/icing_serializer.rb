class IcingSerializer < ActiveModel::Serializer
  attributes :id, :color, :boolean, :quantity, :cake, :banana_people

  def banana_people
    'bana ppeople'
  end
end

# CakerSerializer
#   attributes :icings