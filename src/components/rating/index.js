import { Rating } from 'react-simple-star-rating'

export function CustomRating(props) {
	// console.log(props.rating /2)
	
	return (
		<div
			className='rating'
		     style={{
			     paddingTop: '10px'
		     }}
		>
			<Rating
				initialValue={Math.round(props.rating /2)}
				readonly={true}
			/>
		</div>
	)
}