import React from 'react';

class ContentShow extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return <div>
			<div className="col-sm-6 col-md-4">
				<h2>{this.props.title}</h2>
				<p>{this.props.desc}</p>
				<p><a href="#" className="btn btn-default" role="button">View details</a></p>
			</div>
		</div>;
	}
}

export default ContentShow;