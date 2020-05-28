class PlantsController < ApplicationController

  # before_action is a filter to do a task before all or certain methods
  # before_action :set_plant, only: [:show, :update, :destroy]

  def all_plants
    @plants = Plant.all
    json_response(@plants)
  end

  def index
    garden_id = params[:garden_id]
    garden = Garden.find(garden_id)
    
    @plants = garden.plants
    @w_times_array = []
    @plants.each do |plant|
      watering_time = plant.garden_plants.first.watering_time
      @w_times = plant.attributes
      @w_times[:watering_time] = watering_time
      @w_times_array.push(@w_times)
      
    end
    
    json_response(@w_times_array)
   
  end
  
  # POST /gardens/:garden_id/plants
  def create
    garden_id = params[:garden_id]
    plant_id = params[:id]
    @garden = Garden.find(garden_id)
    plant = Plant.find(plant_id)
    watering_time = params["watering_time"]
    @garden_plant = @garden.garden_plants.create!(
      watering_time: watering_time,
      plant_id: plant_id
    )
    # w_times = @garden_plant.attributes
    # w_times[:watering_time] = watering_time
    json_response(@garden_plant, :created)
    # json_response(w_times, :created)
  end

  def show_original
    # @plant = Plant.find(params[:id])
    set_plant
    json_response(@plant)
  end
  
  # GET /plants/:id
  def show
    # @plant = Plant.find(params[:id])
    garden_id = params[:garden_id]
    garden = Garden.find(garden_id)
    set_plant
    ## MUST ADD if (@plant) ELSE (not found)
    watering_time = @plant.garden_plants.first.watering_time 
    # @plant[:watering_time] = watering_time
    w_times = @plant.attributes
    w_times[:watering_time] = watering_time
    # json_response(@plant)
    json_response(w_times)
  end

  def update
    garden_id = params[:garden_id]
    @garden = Garden.find(garden_id)
    plant_id = params[:id]
    watering_time = params[:watering_time]
    target_plant = GardenPlant.where(
      {garden_id: garden_id,
         plant_id: plant_id}).first
    target_plant.watering_time = watering_time
    target_plant.save!

    json_response(target_plant)

  end

  # DELETE /plants/:id
  def destroy
    garden_id = params[:garden_id]
    @garden = Garden.find(garden_id)
    plant_id = params[:id]
    target_plant = GardenPlant.where(
      {garden_id: garden_id,
         plant_id: plant_id}).first
    target_plant.destroy!
    json_response( { Plant: "plant removed" } )
  end

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
      :image_url,
      :watering_time)
  end

  def garden_plant_params
    params.permit(
      :garden_id,
      :plant_id)
  end

  def set_plant
    @plant = Plant.find(params[:id])
  end
  
end
