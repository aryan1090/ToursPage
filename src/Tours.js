import React from 'react';
import Tour from './Tour';

function Tours({tours,removeTours}){
    return(
        
        tours.map((tour)=>{
            return(
                <div>
                    <Tour key={tour.id} tour={tour} removeTours={removeTours}/>
                </div>
            
            )
        })
        
    );
}

export default Tours;