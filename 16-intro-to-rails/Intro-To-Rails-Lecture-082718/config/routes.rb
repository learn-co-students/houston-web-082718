Rails.application.routes.draw do
  get 'chew_toys/show'
  root 'dogs#index'
  resources :dogs, only: [:show, :index]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
