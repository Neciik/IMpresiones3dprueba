require "test_helper"

class PaginaControllerTest < ActionDispatch::IntegrationTest
  test "should get home" do
    get pagina_home_url
    assert_response :success
  end
end
