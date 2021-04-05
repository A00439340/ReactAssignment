import React, { Component } from "react"
import MyTown from "./MyTown"

class AboutMe extends Component {
	constructor(props)
	{
		super(props)

		this.state = {isShowText: false	}

		this.click1 = this.click.bind(this)
	}

	click()
	{
		this.setState({ isShowText: true })

	}

	render() {

		return (
			<div className="aboutme-container">

				<button className="btn-aboutme" onClick={() => { this.click() }}> <a>About Me</a> </button>

				<div>
					{this.state.isShowText === true ?
						<div>
							<p></p>
							<img src="logo.PNG" />
							
							<p><h1>Hi, my name is Timur...</h1></p>
							<text>
								<h2>
								<br />
								I'm a graduate student at Saint Mary's University,<br />
								currently attending classes remotely. <br />
								</h2>

								<h3>
								<br />
								I joined the MCDA program because I want to expand my<br />
								technical knowledge and start developing apps. Also, sI'm <br />
								looking forward to learning more about big data and data<br />
								mining.
								</h3>
							</text>

						</div> : undefined		
					}
				</div>
				

			</div>
			)
	}

}
export default AboutMe;