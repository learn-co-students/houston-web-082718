Rails.application.routes.draw do
  get 'pet_rocks/index'
  get 'pet_rocks/show'
  get 'pet_rocks/new'
  resources :koalas, only: [:index, :show]
  resources :pet_rocks, only: [:index, :show, :new, :create]
end
