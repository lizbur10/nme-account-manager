# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Account.create(
#     company_name: 'ACME Corp',
#     company_address: '123 Main St',
#     company_city: 'Cambridge',
#     ctct_email_list: 'ACME Corp',
#     contact_name: 'Joe',
#     contact_email: 'joe@acmecorp.com',
#     contact_phone: '555-1000',
#     delivery_day: 'Tuesday',
#     delivery_time: '9:00-9:20',
#     special_instructions: 'Bring an anvil and some TNT'
# )

Market.create([{ name: 'Albany' }, { name: 'Boston' }])

DATA_managers = {
    :manager_keys =>
        ["name", "contact_info", "username", "password"],
    :boston_managers => [
        ['Sarah', 'sarah@9mileseast.com', 'sarah', 'password'],
        ['Eliza', 'eliza@9mileseast.com', 'eliza', 'password'],
        ['Gordon', 'gordon@9mileseast.com', 'gordon', 'password'],
        ['Clarissa', 'foodbyclarissa@gmail.com', 'clarissa', 'password'],
        ['Liz', 'liz.burton147@gmail.com', 'liz', 'password'],
        ['Lisa', 'lbzmag@comcast.net', 'lisa', 'password']
    ],
    :albany_managers => [
        ['Tyler', 'tyler@9mileseast.com', 'tyler', 'password']
    ]
}

def make_managers
    DATA_managers[:albany_managers].each do |manager|
        make_manager(manager, 'Albany')
    end
    DATA_managers[:boston_managers].each do |manager|
        make_manager(manager, 'Boston')
    end
end

def make_manager(manager, market_name)
    new_manager = Manager.new
    new_manager.market = Market.find_by(name: market_name)
    manager.each_with_index do |attribute, i|
        new_manager.send(DATA_managers[:manager_keys][i]+"=", attribute)
    end
    new_manager.save
end

make_managers
