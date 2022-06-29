import React from "react";

const Navbar = ({ setPage }) => {
	return (
		<nav>
			<button
				onClick={() => {
					setPage("Planets");
				}}>
				Planets
			</button>
			<button
				onClick={() => {
					setPage("People");
				}}>
				People
			</button>
		</nav>
	);
};

export default Navbar;
