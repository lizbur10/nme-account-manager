class Manager < ApplicationRecord
    belongs_to :market
    has_many :accounts
    has_many :customers
end
