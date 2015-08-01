class HomeController < ApplicationController
  skip_before_filter  :verify_authenticity_token
  def index
    @products = Product.all
  end
  
  def create
    @order=Order.create(order_params.merge(status: 'Arrived'))

    details_params["product"].each_index do |i|
      @order.line_items.create(product_id: Product.find_by_name(details_params["product"][i]).id ,quantity:details_params["quantity"][i])
    end
    render json: {status: 'success'}
  end

  private
  def order_params
    params.require(:details).permit(:customers_name,:customers_street_address,:customers_telephone,:customers_email_address,:order_total,:deliveryarea,:time)
  end

  def details_params
    params.require(:details).permit(:customers_name,:customers_street_address,:customers_telephone,:customers_email_address,:order_total,:deliveryarea,:time,:product => [],:quantity => [])
  end
end
