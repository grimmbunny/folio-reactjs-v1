import React from 'react';
// import { Helmet, HelmetProvider } from "@dr.pogodin/react-helmet";

import ProfileCard from '../components/ProfileCard';

// import { FaGithub, FaBehance, FaLinkedinIn, FaLink } from "react-icons/fa";
import { FaWhatsapp, FaRegEnvelope } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import TimelineCard from '../components/TimelineCard'; // Não vamos mais usar
import ProjectsCard from '../components/ProjectsCard'; // O original (estático)
import AllProjectsCard from '../components/AllProjectsCard'; // O NOVO (com scroll)

import SkillsetCard from '../components/SkillsetCard';
// import portfolioItems from "../components/PortfolioItem";

export default function Home() {
	return (
		<div id='page-content'>
			<Header />

			<main>
				<section className='home-area'>
					<div className='container'>
						<div className='row g-4'>
							<ProfileCard />
							<div className='col-xl-4 column-shrink-height'>
								{/* --- AQUI ESTÁ O NOVO CARD --- */}
								<AllProjectsCard />
								{/* SKILLSET */}
								<SkillsetCard />
							</div>
							<div className='col-xl-4'>
								{/* --- AQUI ESTÁ O CARD ORIGINAL --- */}
								<ProjectsCard />
							</div>
						</div>
						<div className='services-area mt-24'>
							<div className='row g-4'>
								<div className='col-xl-8'>
									<div className='card services-card'>
										<div className='card-body'>
											<h3 className='card-title'>
												Serviços
												<a className='link-btn' href='/services'>
													Todos os serviços
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
												</a>
											</h3>
											<div className='services-main mt-24'>
												<div className='row g-4'>
													<div className='col-lg-6'>
														<div className='service-category'>
															<div className='category-header'>
																<i className='fas fa-palette' />
																<h4>Design</h4>
															</div>
															<ul className='service-list'>
																<li>Design digital &amp; social</li>
																<li>Design para impressos</li>
																<li>Ilustração e 3D</li>
																<li>Design de interface/UI</li>
																<li>
																	Criação ou ajuste de wireframes
																	e protótipos
																</li>
																<li>Motion graphics</li>
																<li>
																	Ferramentas de inteligência
																	artificial
																</li>
																<li>Diagramação e pitch decks</li>
															</ul>
														</div>
													</div>
													<div className='col-lg-6'>
														<div className='service-category'>
															<div className='category-header'>
																<i className='fas fa-code' />
																<h4>Developer</h4>
															</div>
															<ul className='service-list'>
																<li>Landing pages</li>
																<li>Portfolio</li>
																<li>
																	Componentização em framework
																</li>
																<li>
																	Manutenção de código front-end
																</li>
																<li>
																	Conversão de design para código
																</li>
																<li>
																	Soluções com ferramentas code e
																	no-code
																</li>
															</ul>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className='col-xl-4'>
									<div className='card lets-talk-together-card'>
										<div className='card-body'>
											<div className='scrolling-info'>
												<div className='slider-item'>
													<p>
														Disponível para projetos 🚀 Disponível para
														oportunidades fixas 🎨 Disponível para
														projetos 🚀 Disponível para oportunidades
														fixas 🎨
													</p>
												</div>
											</div>
											<h3 className='card-title'>
												Para orçamentos,{' '}
												<span className='d-block'>dúvidas e contato</span>
											</h3>

											<div className='contact-info-wrap'>
												<a
													href='mailto:muzzastudio@outlook.com'
													className='contact-info-link d-flex align-items-center gap-2'
												>
													<FaRegEnvelope size={16} />
													muzzastudio@outlook.com
												</a>

												<a
													href='mailto:flavuskka@gmail.com'
													className='contact-info-link d-flex align-items-center gap-2'
												>
													<FaRegEnvelope size={16} />
													flavuskka@gmail.com
												</a>

												<a
													href='https://wa.me/5521967332761'
													target='_blank'
													rel='noopener noreferrer'
													className='contact-info-link d-flex align-items-center gap-2'
												>
													<FaWhatsapp size={16} />
													+55 (21) 96733-2761
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}
