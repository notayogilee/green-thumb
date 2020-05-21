import React from 'react';
import GardenDetails from './GardenDetails';
import GardenAdd from './GardenAdd';
import M from 'materialize-css'
import 'materialize-css'


export default function Garden(props) {


  // this garden is passed as a prop from the state of useGarden in apps.
  let gardens = props.gardens;
  // const tempGardens = props.gardens;

  // const [gardens, setGardens] = useState(props.gardens)
  // console.log("props.gardens", props.gardens)
  // console.log("props.gardens", props.gardens)

  function findUserGarden(id, gardens) {

    return gardens.filter(garden => garden.user_id === id);

  }

  const userGarden = (findUserGarden(props.loggedInUser.user.id, gardens));

  const mapUserGardens = userGarden.map(garden =>

    <GardenDetails
      key={garden.id}
      id={garden.id}
      title={garden.title}
      location={garden.location}
      loggedInUser={props.loggedInUser}
      plants={props.plants}
      updateGarden={props.updateGarden}
      deleteGarden={props.deleteGarden}
      handleSuccessfulAuth={props.handleSuccessfulAuth}
    />
  )
  // addNewGarden={addNewGarden}
  // updateGarden={updateGarden}
  // deleteGarden={deleteGarden}

  return (
    <>

      <GardenAdd
        loggedInUser={props.loggedInUser}
        addNewGarden={props.addNewGarden}
      />
      <div className="row">

        {/* <div  className="col s24 m3 l3">  */}
        <div>
          <ul>
            {mapUserGardens}
          </ul>
        </div>
      </div>
    </>
  )
}