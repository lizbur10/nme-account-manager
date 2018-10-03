class WorkplaceAccountsController < ApplicationController
    def show
        @workplace_account = WorkplaceAccount.find(params[:id])
        render json: @workplace_account
    end
end
