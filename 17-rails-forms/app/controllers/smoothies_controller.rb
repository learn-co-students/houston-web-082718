class SmoothiesController < ApplicationController
  def index
    @smoothies = Smoothie.all
  end

  def show
    @smoothie = find_smoothie
    @smoothies = Smoothie.all
  end

  def new
    binding.pry
    @smoothie = Smoothie.new
  end

  def create
    smoothie = Smoothie.new(smoothie_params)
    if smoothie.valid?
      smoothie.save
      redirect_to smoothie
    else
      flash[:errors] = smoothie.errors.full_messages
      #binding.pry
      redirect_to new_smoothie_path
    end
  end

  def edit
    @smoothie = find_smoothie
  end

  def update
    if Smoothie.update(params[:id], smoothie_params)
      redirect_to smoothie_path(params[:id])
    else
      flash[:errors] = smoothie.errors.full_messages
      redirect_to edit_smoothie_path(params[:id])
    end

  end

  def destroy
    Smoothie.destroy(params[:id])
    redirect_to smoothies_path
  end

  private

  def smoothie_params
    params.require(:smoothie).permit(:name, :thick)
  end

  def find_smoothie
    @smoothie = Smoothie.find_by_id(params[:id])
  end
end
