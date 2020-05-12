class GardensController < ApplicationController
  # before_action :set_user
  # before_action :set_user_garden, only: [:show, :update, :destroy]

  # GET /users/:user_id/gardens
  def index
    set_user
    # set_user_garden
    json_response(@user.gardens)
  end

  # GET /users/:user_id/gardens/:id
  def show
    set_user
    set_user_garden
    json_response(@garden)
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
