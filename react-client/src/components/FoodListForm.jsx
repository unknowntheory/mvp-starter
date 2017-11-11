import React from 'react';
class FoodListForm extends React.Component{

  constructor(props){
   super(props);
   this.state = {

   }


}



 render(){
   return(
     <div>
       <h4>please enter your food choices </h4>
       <form>
         <label>
           Food:
           <input type="text" value={this.props.term} onChange={this.props.handleChange}/>
         </label>
         <input type='submit' value='Submit' onClick={this.props.handleSubmit}/>
       </form>
     </div>
   )
 }
}
export default FoodListForm;
