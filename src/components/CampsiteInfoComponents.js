import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class CampsiteInfo extends Component {
	renderCampsite(campsite) {
		return (
			<div className='col-md-5 m-1'>
				<Card>
					<CardImg top src={campsite.image} alt={campsite.name} />
					<CardBody>
						<CardTitle>{campsite.name}</CardTitle>
						<CardText>{campsite.description}</CardText>
					</CardBody>
				</Card>
			</div>
		);
	}

	renderComments(comments) {
		if (comments)
			return (
				<div className='col-md-5 m-1'>
					<h4>Comments</h4>
					{comments.map((comment) => {
						return (
							<div>
								<p>
									{comment.text} <br/>
									--{comment.author},{" "}
									{new Intl.DateTimeFormat("en-US", {
										year: "numeric",
										month: "short",
										day: "2-digit",
									}).format(new Date(Date.parse(comment.date)))}
								</p>
							</div>
						);
					})}
				</div>
			);

		return <div />;
	}

	render() {
		if (this.props.campsite) {
			return (
				<div className='row'>
					{/* AMY INSTRUCTOR: renderCampsite() is not a component, it's a function. 
                        the only time a function is a component, is when it is outside of the class component. 

                        replace your code at line 56 with this:
                        {this.renderCampsite(this.props.campsite)}
                    */}

					{this.renderCampsite(this.props.campsite)}
					{this.renderComments(this.props.campsite.comments)}

					{/* AMY INSTRUCTOR: call your renderComment here  */}
				</div>
			);
		}

		// AMY INSTRUCTOR: you had your closing curly brace in the wrong spot. I fixed it for you to have it working.
		return <div />;
	}
}

export default CampsiteInfo;
