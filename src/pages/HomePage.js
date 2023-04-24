import React from 'react';
import MainSwiper from "../components/swiper";
import TopRatedMovies from "../components/topRatedMovies";
import SideBar from "../components/sideBar";
import PopularMovies from "../components/popularMovies";



const HomePage = () => {
	return (
		<>
			<section>
				<div className="container">
					<MainSwiper/>
				</div>
			</section>
			<section>
				<div className="container">
					<div className="row">
						<div className="col-9">
							<TopRatedMovies/>
							<PopularMovies/>
						</div>
						<div className="col-3">
							<SideBar/>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default HomePage;