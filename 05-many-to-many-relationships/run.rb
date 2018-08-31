require_relative './tweet.rb'
require_relative './user.rb'
require_relative './like.rb'
require 'pry'

jane = User.new('jane')
jill = User.new('jill')
first_tweet = jane.post_tweet('hello world')
bad_tweet = jill.post_tweet('bad tweert')
jane.like(first_tweet)
jill.like(jane.liked_tweets.first)
jill.like(bad_tweet)


binding.pry

nil
