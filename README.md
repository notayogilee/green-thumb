This is a final project for Lighthouse Labs created by Lee Castelani & Ahmed (Hatem) Attia.  It is a gardening app, where a user can view gardening instructions for a list of specific plants.  A registered user can create a garden, add or removed plants from that garden, and delete the garden.  There is the current weather available specific to the location of each garden.

## Setup backend

1. After cloned, cd into backend, then bundle install gem dependencies.
2. To start the database, sudo service postgresql start.
3. To setup & seed the database, use the command rails db:reset.
4. To start the backend rails s -p 3000 (or if in vagrant rails s -b 0.0.0.0 -p 3000).

## Setup frontend

1. Cd into client file & npm install dependencies.
2. Use either yarn start or npm start to run on server.  It will be running on localhost:3006.
3. The app is meant to be displayed on primarily on mobile, so it looks better using dev tools tablet mode.
4. You can create an account and play around or login with 
    email: andy@labber.ca and password: labber 
    email: ray@labber.ca and password: labber
    email: sheldon@labber.ca and password: labber
    email: felix@labber.ca and password: labber
5. Have fun!



