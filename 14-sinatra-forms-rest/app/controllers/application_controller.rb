class ApplicationController < Sinatra::Base
  set :views, 'app/views'
  set :method_override, true

  get '/' do
    "Hello World"
  end

  get '/books' do
    @books = Book.all

    erb :'books/index'
  end

  get '/books/new' do
    erb :'books/new'
  end

  get '/books/:id' do
    @book = Book.find(params[:id])
    
    erb :'books/show'
  end

  post '/books' do
    Book.create(params[:book])

    redirect '/books'
  end

  get '/books/:id/edit' do
    @book = Book.find(params[:id])

    erb :'books/edit'
  end

  patch '/books/:id' do
    @book = Book.find(params[:id])

    @book.update(params[:book])

    redirect "/books/#{@book.id}"
  end

  delete '/books/:id' do
    @book = Book.find(params[:id])

    @book.destroy

    redirect '/books'
  end
end
