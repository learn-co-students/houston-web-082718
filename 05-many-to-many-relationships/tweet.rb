class Tweet
  
  attr_reader :message, :user
  
  @@all = []

  def initialize(message, user)
    @message = message
    @user = user
    @@all << self
  end

  def self.all
    @@all
  end

  def username
    user.username
  end

  def likers
    likes = Like.all.select do |like|
      like.tweet == self
    end
    likes.map do |like|
      like.user
    end
  end

  def number_of_likes
    likers.length
  end
end
