import { useState } from "react";
import { projects } from "../../constants/index.js";
import AnimatedContent from "./AnimatedContent";
import ProjectModal from "./ProjectModal.jsx";

function Projects() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [selectedProject, setSelectedProject] = useState(null);

	const cardsToShow = 3;
	const cardWidth = 400;
	const gap = 30;
	const totalWidth = cardWidth + gap;

	const nextSlide = () => {
		setCurrentIndex((prev) => Math.min(prev + 1, projects.length - cardsToShow));
	};

	const prevSlide = () => {
		setCurrentIndex((prev) => Math.max(prev - 1, 0));
	};

	const openModal = (project) => {
		setSelectedProject(project);
	};

	const closeModal = () => {
		setSelectedProject(null);
	};

	return (
		<>
			<section id="projects" className="projects-section">
				<AnimatedContent distance={80} duration={1.5}>
					<div className="projects-header">
						<h2 className="projects-title">Projects</h2>
						<div className="slider-controls">
							<button className="slider-btn" onClick={prevSlide} disabled={currentIndex === 0}>
								<svg width="30" height="30" viewBox="0 0 24 24" fill="none">
									<path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
								</svg>
							</button>
							<button className="slider-btn" onClick={nextSlide} disabled={currentIndex >= projects.length - cardsToShow}>
								<svg width="30" height="30" viewBox="0 0 24 24" fill="none">
									<path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
								</svg>
							</button>
						</div>
					</div>
				</AnimatedContent>

				<AnimatedContent distance={120} duration={1.5} delay={0.2}>
					<div className="projects-slider-container">
						<div className="projects-slider" style={{ transform: `translateX(-${currentIndex * totalWidth}px)` }}>
							{projects.map((project, index) => (
								<div key={index} className="project-card">
									<div className="project-tags">
										<span className="project-tag">{project.year}</span>
										<span className="project-tag">{project.type}</span>
									</div>

									<h3 className="project-card-title">{project.title}</h3>
									<p className="project-description">{project.description}</p>

									<div className="project-image-container">
										<img src={project.image} alt={project.title} className="project-image" />
										<button onClick={() => openModal(project)} className="see-more-btn">
											<span>See More</span>
											<div className="arrow-circle">
												<svg width="20" height="20" viewBox="0 0 24 24" fill="none">
													<path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" />
												</svg>
											</div>
										</button>
									</div>
								</div>
							))}
						</div>
					</div>
				</AnimatedContent>
			</section>

			{selectedProject && <ProjectModal project={selectedProject} onClose={closeModal} />}
		</>
	);
}

export default Projects;
