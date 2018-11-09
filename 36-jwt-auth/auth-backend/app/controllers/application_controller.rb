class ApplicationController < ActionController::API
  # before_action :authorize, only: :login

  def login
    user = User.find_by(username: params[:username])

    if user && user.authenticate(params[:password])
      render :json => {
        :token => JWT.encode({ user_id: user.id }, nil, 'none')
      }
    else
      render :json => {
        :message => "Invalid credentials"
      }, status: 400
    end
  end

  def authorize
    # handle authorization logic here
  end

  def updateuser
    authorization_header = request.headers["Authorization"]

    payload = nil

    if authorization_header
      payload = authorization_header.split(' ')[1]
    end

    if authorization_header && JWT.decode(payload, nil, false)[0]["user_id"] == params[:id].to_i
      # if JWT is valid
      user = User.find(params[:id])
      user.update(username: params[:username])
  
      render json: user
    else

      # if JWT is not valid
      # send 400 with message
      render :json => {
        :message => "YO! You're not allowed to do this."
      }, status: 400

    end
  end
end
