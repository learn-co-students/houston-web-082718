require_relative '../config/environment.rb'

def reload
  load 'config/environment.rb'
end
names = ["Zoe", "John", "Kim"]
3.times do
  Lifter.new(names[Random.rand(2)], Random.rand(9839577))
end
twenty4 = Gym.new("24 Hour Fitness")
hole_in_pocket = Membership.new(40, Lifter.all.first, twenty4)




binding.pry
 puts "amazing"