import React from 'react'
import FoodListEntry from './FoodListEntry.jsx'

const FoodList = (props) => (

  <div>
    {/* {console.log(props,'proppps')} */}
    {props.foods.map((food,i)=>{
      // let boundClick = props.userSelect.bind(this,food);
      return <FoodListEntry food={food} key={i} userSelect={props.userSelect}/>
    })}


  </div>

)
 export default FoodList;
