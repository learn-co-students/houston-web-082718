require 'test_helper'

class KoalasControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get koalas_index_url
    assert_response :success
  end

  test "should get show" do
    get koalas_show_url
    assert_response :success
  end

end
