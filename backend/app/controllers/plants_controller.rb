class PlantsController < ApplicationController

  # before_action is a filter to do a task before all or certain methods
  # before_action :set_plant, only: [:show, :update, :destroy]

  def index
    @plants = Plant.all
    json_response(@plants)
  end

  # POST /plants
  def create
    @plant = Plant.create!(plant_params)
    json_response(@plant, :created)
  end

  
  # GET /plants/:id
  def show
    # @plant = Plant.find(params[:id])
    set_plant
    json_response(@plant)
  end

  # STRETCH
  # PUT /plants/:id
  # def update
  #   @plant.update(plant_params)
  #   head :no_content
  # end

  # STRETCH
  # DELETE /plants/:id
  # def destroy
  #   @plant.destroy
  #   head :no_content
  # end

  private

  def plant_params
    # whitelist params
    params.permit(
      :name,
      :description,
      :optimal_sun,
      :optimal_soil,
      :planting_considerations,
      :when_to_plant,
      :growing_from_seed,
      :transplanting,
      :spacing,
      :watering,
      :feeding,
      :other_care,
      :diseases,
      :pests,
      :harvesting,
      :storage_use,
      :image_url)
  end

  def set_plant
    @plant = Plant.find(params[:id])
  end
end
