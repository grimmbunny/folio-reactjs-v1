import React from 'react';
import { FaGithub, FaBehance, FaLinkedinIn, FaLink } from 'react-icons/fa';

export default function ProfileCard({ className }) {
	return (
		<div className={`col-xl-4 ${className || ''}`}>
			<div className='card profile-card'>
				<div className='card-body'>
					<div className='image text-center'>
						<img src='/assets/img/images/profile.png' alt='profile' />
					</div>
					<div className='text'>
						<h3 className='card-title'>Flávia Proença</h3>
						<h4 className='profile-subtitle'>Designer Fullstack (Design + Dev)</h4>
						<p>
							Designer generalista pleno (graphic, motion e web) e frontend júnior do
							Rio de Janeiro, com mais de 5 anos de experiência na criação de soluções
							digitais que unem estética, funcionalidade e tecnologia. Minha
							trajetória é guiada pela busca da sinergia entre o design criativo e o
							desenvolvimento técnico, atuando de ponta a ponta no ciclo de vida de um
							produto.
						</p>
						<p>
							Formada em Design Digital (PUC-Rio), pós-graduada em UI/UX (Unyleya) e
							Análise e Desenvolvimento de Sistemas (Mackenzie).
						</p>
						<div className='social-media-icon'>
							<ul className='list-unstyled d-flex gap-2 justify-content-left mt-4'>
								<li>
									<a
										href='https://github.com/grimmbunny'
										target='_blank'
										rel='noopener noreferrer'
										aria-label='GitHub'
									>
										<FaGithub size={20} />
									</a>
								</li>
								<li>
									<a
										href='https://www.behance.net/muzzae'
										target='_blank'
										rel='noopener noreferrer'
										aria-label='Behance'
									>
										<FaBehance size={20} />
									</a>
								</li>
								<li>
									<a
										href='https://linkedin.com/in/lapiccino'
										target='_blank'
										rel='noopener noreferrer'
										aria-label='LinkedIn'
									>
										<FaLinkedinIn size={20} />
									</a>
								</li>
								<li>
									<a
										href='https://linktr.ee/flxvia'
										target='_blank'
										rel='noopener noreferrer'
										aria-label='Linktree'
									>
										<FaLink size={20} />
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
