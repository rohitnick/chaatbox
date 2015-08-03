RailsAdmin.config do |config|

  ### Popular gems integration

  ## == Devise ==
  # config.authenticate_with do
  #   warden.authenticate! scope: :user
  # end
  # config.current_user_method(&:current_user)

  ## == Cancan ==
  # config.authorize_with :cancan

  ## == PaperTrail ==
  # config.audit_with :paper_trail, 'User', 'PaperTrail::Version' # PaperTrail >= 3.0.0

  ### More at https://github.com/sferik/rails_admin/wiki/Base-configuration

  config.actions do
    dashboard                     # mandatory
    index                         # mandatory
    new
    export
    bulk_delete
    show
    edit
    delete
    show_in_app

    ## With an audit adapter, you can add:
    # history_index
    # history_show
  end

  RailsAdmin.config do |config|
    config.authenticate_with do
      warden.authenticate! scope: :user
    end
    config.current_user_method(&:current_user)
  end

  config.model 'Order' do
    list do
      field :id
      field :created_at do
        date_format :short
      end
      field :order_total do 
        label 'Total'
      end
      field :customers_name do
        label 'Name'
      end
      field :customers_telephone do
        label 'Phone'
      end
      field :customers_street_address do
        label 'Address'
      end
      field :status do 
        label 'Status'
      end
      field :line_items do
        pretty_value do
          value.pluck(:product_id, :quantity)
        end
      end
      field :customers_email_address do
        label 'Email'
      end
    end
  end

end
