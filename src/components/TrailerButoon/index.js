import React, {useEffect, useState} from 'react';
import axios from "axios";

const TrailerButton = (props) => {
	
	const [key, setKey] = useState({})
	const [loading, setLoading] = useState(true)
	
	
	useEffect(() => {
		axios.get(`https://api.themoviedb.org/3/movie/${props.id}/videos?api_key=2b45247853b02c34d915443548d8a9b5`)
			.then(({data}) => {
				setKey(data.results.find(el => el.type === 'Trailer').key)
			})
			.finally(() => {
				setLoading(false)
			})
	}, [])
	
	// console.log(`https://www.youtube.com/watch?v${key}`)
	
	return (
		<>
			{ loading ? <span>loading...</span>:
				<a
					target={"_blank"}
					href={`https://www.youtube.com/watch?v=${key}`}
				>
					<button className={'custom-btn'}>
						Trailer
					</button>
				</a>
			}
		</>
	);
};

export default TrailerButton;