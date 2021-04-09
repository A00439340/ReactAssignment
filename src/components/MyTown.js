import React, { Component } from "react"
import Weather from "./Weather"



class MyTown extends Component {

	render() {

		return (
			<div className="mytown-container">


						<div>
							<p></p>
							<img width={400}
								src="https://img.itinari.com/pages/images/original/938c8baf-7558-4d16-82af-f4d1c24ec17a-akimat_atyrau_.jpg?ch=DPR&dpr=1.25&w=1600&s=6387a6048fd6ba32c6393e5c7642fe0e"
								alt="Picture of Atyrau City"
							/>

							<p><h1>Currently, I live in Atyrau, Kazakhstan.</h1></p>
							<text>
								<h3>
								<br />
								Atyrau is a transcontinental city in Eurasia, located at <br />
								the mouth of the Ural River on the Caspian Sea, in both <br />
								Europe and Asia<br />

								</h3>
								<h2>
									<Weather />
								</h2> 

							</text>

						</div>


			</div>
		)
	}

}
export default MyTown;

