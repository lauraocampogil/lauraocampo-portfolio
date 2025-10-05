import { traits } from "../../constants/index.js";
import AnimatedContent from "./AnimatedContent";
import Legs from "../assets/images/Illustrations/Benen-mannequin.png";

function Objective() {
	return (
		<section id="objective" className="objective-section">
			<div className="objective-container">
				<AnimatedContent distance={100} duration={1.5}>
					<div className="objective-left">
						<h2 className="objective-title">My Objective</h2>
						<div className="objective-image">
							<img src={Legs} alt="legs" className="legs" />
						</div>
					</div>
				</AnimatedContent>
				<AnimatedContent distance={100} duration={1.5} delay={0.2}>
					<div className="objective-right">
						<div className="objective-card">
							<div className="objective-traits">
								{traits.map((trait, index) => (
									<span key={index} className="trait-tag">
										{trait}
									</span>
								))}
							</div>

							<div className="objective-content">
								<p>
									My objective is to work with football clubs or businesses related to football. I want to create mobile apps or front-end design websites and really improve the visibility of <strong>woman football.</strong>
								</p>

								<p>
									I play football at 2nd division and I know right now that there is a huge difference of woman football from 15 years ago to today but I want to bring it to the next level to have hundred of <strong>stadiums fully booked.</strong>
								</p>

								<p>I want to challenge myself in a new environment to learn, develop, improve my skills through different projects and contribute more to the company with my abilities.</p>
							</div>
						</div>
					</div>
				</AnimatedContent>
			</div>
		</section>
	);
}

export default Objective;
