# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

Intro To Rails

Steps: 
- [ ] Induce traumatic memories with video of Sinatra
- [ ] Show them Rails History and Henimeier
- [ ] Values of Rails
- [ ] Show them a rails scaffold
    - [ ] Show them CRUD functionality
    - [ ] Show them how to create/view routes
- [ ] Show them how to do it (rails) manually
    - [ ] Show how to view rails CLI helper “rails generate —help”
    - [ ] Show how to create new rails project “rails new dog-pound”
    - [ ] Show how to generate a model “rails generate model Dog name:string bio:text img_url:string”
    - [ ] Show how to reverse a generate command “rails destroy”
    - [ ] Show how to use options to avoid unwanted code “rails generate model Dog name:string bio:text img_url:string —no-test-framework”
    - [ ] Show how to configure generators by editing ‘/config/application.rb’ (bookmark)
    - [ ] What happens with no path?
    - [ ] Show ‘get '/patients/', to: 'patients#index’’ syntax for route definition (bookmark)
    - [ ] Show “rails g controller dogs”
    - [ ] Show resource route defining syntax, using “only” option “resources :dogs, only: [:index, :show]
    - [ ] Go over difference between “resource” and “resources”? by showing “resource :dog, only [:show]”
    - [ ] Set the application root “ root 'dogs#index’ “
    - [ ] What happens with no view?
    - [ ] Show “rails g controller dogs show index” (specifying actions to define, which will build corresponding views) (bookmark)
    - [ ] Show implicit functionality of controller
    - [ ] Show them how to seed DB
    - [ ] Run “rails console” 
    - [ ] Configure controller to not use Migration
    - [ ] Show them how to generate and associate a new model “rails generate model chew_toy type:string dog:references”
    - [ ] Show them how to generate a migration to add an attribute to model “rails generate migration AddImageUrlToDogs image_url:string”
- [ ] What else can we do?
    - [ ] Make forms more easily
    - [ ] Every convenient trick we have learned from Active Record
    - [ ] Authentication, Validations, Complex forms (Automatically create two diff types of models with the same form), 
    - [ ] Rails rails/info/routes
    - [ ] CONVENTION OVER CONFIGURATION



“ Rails was created with the goal of increasing programmers' happiness and productivity levels. “

“TAKE WHAT YOU NEED, CHANGE WHAT YOU NEED!”	

