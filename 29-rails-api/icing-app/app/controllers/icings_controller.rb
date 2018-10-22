class IcingsController < ApplicationController
  def index
    render json: Icing.all
  end

  def show
    render json: Icing.find(params[:id])
  end

  def create
    icing = Icing.create(icing_params)

    render json: icing
  end

  def update

  end

  def destroy

  end

  def banana
    render json: Icing.all
  end

  private

  def icing_params
    params.require(:icing).permit(:color, :boolean, :quantity)
  end
end
