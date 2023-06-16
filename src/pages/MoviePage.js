import React, {useEffect, useState} from 'react';
import Movie from "../components/movie";
import {useParams} from "react-router-dom";
import axios from "axios";
import Actors from "../components/actors";

const MoviePage = () => {
	
	const [movie, setMovie] = useState({})
	const [loading, setLoading] = useState(true)
	const params = useParams().id
	
	useEffect(() => {
		axios.get(`https://api.themoviedb.org/3/movie/${params}?api_key=2b45247853b02c34d915443548d8a9b5`)
			.then(({data}) => {
				setMovie(data)
			})
			.finally(() => {
				setLoading(false)
			})
	}, [])
	
	return (
		<>
			<section>
				<div className="container">
					<Movie loading={loading} movie={movie}/>
					<Actors id={params}/>
				</div>
			</section>
		</>
	);
};

export default MoviePage;