class GardenPlantsController < ApplicationController
    # before_action is a filter to do a task before all or certain methods
    before_action :set_garden, except: [:all_gardens]
    before_action :set_garden_plant, only: [:show, :update, :destroy]
  
    # GET /users/:user_id/gardens
    def index
    end
  
    # GET /users/:user_id/gardens/:id
    def show
      raise 
      json_response(@garden.plant)
    end
  
    # POST /users/:user_id/gardens
    def create
      @user.gardens.create!(garden_params)
      json_response(@user, :created)
    end
  
    # PUT /users/:user_id/gardens/:id
    def update
      @garden.update(garden_params)
      head :no_content
    end
  
    # DELETE /users/:user_id/gardens/:id
    def destroy
      @garden.destroy
      head :no_content
    end
  
    private
  
    def plant_params
      params.permit(:title, :location, :user_id)
    end
  
    def set_garden
      @garden = Garden.find(params[:garden_id])
    end
  
    def set_garden_plant
      @plant = @garden.plants.find_by!(id: params[:id]) if @garden
    end
end
