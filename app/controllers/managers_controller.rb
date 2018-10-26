class ManagersController < ApplicationController

    def show
        @manager = Manager.find(params[:id])
        render json: @manager
    end

    def index
        @managers = Manager.all.sort_by do | manager |
            [manager.name]
        end
        render json: @managers
    end

    def update
        @manager = Manager.find(params[:id])
        @manager.update_attributes(account_params)
    end

    private

    def account_params
        params.require(:manager).permit(
            :id,
            :market_id,
            :active,
            :name,
            :username,
            :password,
            :contact_info,
            :company_zip_code

        )
    end
    
end
