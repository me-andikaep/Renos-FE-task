import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, onClick, className }) => {
	return (
		<button className={className} onClick={onClick}>
			{children}
		</button>
	);
};

Button.propTypes = {
	children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
	onClick: PropTypes.func,
	className: PropTypes.string,
};

export default Button;
