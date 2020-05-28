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
    set_user
    json_response(@user)
  end

  private

  def user_params
    params.permit(:name, :email, :password, :password_confirmation)
  end

  def set_user
    @user = User.find(params[:id])
  end
end
