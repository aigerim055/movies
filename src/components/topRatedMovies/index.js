import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

const TopRatedMovies = () => {
	
	const [movies, setMovies] = useState({})
	const [loading, setLoading] = useState(true)
	const navigate = useNavigate()
	
	useEffect(() => {
		axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=2b45247853b02c34d915443548d8a9b5')
			.then(({data}) => {
				setMovies(data.results)
			})
			.finally(() => {
				setLoading(false)
			})
	}, [])
	
	const handleClick = (movie) => {
		navigate(`/movie/${movie.id}`)
	}
	
	return (
		<div>
			<div className="top-title">
				<h2>Top rated Movies</h2>
				<svg width={45} fill={'#fac100'} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
					<defs>
					</defs>
					<title>Branding</title>
					<path className="cls-1"
					      d="M41.864,18.729A2.716,2.716,0,0,0,39.837,16.9l-8.89-1.925L26.5,7.331a2.89,2.89,0,0,0-4.994,0l-4.45,7.641L8.164,16.9A2.743,2.743,0,0,0,6.7,21.405l6.06,6.783-.917,9.048a2.734,2.734,0,0,0,3.835,2.785L24,36.354l8.323,3.667a2.742,2.742,0,0,0,3.835-2.785l-.917-9.048,6.06-6.783A2.718,2.718,0,0,0,41.864,18.729Z"/>
					</svg>
			</div>
			<div className="row">
				{   loading ? <span>loading...</span>:
					movies.slice(0, 12).map(movie => (
						<div key={movie.id} className={'col-3'}>
							<div className="box card">
								<img
									onClick={() => handleClick(movie)}
									className={'img'}
									style={{
										width: '100%',
										borderRadius: '30px',
										height: '100%'
									}}
									src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
									alt=""
								/>
							</div>
						</div>
					))
					
				}
			</div>
		</div>
	);
};

export default TopRatedMovies;