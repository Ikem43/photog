import React from 'react';

const ImageCard = ({ image }) => {
	const tags = image.tags.split(',');
	return (
		<div className='m-2 shadow-lg bg-white-100'>
			<div>
				<img src={image.webformatURL} alt='' className='w-full' />
			</div>
			<div className='px-3 py-4'>
				<div className='font-bold text-green-500 text-xl mb-2'>
					<h2>{image.user}</h2>
				</div>
				<div className='border-b border-gray-600'></div>
				<ul>
					<li className='border-b border-gray-600'>
						<strong>Views : </strong> {image.views}
					</li>
					<li className='border-b border-gray-600'>
						<strong>Downloads : </strong> {image.Download}
					</li>
					<li className='border-b border-gray-600'>
						<strong>Likes : </strong> {image.likes}
					</li>
				</ul>
				<div className='py-4'>
					{tags.map((tag, index) => (
						<span
							key={index}
							className='inline-block bg-gray-200 text-gray-700 px-3 py-1 rounded-full font-semibold text-sm mr-2'>
							#{tag}
						</span>
					))}
					;
				</div>
			</div>
		</div>
	);
};

export default ImageCard;
