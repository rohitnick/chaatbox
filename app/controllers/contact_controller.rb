class ContactController < ApplicationController
  skip_before_filter  :verify_authenticity_token
  def message
    Leavemessage.create(message_params)
    render json: {status: 'success'}
  end
  private
  def message_params
    params.require(:contacts).permit(:name,:email,:mobile,:review)
  end
end
