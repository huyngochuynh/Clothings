import React from 'react';

function Part ({ path, zIndex }) {
	return (
		<img
			src={path}
			alt=""
			width={280}
			height={260}
			style={{zIndex, position: 'absolute', top: 0 , left:0}}
		/>
	)
};

export default Part;

