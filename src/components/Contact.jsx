import ContactForm from "/src/components/ContactForm.jsx";
import AnimatedContent from "./AnimatedContent";
function Contact() {
	return (
		<section id="contact" className="contact-section">
			<AnimatedContent distance={80} duration={1.5}>
				<div className="contact-container">
					<h2 className="contact-title">GET IN TOUCH</h2>
				</div>
			</AnimatedContent>
			<AnimatedContent distance={100} duration={1.5} delay={0.2}>
				<ContactForm />
			</AnimatedContent>
		</section>
	);
}

export default Contact;
