import React from 'react';

import PropTypes from 'prop-types';

import './Image.scss';

// define list of shapes

function Image(props) {
	const {
		alt,
		caption,
		// centered,
		className,
		// float,
		shape,
		src,
		// verticalAlign
		// unhandledProps
	} = props;


	const generateClassName = () => {
		let classes = [];

		// if (centered) 
		// 	classes.push('centered');
		// if (float)
		// 	classes.push('float--' + float);
		// if (verticalAlign)
		// 	classes.push('v-align--' + verticalAlign);
		if (shape)
			classes.push('shape-' + shape);
		if (className) 
			classes.push(className);

		return classes.join(' ');
	};

	return (
		<>
            <div className="img-container">
			<img 
				alt={ alt ? alt : "" } 
				src={ src } 
				title={ caption ? caption : "" } 
				className= {generateClassName()}
			/>
			<div className="caption-img">
				{ caption }
			</div>
            </div>
		</>
	);
}

Image.propTypes = {
	alt: PropTypes.string,
	caption: PropTypes.string,
	className: PropTypes.string,
	shape: PropTypes.string,
	src: PropTypes.string.isRequired
};

export default Image;