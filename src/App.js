import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import CarShow from './CarShow';
import { API_ENDPOINT } from './Config';

class App extends Component {

  state = {
    carshow: [],
    error: null
  }

  componentDidMount() {
    axios.get(API_ENDPOINT)
      .then(response => {
        console.log(response.data);
        this.setState({ 'carshow': response.data });
      })
      .catch(err => {
        console.log(err);
        this.setState({ 'error': "Can't load data " + err });
      });
  }

  render() {
    let error = (this.state.error ? this.state.error : null);
    let carData = <div>No data available!</div>;
    let carDataArr = this.state.carshow;

    if (carDataArr && carDataArr.length > 0) {
      let cars = [];
      carDataArr.forEach(show => {
        if (show.cars) {
          show.cars.sort((car1, car2) => {
            return car1.make > car2.make;
          }).forEach(car => {
            car.show = show.name;
            cars.push(car);
          });
        }
      });
      console.log(cars);
      return <CarShow cars={cars} />
    } else if (error) {
      return <div>{error}</div>;
    }

    return (
      <div className="App">
        {carData}
      </div>
    );
  }
}

export default App;
