Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :menus, only: :show do
        resources :menu_items, only: :index
      end
      resources :orders, only: [:index, :show, :create] do
        resources :order_items, only: :create
      end
    end
  end

  resources :menus, only: :show do
    resources :menu_items, except: [:destroy]
  end
end
