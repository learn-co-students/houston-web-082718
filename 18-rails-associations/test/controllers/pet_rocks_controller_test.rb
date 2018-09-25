require 'test_helper'

class PetRocksControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get pet_rocks_index_url
    assert_response :success
  end

  test "should get show" do
    get pet_rocks_show_url
    assert_response :success
  end

  test "should get new" do
    get pet_rocks_new_url
    assert_response :success
  end

end
