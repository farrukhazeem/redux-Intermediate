import React, { Component } from 'react'
import { connect } from 'react-redux';

class ListofCars extends Component {
    render() {
        return (
            <div className="cars_comp">
                List of Cars
            </div>
        )
    }
}

function mapStateToProps(state) {
  console.log(state)
  return{
      cars:state.cars
  }
}

export default connect(mapStateToProps,null)(ListofCars);