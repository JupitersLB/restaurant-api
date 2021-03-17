class MenusController < ApplicationController
  before_action :set_menu, only: [ :edit, :update ]

  def index
    @menus = Menu.includes(:items)
    @menu = Menu.new()
    @menu.menu_items.build.build_item
  end

  def show
     @menu = Menu.find(params[:id])
  end

  def create
    @menu = Menu.create(menu_params)
    if @menu.id
      redirect_to menus_path
    else
      flash[:alert] = "Error when saving"
      render :show
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
    params.require(:menu).permit(:name, item_ids: [], menu_items_attributes: [item_attributes: [:name, :description, :category, :price, :photo]])
  end
end
