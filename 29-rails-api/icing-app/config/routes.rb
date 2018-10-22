Rails.application.routes.draw do
  resources :icings
  # For details on the DSL availabvle within this file, see http://guides.rubyonrails.org/routing.html

  get '/banana', to: 'icings#banana'
end
