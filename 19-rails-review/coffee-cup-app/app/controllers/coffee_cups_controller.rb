class CoffeeCupsController < ApplicationController
  def index
    @coffee_cups = CoffeeCup.all
  end

  def show
    @coffee_cup = CoffeeCup.find(params[:id])
  end

  def new
  end

  def create
    new_coffee_cup = CoffeeCup.new(coffee_cup_params)

    if new_coffee_cup.valid?
      new_coffee_cup.save

      redirect_to new_coffee_cup
    else
      flash[:errors] = new_coffee_cup.errors.full_messages

      redirect_to new_coffee_cup_path
    end
  end

  def edit
    @coffee_cup = CoffeeCup.find(params[:id])
  end

  private

  def coffee_cup_params
    params.require(:coffee_cup).permit(:human_id, :size)
  end
end
