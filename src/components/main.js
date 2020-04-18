import React from 'react';
import Header from './subcomponents/header';
import Middle from './subcomponents/middle';
import Footer from './subcomponents/footer';

class WebMain extends React.Component{
	render(){
		return(
			<div className="Main">
				<Header value="ShowoScreen"/>
				<Middle/>
				<Footer value="Copyright"/>
				{this.props.show}
			</div>
		)
	}
}

export default WebMain;