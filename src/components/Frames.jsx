import React from 'react';

//props: golden, golden-2, grey
const Frames = ({ color }) => {
	return (
		<>
			<div
				className={`rpgui-container framed-${color} rpgui-draggable w-[180px] h-[180px]`}>
				<p>This is a {color} frame.</p>
			</div>
		</>
	);
}

export default Frames;
