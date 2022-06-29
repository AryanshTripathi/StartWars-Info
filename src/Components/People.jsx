import React, { useState } from "react";
import { useQuery } from "react-query";
import Individual from "./Individual";

const fetchPeople = async ({ queryKey }) => {
	console.log(queryKey);
	const [key, page] = queryKey;
	const res = await fetch(`https://swapi.dev/api/people/?page=${page}`);
	return res.json();
};

const Planets = ({ BallTriangle }) => {
	const [page, setPage] = useState(1);
	const { data, status } = useQuery(["people", page], fetchPeople, {
		staleTime: 2000,
	});
	console.log(data);
	return (
		<div>
			{status == "loading" && <BallTriangle />}
			{status == "error" && <div>Error fetching data</div>}
			{status == "success" && (
				<div>
					<h2>People</h2>
					<div className="btn-group">
						<button onClick={() => setPage(1)}>Page 1</button>
						<button onClick={() => setPage(2)}>Page 2</button>
						<button onClick={() => setPage(3)}>Page 3</button>
						<button onClick={() => setPage(4)}>Page 4</button>
						<button onClick={() => setPage(5)}>Page 5</button>
						<button onClick={() => setPage(6)}>Page 6</button>
						<button onClick={() => setPage(7)}>Page 7</button>
						<button onClick={() => setPage(8)}>Page 8</button>
						<button onClick={() => setPage(9)}>Page 9</button>
					</div>
					{data.results.map((individual, index) => (
						<Individual individual={individual} key={index} />
					))}
					{/* Data fetched successfully */}
				</div>
			)}
		</div>
	);
};

export default Planets;
