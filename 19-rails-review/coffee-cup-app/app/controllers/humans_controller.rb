class HumansController < ApplicationController
  def index
    @humans = Human.all
  end

  def show
    @human = Human.find(params[:id])
  end

  def new
  end
end
