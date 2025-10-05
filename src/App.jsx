import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Clouds from "./assets/images/Illustrations/Wolk1.png";
import Character from "./assets/images/Illustrations/Character.png";
import Navbar from "./components/Navbar.jsx";
import AboutMe from "./components/AboutMe.jsx";
import SkillsTools from "./components/SkillsTools.jsx";
import Projects from "./components/Projects.jsx";
import Objectives from "./components/Objectives.jsx";
import Contact from "./components/Contact.jsx";
import "./App.css";

gsap.registerPlugin(Draggable, ScrollTrigger);

function App() {
	const cloudsRef = useRef([]);
	const heroTextRef = useRef(null);
	const heroSectionRef = useRef(null);
	const clickInstructionRef = useRef(null);
	const [hoveredPart, setHoveredPart] = useState(null);
	const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
	const [isOverCharacter, setIsOverCharacter] = useState(false);
	const [interactiveEnabled, setInteractiveEnabled] = useState(false);

	useEffect(() => {
		// Hacer las nubes arrastrables
		cloudsRef.current.forEach((cloud) => {
			if (cloud) {
				Draggable.create(cloud, {
					type: "x,y",
					bounds: heroSectionRef.current,
					inertia: true,
				});
			}
		});

		// Animación de scroll dentro del hero
		ScrollTrigger.create({
			trigger: heroSectionRef.current,
			start: "top top",
			end: "bottom top",
			scrub: 1,
			onUpdate: (self) => {
				const progress = self.progress;

				// Nubes de la izquierda (índices 0, 1, 4) vuelan a la izquierda
				[0, 1, 4].forEach((index) => {
					if (cloudsRef.current[index]) {
						gsap.to(cloudsRef.current[index], {
							x: `-=${1000 * progress}`,
							duration: 0,
						});
					}
				});

				// Nubes de la derecha (índices 2, 3, 5) vuelan a la derecha
				[2, 3, 5].forEach((index) => {
					if (cloudsRef.current[index]) {
						gsap.to(cloudsRef.current[index], {
							x: `+=${1000 * progress}`,
							duration: 0,
						});
					}
				});

				// Hacer aparecer el texto "Developer & Designer"
				if (heroTextRef.current) {
					let textOpacity = 0;

					if (progress >= 0.05 && progress <= 0.12) {
						textOpacity = 1;
					} else if (progress < 0.05) {
						textOpacity = progress * 20;
					} else if (progress > 0.12) {
						textOpacity = Math.max(1 - (progress - 0.12) * 10, 0);
					}

					gsap.to(heroTextRef.current, {
						opacity: textOpacity,
						scale: 1,
						duration: 0,
					});
				}

				// "Click on me" aparece y ACTIVA la interactividad
				if (clickInstructionRef.current) {
					let clickOpacity = 0;

					if (progress >= 0.18 && progress <= 0.8) {
						clickOpacity = 1;
						setInteractiveEnabled(true);
					} else {
						setInteractiveEnabled(false);
						if (progress < 0.18 && progress >= 0.15) {
							clickOpacity = (progress - 0.15) * 33;
						}
					}

					gsap.to(clickInstructionRef.current, {
						opacity: clickOpacity,
						duration: 0,
					});
				}
			},
		});

		return () => {
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
		};
	}, []);

	const handlePartClick = (section) => {
		if (!interactiveEnabled) return;

		gsap.to(heroSectionRef.current, {
			opacity: 0,
			duration: 0.5,
			onComplete: () => {
				document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
				setTimeout(() => {
					gsap.to(heroSectionRef.current, {
						opacity: 1,
						duration: 0.5,
					});
				}, 300);
			},
		});
	};

	const handleMouseMove = (e) => {
		if (!interactiveEnabled) return;
		const rect = e.currentTarget.getBoundingClientRect();
		setCursorPosition({
			x: e.clientX - rect.left,
			y: e.clientY - rect.top,
		});
	};

	const handleMouseEnter = (part) => {
		if (!interactiveEnabled) return;
		setHoveredPart(part);
	};

	return (
		<>
			<Navbar />
			<main ref={heroSectionRef}>
				<div className="hero-content">
					<div className="clouds">
						<img ref={(el) => (cloudsRef.current[0] = el)} src={Clouds} alt="cloud" className="cloud cloud-1" />
						<img ref={(el) => (cloudsRef.current[1] = el)} src={Clouds} alt="cloud" className="cloud cloud-2" />
						<img ref={(el) => (cloudsRef.current[2] = el)} src={Clouds} alt="cloud" className="cloud cloud-3" />
						<img ref={(el) => (cloudsRef.current[3] = el)} src={Clouds} alt="cloud" className="cloud cloud-4" />
						<img ref={(el) => (cloudsRef.current[4] = el)} src={Clouds} alt="cloud" className="cloud cloud-5" />
						<img ref={(el) => (cloudsRef.current[5] = el)} src={Clouds} alt="cloud" className="cloud cloud-6" />
					</div>

					<div ref={heroTextRef} className="hero-text">
						<p className="hero-subtitle">Front-end & Mobile app</p>
						<h1 className="hero-title">
							Developer
							<br />
							<span>&</span>
							<br />
							Designer
						</h1>
					</div>

					<div
						className="character-container"
						onMouseMove={handleMouseMove}
						onMouseEnter={() => interactiveEnabled && setIsOverCharacter(true)}
						onMouseLeave={() => {
							setIsOverCharacter(false);
							setHoveredPart(null);
						}}
					>
						<img src={Character} alt="character" className="character" />

						<div className={`character-area head-area ${!interactiveEnabled ? "disabled" : ""}`} onMouseEnter={() => handleMouseEnter("about")} onClick={() => handlePartClick("about")} />
						<div className={`character-area chest-area ${!interactiveEnabled ? "disabled" : ""}`} onMouseEnter={() => handleMouseEnter("skills")} onClick={() => handlePartClick("skills")} />
						<div className={`character-area left-arm-area ${!interactiveEnabled ? "disabled" : ""}`} onMouseEnter={() => handleMouseEnter("projects")} onClick={() => handlePartClick("projects")} />
						<div className={`character-area right-arm-area ${!interactiveEnabled ? "disabled" : ""}`} onMouseEnter={() => handleMouseEnter("projects")} onClick={() => handlePartClick("projects")} />
						<div className={`character-area legs-area ${!interactiveEnabled ? "disabled" : ""}`} onMouseEnter={() => handleMouseEnter("objectives")} onClick={() => handlePartClick("objective")} />

						{interactiveEnabled && isOverCharacter && hoveredPart && (
							<div
								className="cursor-follower"
								style={{
									left: `${cursorPosition.x}px`,
									top: `${cursorPosition.y}px`,
								}}
							>
								{hoveredPart === "about" && "About me"}
								{hoveredPart === "skills" && "Skills & Tools"}
								{hoveredPart === "projects" && "Projects"}
								{hoveredPart === "objectives" && "Objectives"}
							</div>
						)}

						<div ref={clickInstructionRef} className="click-instruction">
							<p>Click on me</p>
							<svg className="arrow-pointer" width="100" height="80" viewBox="0 0 100 80">
								<path d="M 10 10 Q 40 5, 60 25 T 85 55" stroke="black" strokeWidth="3" fill="none" />
								<polygon points="85,55 78,52 88,48" fill="black" />
							</svg>
						</div>
					</div>
				</div>
			</main>
			<AboutMe />
			<SkillsTools />
			<Projects />
			<Objectives />
			<Contact />
		</>
	);
}

export default App;
