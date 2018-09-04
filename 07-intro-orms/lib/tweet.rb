class Tweet
  attr_accessor :message, :username

  def self.all
    sql = <<-SQL
    SELECT * FROM tweets
    SQL

    results = DB[:conn].execute(sql)

    results.map do |result|
      Tweet.new(result)
    end
  end

  def initialize(props={})
    @message = props['message']
    @username = props['username']
    @id = props['id']
  end

  def self.create(props={})
    sql = <<-SQL
      INSERT INTO tweets (username, message) VALUES (?, ?);
    SQL

    DB[:conn].execute(sql, props['username'], props['message'])
  end
end
