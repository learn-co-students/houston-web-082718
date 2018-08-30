require 'pry'
require_relative './tweet'
require_relative './user'

michael = User.new('Michael')
michael.post_tweet('Hellooooo!!!')

tweet1 = Tweet.new('Hello World!', michael)

binding.pry
