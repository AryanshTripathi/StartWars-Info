import React from "react";

const Individual = ({ individual }) => {
	return (
		<div className="card">
			<h3>{individual.name}</h3>
			<p>Gender: {individual.gender}</p>
			<p>Birth Year: {individual.birth_year}</p>
		</div>
	);
};

export default Individual;
