Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  # ORDER MATTERS !!

  get '/gardens' => 'gardens#all_gardens'
  # resources :gardens do
  #   collection do
  #     get :all_gardens
  #   end
  #   # resources :plants
  # end
  resources :users, except: [:destroy] do
    resources :gardens
  end

  # resources :gardens do
  #   resources :garden_plants
  # end

  resources :plants, except: [:destroy]
  # resources :gardens do
  #   collection do
  #     get :all_gardens
  #   end
  # end


  # get '/hamada' => 'users#index'

  ## These lines are from Jungle app as a reminder

  # get '/login' => 'sessions#new'
  # post '/login' => 'sessions#create'
  # get '/logout' => 'sessions#destroy'

  # get '/register' => 'users#new'
  # post '/users' => 'users#create'

end
