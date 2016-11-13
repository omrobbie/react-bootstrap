import React from 'react';
import ContentShow from './ContentShow';

const items = [
	{
		'id'	: 1,
		'title'	: 'Content 1',
		'desc'	: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, quas!'
	},
	{
		'id'	: 2,
		'title'	: 'Content 2',
		'desc'	: 'Lorem ipsum dolor sit amet.'
	},
	{
		'id'	: 3,
		'title'	: 'Content 3',
		'desc'	: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia asperiores nisi cupiditate adipisci ipsam eos.'
	}
]

class Content extends React.Component {
	render() {
		const item = items.map(function(e) {
			return <ContentShow key={e.id} title={e.title} desc={e.desc} />
		});
		return <div className="container">
			<div className="row">
				{item}
			</div>
		</div>;
	}
}

export default Content;