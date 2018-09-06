require_relative "../app/models/gym.rb"
require_relative "../app/models/lifter.rb"
require_relative "../app/models/membership.rb"



describe "Lifter" do
  golds = Gym.all.first
  pf = Gym.all[1]
  bob = Lifter.all.first
  tracy = Lifter.all[1]
  a = Membership.all[0]
  b = Membership.all[1]
  c = Membership.all[2]


  describe "#new" do

    it "initializes with a name and lift_total" do
      expect(bob.name).to eq("Bob")
      expect(bob.lift_total).to eq(700)
    end
  end

  describe ".all" do
    it "returns an array of all Lifters" do
      expect(Lifter.all).to include(bob, tracy)
    end
  end

  describe "#memberships" do
    it "returns an array of all memberships of that lifter" do
      expect(tracy.memberships).to include(b, c)
    end
  end

  describe "#gyms" do
    it "returns an array of all gyms that lifter has memberships to" do
      expect(tracy.gyms).to include(pf, golds)
    end
  end

  describe ".average_lift" do
    it "returns the average lift_total of all lifters" do
      expect(Lifter.average_lift).to eq(750)
    end
  end

  describe "sign_up" do
    it "creates a new Membership and associates a lifter and gym" do
      sharon = Lifter.new("Sharon", 900)
      lifetime = Gym.new("Lifetime Fitness")
      sharon.sign_up(200, lifetime)

      expect(sharon.gyms).to include(lifetime)
    end
  end

  describe "total_cost" do
    it "returns a sum of the total cost of lifter's gym memberships" do
      expect(tracy.total_cost).to eq(1100)
    end

  end

end
