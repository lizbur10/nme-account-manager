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
end
