class ManagerSerializer < ActiveModel::Serializer
  attributes :id,
    :active,
    :market,
    :name,
    :email,
    :phone,
    :username,
    :password
  has_many :workplace_accounts
end
