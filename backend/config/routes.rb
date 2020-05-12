Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :gardens do
    collection do
      get :all_gardens
    end
  end
  resources :users, except: [:destroy] do
    resources :gardens
  end
  # resources :gardens do
  #   collection do
  #     get :all_gardens
  #   end
  # end
  # get '/gardens' => 'gardens#gardens'


  # get '/hamada' => 'users#index'

  ## These lines are from Jungle app as a reminder

  # get '/login' => 'sessions#new'
  # post '/login' => 'sessions#create'
  # get '/logout' => 'sessions#destroy'

  # get '/register' => 'users#new'
  # post '/users' => 'users#create'

end
