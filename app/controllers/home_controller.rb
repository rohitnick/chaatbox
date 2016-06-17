require 'pry'
class HomeController < ApplicationController
  skip_before_filter  :verify_authenticity_token
	before_action :create_guest_token
  

  def index
    @chaats = Product.where(category:0)
    @bevs = Product.where(category:1)
		@order=Order.incomplete.includes(:line_items).where(guest_token: cookies.signed[:guest_token]).first
  end
  
  def create
		@order=Order.current_order(cookies.signed[:guest_token])
    @order.update_attributes(order_params.merge(:status => 'Arrived'))
	  cookies.delete (:guest_token)
    render json: {status: 'success'}
	end

	def create_guest_token
   	if cookies.signed[:guest_token].blank?
			cookies.permanent.signed[:guest_token]=HomeHelper.generate_guest_token
		end
  end
  
	def add_line_item_to_order
     order=Order.current_order(cookies.signed[:guest_token])
		 order.line_items.create(line_item_params.merge(quantity: 1))
		 redirect_to_url('http://localhost:3000/')
	end
     
	def remove_line_item_from_order
		order=Order.current_order(cookies.signed[:guest_token])
    order.line_items.where(product_id: line_item_params["product_id"]).destroy_all
	end

	def update_line_item_for_order
		order=Order.current_order(cookies.signed[:guest_token])
		order.line_items.find_by(product_id: update_line_item_params["product_id"]).update_attribute(:quantity,update_line_item_params["quantity"])
  end

		private

  def order_params
    params.require(:details).permit(:customers_name,:customers_street_address,:customers_telephone,:customers_email_address,:order_total,:deliveryarea,:time,:selectedtime)
  end

	def update_line_item_params
     params.require(:update_line_item).permit(:product_id,:quantity)
	end

	def line_item_params
		params.require(:line_item).permit(:product_id)
	end
end
