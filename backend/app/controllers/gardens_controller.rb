class GardensController < ApplicationController
  
  # before_action is a filter to do a task before all or certain methods
  before_action :set_user, except: [:all_gardens]
  before_action :set_user_garden, only: [:show, :update, :destroy]

  # GET /users/:user_id/gardens
  def index
    json_response(@user.gardens)
  end

  def all_gardens
    @gardens = Garden.all
    json_response(@gardens)
  end

  # GET /users/:user_id/gardens/:id
  def show
    json_response(@garden)
  end

  # POST /users/:user_id/gardens
  def create
    @garden = @user.gardens.create!(garden_params)
    json_response(@garden, :created)
  end

  # PUT /users/:user_id/gardens/:id
  def update
    @garden.update(garden_params)
    json_response(@garden, :created)
  end

  # DELETE /users/:user_id/gardens/:id
  def destroy
    @garden.destroy
    json_response( { Garden: "Garden removed" } )

  end

  private

  def garden_params
    params.permit(:title, :location, :user_id)
  end

  def set_user
    @user = User.find(params[:user_id])
  end

  def set_user_garden
    @garden = @user.gardens.find_by!(id: params[:id]) if @user
  end
end
