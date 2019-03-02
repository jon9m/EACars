import React, { Component } from 'react';
import './App.css';

export default class CarShow extends Component {
    render() {
        let carsArr = this.props.cars;
        let cars = <div>No Cars Available!</div>;

        if (carsArr) {
            cars = carsArr.map((car, index) => {
                return (
                    <div key={index} className={'car'} className='car'>
                        <div className='make'>{car.make ? car.make : 'Unknown'}</div>
                        <div className='model'>{car.model ? car.model : 'Unknown'}</div>
                        <div className='show'>{car.show ? car.show : 'Unknown'}</div>
                    </div>                    
                )
            });
        }

        return (
            <div>
                {this.props.name}
                {cars}
            </div>);
    }
}

