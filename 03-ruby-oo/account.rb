require 'pry'

class BankAccount
  attr_accessor :name, :balance

  @@all = []

  def initialize(name, balance)
    @name = name
    @balance = balance

    @@all << self
  end

  def self.all
    @@all
  end

  # def name
  #   @name
  # end

  # def balance
  #   @balance
  # end

  # def name=(name)
  #   @name = name
  # end

  # def balance=(balance)
  #   @balance = balance
  # end

  def set_name_to_name_plus_foo
    self.name = self.name + 'foo'
  end

  def self.find_rich_people
    @@all.select do |account|
      account.balance > 10
    end
  end

  def alert_low_balance
    if balance < 1
      puts "You have no money!"
    else
      puts "You are okay."
    end
  end
end

zoes_account = BankAccount.new('Zoe', 1000000000)
trungs_account = BankAccount.new('Trung', 5)
chelseas_account = BankAccount.new('Chelsea', 10000)
michaels_account = BankAccount.new('Michael', 0.25)

binding.pry