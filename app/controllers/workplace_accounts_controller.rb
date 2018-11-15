class WorkplaceAccountsController < ApplicationController
    def index
        @workplace_accounts = WorkplaceAccount.all.sort_by do |account|
            [to_day_of_week(account.delivery_day), account.manager.name, account.company_name]
            # [to_day_of_week(account.delivery_day), account.manager.name, to_start_time(account.delivery_time)]
        end
        render json: @workplace_accounts
    end

    def show
        @workplace_account = WorkplaceAccount.find(params[:id])
        render json: @workplace_account
    end

    def create
        WorkplaceAccount.create(account_params)
    end

    def update
        @workplace_account = WorkplaceAccount.find(params[:id])
        @workplace_account.update_attributes(account_params)
    end
end

private

def account_params
    params.require(:workplace_account).permit(
        :id,
        :active,
        :manager_id, 
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
        :special_instructions,
        :counter
    )
end

def to_day_of_week(day)
    Date.parse(day,"%w")
end

def to_start_time(window)
    start_hour = window.match(/\d{1,2}/)[0]
    if start_hour.to_i < 6
        return start_hour.to_i + 12
    else
        return start_hour.to_i
    end
end
