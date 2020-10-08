class MenusController < ApplicationController
  before_action :set_menu, only: [:show, :edit, :update]

  def index
    @menu = Menu.all
  end

  def show; end

  def new
    @menu = Menu.new()
  end


  def create
    @menu = Menu.new(menu_params)
    if @menu.save
      redirect_to menus_path
    else
      render :new
    end
  end

  def edit; end

  def update
    @menu.update(menu_params)
    if @menu.save
      redirect_to menus_path
    else
      render :edit
    end
  end

  private

  def set_menu
    @menu = Menu.find(params[:id])
  end

  def menu_params
    params.require(:menu).permit(:name, :active)
  end
end
