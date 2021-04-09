import React, { Component } from "react"
import Mild from '../mild.png'
import Cold from '../cold.png'
import Sunny from '../sunny.png'

const roundTo = require('round-to');

class Weather extends Component {



	constructor(props) {
		super(props)
		this.state = {
			t: ''
		}

		this.fetchData = this.fetchData.bind(this);
	}

	fetchData() {
		fetch('http://api.openweathermap.org/data/2.5/weather?q=Atyrau&units=metric&APPID=9d99db2947597aefc36dcaed4b5b7811')
			.then(response => {
				return response.json()
			})
			.then(response => {
				console.log(response);
				this.setState({
					t: roundTo(response.main.temp, 0)
				})

			});
	}

	componentDidMount() {
		this.fetchData()
	}

	render() {
		return (
			<div className="weather-temp">
				<p>Current Temperature in Atyrau:</p>
				<p>{this.state.t}C</p>
				{
					this.state.t <= "10" && <div> <img width={100} src={Cold} alt="description1" /></div>
				}
				{
					(this.state.t <= "20" && this.state.t > "10") && <div> <img width={100} src={Mild} alt="description1" /></div>
				}
				{
					this.state.t > "20" && <div> <img width={100} src={Sunny} alt="description1" /></div>
				}
			</div>

		)
	}

	
}
export default Weather;

