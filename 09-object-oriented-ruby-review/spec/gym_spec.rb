require_relative "../app/models/gym.rb"
require_relative "../app/models/lifter.rb"
require_relative "../app/models/membership.rb"


describe "Gym" do
  golds = Gym.new("Golds")
  pf = Gym.new("Planet Fitness")
  bob = Lifter.new("Bob", 700)
  tracy = Lifter.new("Tracy", 800)
  a = Membership.new(bob, golds, 500)
  b = Membership.new(tracy, golds, 400)
  c = Membership.new(tracy, pf, 700)

  describe "#new" do
    it "initializes with a name" do
      expect(golds.name).to eq("Golds")
    end
  end

  describe ".all" do
    it "returns an array of all gyms" do
      expect(Gym.all).to include(golds, pf)
    end
  end

  describe "#memberships" do
    it "returns an array of all of that gym's memberships" do


      expect(golds.memberships).to include(a)
      expect(pf.memberships).to include(c)
    end
  end

  describe "#lifters" do
    it "returns and array of all of that gym's lifters" do
      expect(golds.lifters).to include(bob, tracy)
    end
  end

  describe "#lifter_names" do
    it "returns an array of all the names of that gym's lifters" do
      expect(golds.lifter_names).to include("Bob", "Tracy")
    end
  end

  describe "#lift_total_for_gym" do
    it "returns a sum of lift_totals for all the lifters at that gym" do
      expect(golds.lift_total_for_gym).to eq(1500)
    end
  end

end
