import React, { Component } from "react"
import AboutMe from "./AboutMe"

class MyTown extends Component {
	constructor(props) {
		super(props)

		this.state = { isShowText: false }

		this.click = this.click.bind(this)
	}

	click() {
		this.setState({ isShowText: true })
		//AboutMe.setState({ isShowText: false })
	}

	render() {

		return (
			<div className="aboutme-container">

				<button className="btn-mytown" onClick={() => { this.click() }}> My Town </button>

				<div>
					{this.state.isShowText === true ?
						<div>
							<p></p>
							<img alt="Atyrau" width={500}
								src="https://img.itinari.com/pages/images/original/938c8baf-7558-4d16-82af-f4d1c24ec17a-akimat_atyrau_.jpg?ch=DPR&dpr=1.25&w=1600&s=6387a6048fd6ba32c6393e5c7642fe0e"
								
							/>

							<p><h1>Currently, I live in Atyrau, Kazakhstan.</h1></p>
							<text>
								<h2>
								<br />
								Atyrau is a transcontinental city in Eurasia, located at <br />
								the mouth of the Ural River on the Caspian Sea, in both <br />
								Europe and Asia<br />

								</h2>

							</text>

						</div> : undefined
					}
				</div>


			</div>
		)
	}

}
export default MyTown;

