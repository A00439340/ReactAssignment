import React, { Component } from "react"
import AboutMe from "./AboutMe"
import MyTown from "./MyTown"

class Navigation extends Component {
	constructor(props) {
		super(props)

		this.state = {
			tabType: 'aboutme'
		}
	}
	toggleMe = (value) => {
		this.setState({
			tabType: value
		}
		)
	}
	render() {
		return (
		<div>
			<div className="buttons">
				<button className="btn-aboutme" onClick={() => this.toggleMe('aboutme')}>About Me </button>
				<button className="btn-mytown" onClick={() => this.toggleMe('mytown')}> My Town </button>
			</div>

			<div>
					{
						this.state.tabType === 'aboutme' && <div> <AboutMe /></div>
					}
					{
						this.state.tabType === 'mytown' && <div> <MyTown /></div>
					}
			</div>
		</div>

		)

	}


}

export default Navigation;