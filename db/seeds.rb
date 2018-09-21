# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Account.create(
    companyName: 'ACME Corp',
    companyAddress: '123 Main St',
    companyCity: 'Cambridge',
    constantContactEmailList: 'ACME Corp',
    contactName: 'Joe',
    contactEmail: 'joe@acmecorp.com',
    contactPhone: '555-1000',
    deliveryDay: 'Tuesday',
    deliveryTime: '9:00-9:20',
    specialInstructions: 'Bring an anvil and some TNT'
)
