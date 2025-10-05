import { developerSkills } from "../../constants/index.js";
import { designerSkills } from "../../constants/index.js";
import AnimatedContent from "./AnimatedContent";
function SkillsTools() {
	return (
		<section id="skills" className="skills-section">
			<AnimatedContent distance={80} duration={1.5}>
				<div className="skills-header">
					<h2 className="skills-main-title">Skills & Tools</h2>
				</div>
			</AnimatedContent>

			<div className="skills-container">
				<AnimatedContent distance={100} direction="horizontal" reverse={true} duration={1.5} delay={0.2}>
					{/* Developer Column */}
					<div className="skills-column">
						<h3 className="column-title">DEVELOPER</h3>

						<div className="skills-card">
							<h4 className="card-title">Front-end</h4>
							<div className="skills-tags">
								{developerSkills.frontend.map((skill, index) => (
									<span key={index} className="skill-tag">
										{skill}
									</span>
								))}
							</div>

							<h4 className="card-title">Back-end</h4>
							<div className="skills-tags">
								{developerSkills.backend.map((skill, index) => (
									<span key={index} className="skill-tag">
										{skill}
									</span>
								))}
							</div>
						</div>
					</div>
				</AnimatedContent>

				{/* Designer Column */}
				<AnimatedContent distance={100} direction="horizontal" duration={1.5} delay={0.2}>
					<div className="skills-column">
						<h3 className="column-title">DESIGNER</h3>

						<div className="skills-card">
							<h4 className="card-title">Softwares</h4>
							<div className="skills-tags">
								{designerSkills.softwares.map((skill, index) => (
									<span key={index} className="skill-tag">
										{skill}
									</span>
								))}
							</div>

							<h4 className="card-title">Marketing Tools</h4>
							<div className="skills-tags">
								{designerSkills.marketing.map((skill, index) => (
									<span key={index} className="skill-tag">
										{skill}
									</span>
								))}
							</div>
						</div>
					</div>
				</AnimatedContent>
			</div>
		</section>
	);
}

export default SkillsTools;
