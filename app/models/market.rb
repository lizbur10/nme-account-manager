class Market < ApplicationRecord
    has_many :managers
    has_many :accounts, through: :manager
    has_many :customers, through: :manager
end
