import { useForm } from "@formspree/react";

function ContactForm() {
	const [state, handleSubmit] = useForm("xpwydkra");

	if (state.succeeded) {
		return (
			<div className="success-message">
				<p>Thanks for reaching out! I'll get back to you soon.</p>
			</div>
		);
	}

	return (
		<form onSubmit={handleSubmit} className="contact-form">
			<div className="form-row">
				<div className="form-group">
					<label htmlFor="name">First name</label>
					<input id="name" type="text" name="name" placeholder="Enter your first name" required />
				</div>

				<div className="form-group">
					<label htmlFor="email">Email</label>
					<input id="email" type="email" name="email" placeholder="Enter your email" required />
				</div>
			</div>

			<div className="form-group full-width">
				<label htmlFor="message">Message</label>
				<textarea id="message" name="message" placeholder="Enter your message" rows="8" required />
			</div>

			<button type="submit" disabled={state.submitting}>
				{state.submitting ? "Sending..." : "Send your message"}
			</button>
		</form>
	);
}

export default ContactForm;
