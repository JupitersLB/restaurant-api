Rails.application.routes.draw do
  devise_for :users
  root to: 'orders#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :menus, only: :show do
        resources :menu_items, only: :index
      end
      resources :orders, only: [:index, :show, :update], shallow: true do
        resources :order_items, only: :create, shallow: true do
          member do
            patch 'cancel'
          end
          resources :reviews, only: [:create, :update], shallow: true
        end
      end
    end
  end

  resources :menus, only: [ :show, :index ] do
    resources :menu_items, only: :create, shallow: true do
      member do
        patch 'active'
      end
    end
  end

  resources :customers, only: :index do
    collection do
      get :authenticate
    end
  end

  resources :orders, only: [ :index, :show, :create, :update ]

  resources :menu_items, except: [ :destroy, :create ]

  resources :order_items, only: :index do
    member do
      patch 'served'
    end
  end

end
