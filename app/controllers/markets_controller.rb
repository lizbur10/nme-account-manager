class MarketsController < ApplicationController

    def index
        @markets = Market.all
        render json: @markets
    end

end