class WorkplaceAccountsController < ApplicationController
    def index
        @workplace_accounts=WorkplaceAccount.all
        render json: @workplace_accounts
    end

    def show
        @workplace_account = WorkplaceAccount.find(params[:id])
        render json: @workplace_account
    end

    def update
        puts params
        @workplace_account = WorkplaceAccount.find(params[:id])
        @workplace_account.update_attributes(account_params)
    end
end

private

def account_params
    params.require(:workplace_account).permit(
        :id,
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
    )
end
