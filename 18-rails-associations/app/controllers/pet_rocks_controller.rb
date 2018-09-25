class PetRocksController < ApplicationController
  def index
    @pet_rocks = PetRock.all
  end

  def show
    @pet_rock = PetRock.find(params[:id])
  end

  def new
  end

  def create
    new_rock = PetRock.create(pet_rock_params)

    redirect_to new_rock
  end

  private

  def pet_rock_params
    params.require(:pet_rock).permit(:name, :koala_id)
  end
end
