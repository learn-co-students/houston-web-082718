require_relative '../config/environment'

describe "Hero class" do
  before do
    @thor = Hero.new([ 
      {
          name: 'Super Strength',
          coolness: 3
      },
      {
          name:'Flight',
          coolness: 5
      },
      {
          name: 'Lightning Blast',
          coolness: 10
      }
    ])
  end

  it "should return the coolest ability" do
    expect(@thor.coolest_ability).to eq({
      name: 'Lightning Blast',
      coolness: 10
    })
  end

  it "should return ordered_abilities" do
    expect(@thor.ordered_abilities).to eq(["Flight", "Lightning Blast", "Super Strength"])
  end

  it "should add an ability correctly" do
    @thor.add_ability({
      name: 'Open a book to the correct page every time',
      coolness: 13
    })

    expect(@thor.abilities).to include({
      name: 'Open a book to the correct page every time',
      coolness: 13
    })
  end

  it "should handle dumb users" do

    expect{@thor.add_ability("super eating ability")}.to raise_error(ArgumentError)

  end
end