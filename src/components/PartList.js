import React from 'react';

function PartList({ items, title, onSelect, selectUrl }) {
	return (
		<div>
			{title}
			<div className="list">
				{items.map((item, index) =>
					<div key={index} style={{ width: "60px", height: "60px" }} onClick={() => onSelect(item)} className={selectUrl === item ? 'selected clickable square' : 'clickable square'}>
						<img src={item} alt="" className="img-center" />
					</div>
				)}
			</div>
		</div>
	);
}

export default PartList;