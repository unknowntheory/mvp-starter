import React from 'react';

class FoodListEntry extends React.Component{
  constructor(props){
    super(props);
    this.state ={}
  }

  render(){

    return(
      <div className='foodChoices' onClick={this.props.userSelect.bind(this)}>

        <h4>{this.props.food.restaurant.name}</h4>
        {/* {console.log(this.props.food)} */}
        <div>
        Location:{this.props.food.restaurant.location.address}
        </div>
        <div>
        Rating:{this.props.food.restaurant.user_rating.rating_text}
        </div>
        {/* {this.props.food.restaurant.photos_url} */}
        {/* href={this.props.food.restaurant.menu_url} show location when clicked  */}
      </div>
    )
  }
}

export default FoodListEntry
