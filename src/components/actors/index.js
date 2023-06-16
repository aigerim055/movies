import React, {useEffect, useState} from 'react';
import axios from "axios";
import {logDOM} from "@testing-library/react";

const Actors = (props) => {
	
	const [actors, setActors] = useState({})
	const [loading, setLoading] = useState(true)
	
	useEffect(() => {
		axios.get(`https://api.themoviedb.org/3/movie/${props.id}/credits?api_key=2b45247853b02c34d915443548d8a9b5`)
			.then(({data}) => {
				setActors(data)
			})
			.finally(() => {
				setLoading(false)
			})
	}, [])
	
	// console.log(actors.crew.map(actor => {
	// 	console.log(actor, 'actor')}))
	
	return (
		<div className={'row'}>
			{   loading ? <span>loading...</span>:
				actors.crew.map(actor => (
					<h1>sss</h1>
					// <div className={'col-3'} key={actor.id}>
					// 	<img
					// 		style={{
					// 			width: '100%'
					// 		}}
					// 		src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`} alt=""/>
					// </div>
				))
			}
		</div>
	);
};

export default Actors;