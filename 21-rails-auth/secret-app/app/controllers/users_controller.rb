class UsersController < ApplicationController
  # before_action :redirect_to_login_page_if_not_logged_in, except: [:new, :create]

  def show
    @user = User.find(params[:id])
    if session[:user_id] == params[:id].to_i
      @current_user = current_user
    end
  end

  def new
  end

  def create
    user = User.new(user_params)

    if user.valid?
      user.save
      session[:user_id] = user.id
      redirect_to user
    else
      flash[:error] = 'Passwords do not matcfh'
      redirect_to new_user_path
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :password_confirmation, :secret)
  end
end
