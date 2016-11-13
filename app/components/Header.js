import React from 'react';

class Header extends React.Component {
	render() {
		return <div>
			<div className="jumbotron">
				<div className="container">
					<h1>Simple React-Bootstrap</h1>
					<p>Membuat kerangka sederhana react dan bootstrap</p>
					<p><a className="btn btn-primary btn-lg" href="https://github.com/omrobbie/react-bootstrap">Learn more</a></p>
				</div>
			</div>
		</div>;
	}
}

export default Header;