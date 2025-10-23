// src/components/AllProjectsCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import items from './PortfolioItem';

export default function AllProjectsCard() {
	return (
		// --- ADICIONADO A CLASSE AQUI ---
		<div className='card card-projects card-all-projects'>
			<div className='card-body'>
				<h3 className='card-title'>
					Portfolio view{' '}
					<Link className='link-btn' to='/portfolio'>
						All Projects
						<svg
							className='icon'
							width={20}
							height={20}
							viewBox='0 0 20 20'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M4.16699 10H15.8337'
								stroke='#ff4c82'
								strokeWidth='1.5'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								d='M10.833 15L15.833 10'
								stroke='#ff4c82'
								strokeWidth='1.5'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								d='M10.833 5L15.833 10'
								stroke='#ff4c82'
								strokeWidth='1.5'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					</Link>
				</h3>
				<div className='projects-main mt-24'>
					<div className='portfolio-slider-vertical'>
						{items.map((item) => (
							<Link
								to={`/portfolio/${item.slug}`}
								key={item.id}
								className='slider-item-vertical'
							>
								<div className='image'>
									<img
										src={item.thumbnailImg || item.img}
										alt={item.title}
										className='img-fluid'
									/>
								</div>
								<div className='info'>
									<h5 className='title'>{item.title}</h5>
									<p className='services'>{item.services?.join(', ')}</p>
									<small className='categories'>
										{item.categories?.join(' | ')}
									</small>
								</div>
							</Link>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
