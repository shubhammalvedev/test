import React from "react";



class Controller2 extends React.Component {

    constructor(){
        super()
        
        this.state = {
            //here we can define our state variables
              variable2:'8788798'
        }
    }


    funtioninController2 = ()=>{
        console.log('im in controller 2');
    }

}


export default Controller2;