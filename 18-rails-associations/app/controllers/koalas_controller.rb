class KoalasController < ApplicationController
  def index
    @koalas = Koala.all
  end

  def show
    @koala = Koala.find(params[:id])
  end
end
