class Manager < ApplicationRecord
    belongs_to :market
    has_many :workplace_accounts
    has_many :home_delivery_accounts
end
