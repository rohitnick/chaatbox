class HomeController < ApplicationController
  def index
    @products = Product.all
  end
  def contact
  end
  def aboutus
  end
end
