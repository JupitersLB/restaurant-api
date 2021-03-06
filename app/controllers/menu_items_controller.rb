class MenuItemsController < ApplicationController
  before_action :set_menu_item, only: [:show, :edit, :update, :active]

  def index
    #Handles search if a search has been made

    if params[:search].present?
      @menu_items = MenuItem.search_by_name_and_description(params[:search][:query])
    else
      @menu_items = MenuItem.all
    end
  end

  def show; end

  def new
    @menu_item = MenuItem.new()
  end


  def create
    @menu_item = MenuItem.new(menu_item_params)
    @menu_item.menu = params[:menu_id]
    if @menu_item.save
      redirect_to menu_item_path(@menu_item)
    else
      render :new
    end
  end

  def edit; end

  def update
    @menu_item.update(menu_item_params)
    if @menu_item.save
      redirect_to menu_item_path(@menu_item)
    else
      render :edit
    end
  end

  def active
    @menu_item.active = !@menu_item.active
    if @menu_item.save
      respond_to do |format|
        format.js
      end
    end
  end

  private

  def set_menu_item
    @menu_item = MenuItem.find(params[:id])
  end

  def menu_item_params
    params.require(:menu_item).permit(:name, :description, :category, :price)
  end
end
