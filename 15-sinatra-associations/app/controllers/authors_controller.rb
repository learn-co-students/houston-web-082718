class AuthorsController < ApplicationController
  get '/authors' do
    @authors = Author.all

    erb :'authors/index'
  end
end
