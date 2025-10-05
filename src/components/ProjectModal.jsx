import { useEffect } from "react";

function ProjectModal({ project, onClose }) {
	useEffect(() => {
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = "unset";
		};
	}, []);

	if (!project) return null;

	return (
		<div className="modal-overlay" onClick={onClose}>
			<div className="modal-content" onClick={(e) => e.stopPropagation()}>
				<button className="modal-close" onClick={onClose}>
					×
				</button>

				<div className="modal-header">
					<h2 className="modal-title">{project.title}</h2>
					<div className="modal-tags">
						{project.tags.map((tag, index) => (
							<span key={index} className="modal-tag">
								{tag}
							</span>
						))}
					</div>
					<p className="modal-description">{project.fullDescription}</p>
					<a href={project.websiteUrl} target="_blank" rel="noopener noreferrer" className="visit-website-btn">
						<span>Visit Project</span>
						<div className="arrow-circle-modal">
							<svg width="18" height="18" viewBox="0 0 24 24" fill="none">
								<path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" />
							</svg>
						</div>
					</a>
				</div>

				<div className={`modal-images ${project.type === "App" || project.type === "Web-App" ? "app-grid" : ""}`}>
					{project.screenshots.map((screenshot, index) => (
						<img key={index} src={screenshot} alt={`${project.title} screenshot ${index + 1}`} className={`modal-image ${project.type === "App" || project.type === "Web-App" ? "app-screenshot" : ""}`} />
					))}
				</div>
			</div>
		</div>
	);
}

export default ProjectModal;
