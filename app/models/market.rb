class Market < ApplicationRecord
    has_many :managers
    has_many :accounts, through: :manager
end
