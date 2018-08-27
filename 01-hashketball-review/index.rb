require 'pry'

arr = [1,2,3]

# arr.each do |item|
#   puts "cat"
# end

# mapped_array = arr.map do |item|
#   item * 2
# end

# filtered_array = arr.select do |item|
#   item.odd?
# end

find_2 = arr.find do |item|
binding.pry
  item == 4
end

