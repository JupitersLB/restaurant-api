class CustomersController < ApplicationController
  before_action :authenticate_user!, except: %i[index authenticate]

  def index
    response.headers["X-User-Email"] = cookies.signed[:email]
    response.headers["X-User-Token"] = cookies.signed[:token]

    render layout: "react"
  end

  def authenticate
    cookies.signed[:email] = { value: params[:user_email], expires: 2.minutes }
    cookies.signed[:token] =  { value: params[:user_token], expires: 2.minutes }

    redirect_to action: :index
  end
end
