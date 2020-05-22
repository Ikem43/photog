import React, { useState, useEffect, Fragment } from 'react';
import './assets/style.css';
import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch';

function App() {
	const [images, setImages] = useState([]);
	const [isLoading, setIsloading] = useState(true);
	const [term, setTerm] = useState('');

	useEffect(() => {
		fetch(
			`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`,
		)
			.then(res => res.json())
			.then(data => {
				setImages(data.hits);
				setIsloading(false);
			})
			.catch(err => console.log(err));

		// async () => {
		// // 	const response = await axios.get(
		// // 		`https://pixabay.com/api/?key=${process.env.PHOTOG_APP_PIXABAY_API}&q=${text}&image_type=photo&pretty=true`,
		// // 	);
		// // 	console.log(response);
		// // })();
	}, [term]);
	return (
		<Fragment>
			<ImageSearch sText={text => setTerm(text)} />

			{!isLoading && images.length === 0 && (
				<h1 className='text-5xl text-center mx-auto mt-32'>No Image Found</h1>
			)}
			{isLoading ? (
				<h1 className='text-6xl mx-auto text-center'>Loading...</h1>
			) : (
				<div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
					{images.map(image => (
						<ImageCard key={image.id} image={image} />
					))}
				</div>
			)}
		</Fragment>
	);
}

export default App;
