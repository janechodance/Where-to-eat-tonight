import React, { useHistory, useParams } from "react-router"
import useFetch from "./useFetch"
import RestaurantList from "./RestaurantList"

function Jesse () {
    const { error, isLoading, data: restaurants } = useFetch('http://localhost:4000/restaurants')

    const handleDelete = (id) => {
     
    }
    return (
        <div className="home">
            

            { error && <div>{ error }</div> }
            { isLoading && <div>Loading...</div> }
            
            
            {restaurants && <RestaurantList restaurants={restaurants.filter((restaurant) => restaurant.picker === 'Jesse')} title="Jesse's Picks"  handleDelete={handleDelete}  />}
          
           
        </div>
      );
    }

export default Jesse