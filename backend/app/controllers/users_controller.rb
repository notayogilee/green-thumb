class UsersController < ApplicationController
  
  # before_action is a filter to do a task before all or certain methods
  # before_action :set_user, only: [:show, :update, :destroy]
  # before_action :set_user
  # skip_before_action :require_login, only: [:new, :create]

  # GET /users
  def index
    @users = User.all
    json_response(@users)
  end

  # POST /users
  def create
    @user = User.create!(user_params)
    json_response(@user, :created)
  end

  
  # GET /users/:id
  def show
    # @user = User.find(params[:id])
    set_user
    json_response(@user)
  end

  # STRETCH
  # PUT /users/:id
  # def update
  #   @user.update(user_params)
  #   head :no_content
  # end

  # STRETCH
  # DELETE /users/:id
  # def destroy
  #   @user.destroy
  #   head :no_content
  # end

  private

  def user_params
    # whitelist params
    # params.permit(:name, :email, :password, :password_confirmation)
    params.permit(:name, :email, :password)
  end

  def set_user
    @user = User.find(params[:id])
  end
end
