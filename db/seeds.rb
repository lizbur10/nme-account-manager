# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

WorkplaceAccount.create(
    manager_id: 1,
    company_name: 'Krusty Krab',
    company_address: '102 Coral Reef',
    company_city: 'Bikini Bottom',
    ctct_email_list: 'Krusty Krab',
    scheduling_contact_name: 'Mr. Krabs',
    scheduling_contact_email: 'mrkrabs@krustykrab.com',
    scheduling_contact_phone: '555-1000',
    delivery_day: 'Monday',
    delivery_time: '10:00-10:20',
    special_instructions: 'Park in the visitor spot'
)

WorkplaceAccount.create(
    manager_id: 3,
    company_name: "Bob's Burgers",
    company_address: '2 Carnivore Terrace',
    company_city: "Seymour's Bay",
    ctct_email_list: "Bob's Burgers",
    scheduling_contact_name: 'Bob',
    scheduling_contact_email: 'bob@bobsburgers.com',
    scheduling_contact_phone: '555-1000',
    delivery_day: 'Wednesday',
    delivery_time: '10:00-10:20',
    special_instructions: 'Set up in the store room'
)

# Market.create([{ name: 'Albany' }, { name: 'Boston' }])

# DATA_managers = {
#     :manager_keys =>
#         ["name", "contact_info", "username", "password"],
#     :boston_managers => [
#         ['Sarah', 'sarah@9mileseast.com', 'sarah', 'password'],
#         ['Eliza', 'eliza@9mileseast.com', 'eliza', 'password'],
#         ['Gordon', 'gordon@9mileseast.com', 'gordon', 'password'],
#         ['Clarissa', 'foodbyclarissa@gmail.com', 'clarissa', 'password'],
#         ['Liz', 'liz.burton147@gmail.com', 'liz', 'password'],
#         ['Lisa', 'lbzmag@comcast.net', 'lisa', 'password']
#     ],
#     :albany_managers => [
#         ['Tyler', 'tyler@9mileseast.com', 'tyler', 'password']
#     ]
# }

# def make_managers
#     DATA_managers[:albany_managers].each do |manager|
#         make_manager(manager, 'Albany')
#     end
#     DATA_managers[:boston_managers].each do |manager|
#         make_manager(manager, 'Boston')
#     end
# end

# def make_manager(manager, market_name)
#     new_manager = Manager.new
#     new_manager.market = Market.find_by(name: market_name)
#     manager.each_with_index do |attribute, i|
#         new_manager.send(DATA_managers[:manager_keys][i]+"=", attribute)
#     end
#     new_manager.save
# end

# make_managers
