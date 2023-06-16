import React, {useEffect, useState} from 'react';
import {CustomRating} from "../rating";

const Movie = (props) => {
	
	const movie = props.movie
	
	return (
		<div>
			{   props.loading ? <span>loading...</span>:
				<div className="row">
					<div className="col-4">
						<div className="box movie-desc"
							style={{
								textAlign: 'center'
							}}
						>
							<img
								style={{
									width: '100%',
									borderRadius: '20px'
								}}
								src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
								alt=""
							/>
							<CustomRating rating={movie.vote_average}/>
							<p>{movie.vote_count} votes</p>
						</div>
					</div>
					<div className="col-8">
						<div className="box movie-desc">
							<h1>{movie.title}</h1>
							<h3 style={{
								paddingTop: '15px'
							}}>
								{movie.release_date}  |  {movie.runtime} min
							</h3>
							<h4>
								{movie.overview}
							</h4>
							<div className="genres">
								{
									movie.genres.map(genre => (
										<p>{genre.name}</p>
									))
								}
							</div>
							<div
								style={{
									display: 'flex',
									alignItems: 'center',
									gap: '80px',
									padding: '30px 0'
								}}
							>
								<h3>Budget: {movie.budget} $</h3>
								<h3>Revenue: {movie.revenue} $</h3>
							</div>
							{/*{   movie.tagline &&*/}
							{/*	<h2>"{movie.tagline}"</h2>*/}
							{/*}*/}
						</div>
					</div>
				</div>
				
				
			}
		</div>
	);
};

export default Movie;