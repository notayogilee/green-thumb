class User < ApplicationRecord
  has_many :gardens, dependent: :destroy
end
