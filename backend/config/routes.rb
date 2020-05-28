Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  # Be careful: Order Matters!

  ## Routes : Registrations, Login, Logout & cookies

  resources :sessions, only: [:create]
  resources :registrations, only: [:create]
  delete :logout, to: "sessions#logout"
  get :logged_in, to: "sessions#logged_in"

  ## Routes : Gardens & Plants
  
  get '/gardens' => 'gardens#all_gardens'
  get '/plants', to: 'plants#all_plants'
  get '/plants/:id', to: 'plants#show_original'
  post '/gardens/:garden_id/plants/:id', to:'plants#create'
 
  resources :gardens do
    resources :plants
  end
  
  resources :users, except: [:destroy] do
    resources :gardens
  end

  concern :garden_plant_list do
    resources :garden_plants
  end

  resources :gardens, concerns: :garden_plant_list
  resources :plants, concerns: :garden_plant_list

end
