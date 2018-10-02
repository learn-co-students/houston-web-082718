Rails.application.routes.draw do
  get 'sessions/new'
  resources :users, only: [:show, :new, :create]
  get '/signup', to: 'users#new'

  get '/login', to: 'sessions#new'

  resources :sessions, only: [:create]

  delete '/sessions', to: 'sessions#destroy'
end
