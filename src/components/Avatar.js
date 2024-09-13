import React from 'react';
import  Part  from './Part';

const Avatar = ({ body, eyes, clothesa ,clothesb, clothesc, mouths, noses, hair }) => {
	return (
		<div className="avatar">
			{body.length > 0 && <Part path={body} zIndex={0} />}
			{eyes.length > 0 && <Part path={eyes} zIndex={1} />}
			{clothesa.length > 0 && <Part path={clothesa} zIndex={2} />}
			{clothesb.length > 0 && <Part path={clothesb} zIndex={3} />}
			{clothesc.length > 0 && <Part path={clothesc} zIndex={4} />}
			{mouths.length > 0 && <Part path={mouths} zIndex={5} />}
			{noses.length > 0 && <Part path={noses} zIndex={6} />}
			{hair.length > 0 && <Part path={hair} zIndex={7} />}
		</div>
	);
};

export default Avatar;