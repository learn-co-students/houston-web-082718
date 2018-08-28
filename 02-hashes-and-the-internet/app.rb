# https://www.googleapis.com/books/v1/volumes?q=ruby

require 'pry'
require 'rest-client'
require 'json'

def get_search
  puts "Enter a search term:"
  gets.chomp
end

def get_parsed_response(search_term)
  response = RestClient.get("https://www.googleapis.com/books/v1/volumes?q=#{search_term}")
  JSON.parse(response)
end

def print_title(volume_info)
  if volume_info["title"]
    puts volume_info["title"]
  else
    puts "The title does not exist!"
  end
end

def print_authors(volume_info)
  if volume_info["authors"]
    puts volume_info["authors"].join(" and ")
  else
    puts "Authors does not exist!"
  end
end

def print_description(volume_info)
  if volume_info["description"]
    puts volume_info["description"][0..120]
  else
    puts "The description does not exist!"
  end
end

def print_divider
  puts "*" * 30

end

def run
  search_term = get_search
  
  parsed_response = get_parsed_response(search_term)
  
  parsed_response["items"].each do |book_hash|
    volume_info = book_hash["volumeInfo"]

    print_title(volume_info)
    print_authors(volume_info)
    print_description(volume_info)
    print_divider
  end
end

run
