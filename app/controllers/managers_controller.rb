class ManagersController < ApplicationController

    def show
        @manager = Manager.find(params[:id])
        render json: @manager
    end

    def index
        @managers = Manager.all
        render json: @managers
    end
end
