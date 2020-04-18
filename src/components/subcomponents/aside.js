import React from 'react';

class Aside extends React.Component{
	constructor(props){
		super(props);
		this.state = ({

		})
	}
	render(){
		return(
			<div className="Aside">
				{this.props.value}
			</div>
		)
	}
}

export default Aside;