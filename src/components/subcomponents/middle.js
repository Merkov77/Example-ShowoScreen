import React from 'react';
import Section from './section';
import Aside from './aside';

class Middle extends React.Component{
	render(){
		return(
			<div className="Middle">
				<Section value="Section"/>
				<Aside value="Aside"/>
			</div>
		)
	}
}

export default Middle;