import React, {Component} from 'react';
import Welcome from './welcome';
class Section extends Component{
	constructor(props){
		super(props);
		this.state = ({

		})
	}
	render(){
		return(
			<div className="Section" style={{minHeight:"100vh"}}>
				{this.props.value}
				<Welcome/>
			</div>
		)
	}
}

export default Section;