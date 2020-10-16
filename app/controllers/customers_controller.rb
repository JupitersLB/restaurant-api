class CustomersController < ApplicationController
  before_action :authenticate_user!, except: %i[index authenticate]

  def index
    response.headers["X-User-Email"] = cookies.signed[:email]
    response.headers["X-User-Token"] = cookies.signed[:token]

    render layout: "react"
  end

  def authenticate
    cookies.signed[:email] = params[:user_email]
    cookies.signed[:token] = params[:user_token]

    redirect_to action: :index
  end
end
