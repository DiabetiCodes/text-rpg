import React from 'react';

//props: golden, golden-2, grey
const Frames = ({ color }) => {
	return (
		<>
			<div
				className={`rpgui-container framed-${color} rpgui-draggable w-[400px] max-w-[400px]`}>
				<p>This is a {color} frame.</p>
			</div>
		</>
	);
}

export default Frames;
