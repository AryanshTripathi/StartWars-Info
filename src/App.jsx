import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Navbar from "./Components/Navbar";
import Planets from "./Components/Planets";
import People from "./Components/People";
import { BallTriangle } from "react-loader-spinner";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

function App() {
	const [page, setPage] = useState("Planets");
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<div className="App">
					<h1>Star Wars Info</h1>
					<Navbar setPage={setPage} />

					<div className="content">
						{page == "Planets" ? (
							<Planets BallTriangle={BallTriangle} />
						) : (
							<People BallTriangle={BallTriangle} />
						)}
					</div>
				</div>
				<ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
			</QueryClientProvider>
		</>
	);
}

export default App;
