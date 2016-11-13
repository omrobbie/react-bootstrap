import React from 'react';

class NavBar extends React.Component {
	render() {
		return <div>
			<nav className="navbar navbar-inverse">
				<div className="container-fluid">
					<div className="navbar-header">
						<a className="navbar-brand" href="#">react-bootstrap</a>
					</div>
					<ul className="nav navbar-nav">
						<li className="active"><a href="#">Home</a></li>
						<li><a href="#">Page 1</a></li>
						<li><a href="#">Page 2</a></li>
						<li><a href="#">Page 3</a></li>
					</ul>
				</div>
			</nav>
		</div>;
	}
}

export default NavBar;