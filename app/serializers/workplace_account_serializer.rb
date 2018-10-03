class WorkplaceAccountSerializer < ActiveModel::Serializer
  attributes :id,
    :active,
    :company_name,
    :company_address,
    :company_city,
    :company_zip_code,
    :ctct_email_list,
    :scheduling_contact_name,
    :scheduling_contact_phone,
    :scheduling_contact_email,
    :hr_contact_name,
    :hr_contact_phone,
    :hr_contact_email,
    :delivery_day,
    :delivery_time,
    :special_instructions
end
