import { useState, useRef } from "react";
import AnimatedContent from "./AnimatedContent";
import ImageTrail from "/src/components/ImageTrail.jsx";
import Head from "../assets/images/Illustrations/Hoofd-mannequin.png";
import Me from "../assets/images/Me/hoverme.jpg";
function AboutMe() {
	const [trailKey, setTrailKey] = useState(0);
	const [isHovering, setIsHovering] = useState(false);
	const handleMouseEnter = () => {
		setIsHovering(true);
		setTrailKey((prev) => prev + 1); // Reset the trail on each hover
	};

	const handleMouseLeave = () => {
		setIsHovering(false);
	};
	return (
		<section id="about" className="about-section">
			<div className="about-container">
				<AnimatedContent distance={100} direction="vertical" reverse={false} duration={1.5}>
					<div className="about-left">
						<h2 className="about-title">About Me</h2>
						<div className="about-image" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
							<img src={Head} alt="head" className="head" />

							{isHovering && (
								<div className="image-trail-container">
									<ImageTrail key={trailKey} items={[Me]} />
								</div>
							)}
						</div>
					</div>
				</AnimatedContent>
				<AnimatedContent distance={100} direction="vertical" duration={1.5} delay={0.2}>
					<div className="about-right">
						<div className="about-tags">
							<span className="tag">Web design & developer</span>
							<span className="tag">App design & developer</span>
						</div>

						<p className="about-text">
							Hi! My name is <strong>Laura Ocampo</strong> and I study Multimedia & Creative Technology at ErasmusHogeschool. I can speak 3 languages fluently. I speak Spanish, French and Dutch and I also can speak English B1 level.
						</p>

						<p className="about-text">
							When I'm not designing or coding, you'll likely find me on the football field, where teamwork and strategy are as essential as they are in tech. My curious spirit pushes me to constantly learn and experiment, whether it's a new design
							tool, a coding language, or ways to make an impact with my work.
						</p>

						<a href="#contact">
							<button className="contact-button">Contact me</button>
						</a>
					</div>
				</AnimatedContent>
			</div>
		</section>
	);
}

export default AboutMe;
