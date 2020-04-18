import React from 'react';

const Header = (props) => {
	return(
		<div className="Header">
			<h4>{props.value}</h4>
		</div>
	)
}

export default Header;