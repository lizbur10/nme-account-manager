class ManagerSerializer < ActiveModel::Serializer
  attributes :id,
    :active,
    :market,
    :name,
    :username,
    :password,
    :contact_info
  has_many :workplace_accounts
end
