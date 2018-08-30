class User
  attr_reader :username

  def initialize(username)
    @username = username
  end

  def tweets
    Tweet.all.select do |tweet|
      tweet.user == self
    end
  end

  def post_tweet(message)
    tweet = Tweet.new(message, self)
  end

  def clear_tweets
    @tweets = []
  end
end