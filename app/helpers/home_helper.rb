module HomeHelper
  def self.generate_guest_token()
		SecureRandom.urlsafe_base64(nil, false)
	end
end
