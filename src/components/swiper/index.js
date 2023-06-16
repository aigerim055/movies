import React, {useEffect, useRef, useState} from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


// import required modules
import { Navigation, Pagination, History } from "swiper";
import axios from "axios";
import CardSwiper from "../SwiperCard";

export default function MainSwiper() {
	
	const [movies, setMovies] = useState({})
	const [loading, setLoading] = useState(true)
	
	
	useEffect(() => {
		axios.get('https://api.themoviedb.org/3/movie/popular?api_key=2b45247853b02c34d915443548d8a9b5')
			.then(({data}) => {
				setMovies(data.results)
			})
			.finally(() => {
				setLoading(false)
			})
	}, [])
	
	
	
	
	return (
		<>
			{ loading ? <h4>loading....</h4>:
				
				<Swiper
					// spaceBetween={50}
					slidesPerView={1}
					navigation={true}
					// pagination={true}
					
					modules={[Navigation, Pagination, History]}
					className="mySwiper"
				>
					{
						movies.map(movie => (
							<SwiperSlide key={movie.id}>
									<CardSwiper movie={movie}/>
							</SwiperSlide>
						))
					}
				
				</Swiper>
				
			}
		</>
	);
}

