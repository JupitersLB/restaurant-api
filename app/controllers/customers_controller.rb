class CustomersController < ApplicationController
  before_action :authenticate_user!, except: %i[index authenticate]

  def index
    #Uses cookies from authenticate to set the headers for the API requests

    response.headers["X-User-Email"] = cookies.signed[:email]
    response.headers["X-User-Token"] = cookies.signed[:token]

    # Renders with the react layout rather than application.html.erb without nav etc.

    render layout: "react"
  end

  def authenticate
    # Creates cookies based on the query string parameters from the QR code set to expire

    cookies.signed[:email] = { value: params[:user_email], expires: 15.minutes }
    cookies.signed[:token] =  { value: params[:user_token], expires: 15.minutes }

    redirect_to action: :index
  end
end
