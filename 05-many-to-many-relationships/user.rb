class User

  @@all = []
  attr_reader :username
  
  def initialize(username)
    @username = username
    @@all << self
  end

  def self.all
    @@all
  end

  def post_tweet(message)
    Tweet.new(message, self)
  end

  def tweets
    Tweet.all.select do |tweet|
      tweet.user == self
    end
  end

  def liked_tweets
    likes = Like.all.select do |like|
      like.user == self
    end
    likes.map do |like|
      like.tweet
    end
  end

  def like(tweet)
    Like.new(self, tweet)
  end
end