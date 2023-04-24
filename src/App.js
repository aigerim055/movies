import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/header";
import MoviePage from "./pages/MoviePage";

function App() {
	return (
		<>
			<BrowserRouter>
				<Header/>
				<Routes>
					<Route path={'/'} element={<HomePage/>}/>
					<Route path={'/movie/:id'} element={<MoviePage/>}/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
