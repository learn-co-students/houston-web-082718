class ApplicationController < Sinatra::Base
  set :views, 'app/views'

  get '/' do
    "Hello World"
  end

  get '/books' do
    @books = Book.all

    erb :'books/index'
  end

  get '/books/:id' do
    binding.pry
  end
end
