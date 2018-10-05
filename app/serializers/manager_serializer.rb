class ManagerSerializer < ActiveModel::Serializer
  attributes :id,
    :name,
    :username,
    :password,
    :contact_info
  has_many :workplace_accounts
end
