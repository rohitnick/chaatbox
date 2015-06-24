class HomeController < ApplicationController
  skip_before_filter  :verify_authenticity_token
  def index
    @products = Product.all
  end
  
  def create
    @order=Order.create(customers_name:chaat_params["customers_name"],customers_street_address:chaat_params["customers_street_address"],customers_telephone:chaat_params["customers_telephone"],customers_email_address:chaat_params["customers_email_address"],order_total:chaat_params["order_total"],deliveryarea:chaat_params["deliveryarea"],time:chaat_params["time"])

    chaat_params["product"].each_index do |i|
      @order.line_items.create(product_id: Product.find_by_name(chaat_params["product"][i]).id ,quantity:chaat_params["quantity"][i])
    end
    render json: {status: 'success'}
  end

  private
  def chaat_params
    params.require(:details).permit(:customers_name,:customers_street_address,:customers_telephone,:customers_email_address,:order_total,:deliveryarea,:time,:product => [],:quantity => [])
  end
end
