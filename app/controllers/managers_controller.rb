class ManagersController < ApplicationController

    def show
        @manager = Manager.find(params[:id])
        render json: @manager
    end

    def index
        @managers = Manager.all.sort_by do | manager |
            [manager.market.name, manager.name]
        end
        render json: @managers
    end

    def create
        Manager.create(manager_params)
    end

    def update
        @manager = Manager.find(params[:id])
        @manager.update_attributes(manager_params)
    end

    private

    def manager_params
        params.require(:manager).permit(
            :id,
            :market_id,
            :active,
            :name,
            :username,
            :password,
            :email,
            :phone

        )
    end
    
end
