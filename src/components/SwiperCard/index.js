import React, {useState} from 'react';
import TrailerButton from "../TrailerButoon";
import {Link} from "react-router-dom";

const CardSwiper = (props) => {
	
	
	const movie = props.movie
	
	const list = movie.genre_ids
	
	
	
	
	return (
		<div >
			<div className="row" style={{height: '100%'}} >
				<div className="col-4" style={{height: '100%'}} >
					<div className="box poster" style={{height: '100%',padding: '40px 0 0 70px',}} >
						<Link to={`/movie/${movie.id}`}>
							<img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
							     style={{
								     height: '100%',
								     width: '100%',
								     borderRadius: '40px',
								     objectFit: 'contain'
							     }}
							     alt=""
							/>
						</Link>
					</div>
				</div>
				<div className="col-8">
					<div className="box" style={{padding: '45px 60px 0 0 '}}>
						<h2>{movie.original_title}</h2>
						
						<h5 className={'desc'}>{movie.overview}</h5>
						<div className={'genres'}>
							{
								list.map(el => (
									<p>{genres[el]}</p>
								))
							}
						</div>
						<div
							className="more"
							style={{
								marginTop: '30px',
								display: 'flex',
								gap: '20px'
							}}
						>
							<TrailerButton id={movie.id}/>
							<Link to={`/movie/${movie.id}`}>
								<button className={'custom-btn'}>watch</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};


const genres = {
	28: 'Action',
	12: 'Adventure',
	16: 'Animation',
	35: 'Comedy',
	80: 'Crime',
	99: 'Documentary',
	18: 'Drama',
	10751: 'Family',
	14: 'Fantasy',
	36: 'History',
	27: 'Horror',
	10402: 'Music',
	9648: 'Mystery',
	10749: 'Romance',
	878: 'Science Fiction',
	53: 'Thriller',
	10752: 'War',
	37: 'Western'
}

export default CardSwiper;