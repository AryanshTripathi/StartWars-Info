import React, { useState } from "react";
import { useQuery } from "react-query";
import Planet from "./Planet";

const fetchPlanets = async ({ queryKey }) => {
	const [key, page] = queryKey;
	const res = await fetch(`https://swapi.dev/api/planets/?page=${page}`);
	return res.json();
};

const Planets = ({ BallTriangle }) => {
	const [page, setPage] = useState(1);
	const { data, status } = useQuery(["planets", page], fetchPlanets);
	console.log(data);

	return (
		<div>
			{status == "loading" && <BallTriangle />}
			{status == "error" && <div>Error fetching data</div>}
			{status == "success" && (
				<div>
					<h2>Planets</h2>
					<div className="btn-group">
						<button onClick={() => setPage(1)}>Page 1</button>
						<button onClick={() => setPage(2)}>Page 2</button>
						<button onClick={() => setPage(3)}>Page 3</button>
						<button onClick={() => setPage(4)}>Page 4</button>
						<button onClick={() => setPage(5)}>Page 5</button>
						<button onClick={() => setPage(6)}>Page 6</button>
					</div>
					{data.results.map((planet, index) => (
						<Planet planet={planet} key={index} />
					))}
				</div>
			)}
		</div>
	);
};

export default Planets;
