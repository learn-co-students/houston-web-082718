class DogsController < ApplicationController
  def index
    render :dogs
  end

  def show
    @dog = Dog.find(params[:id])
  end
end
