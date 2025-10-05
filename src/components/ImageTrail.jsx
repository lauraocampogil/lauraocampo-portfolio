import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function ImageTrail({ items = [] }) {
	const imageRef = useRef(null);

	useEffect(() => {
		if (!imageRef.current || items.length === 0) return;

		const img = imageRef.current;
		const parent = img.parentElement;
		const rect = parent.getBoundingClientRect();

		// Center the image in the container
		const centerX = rect.width / 3 - 90; // 90 is half of 180px image width
		const centerY = rect.height / 3 - 90;

		// Animate the image appearing
		gsap.fromTo(
			img,
			{
				opacity: 0,
				scale: 0.5,
				x: centerX,
				y: centerY,
			},
			{
				opacity: 1,
				scale: 1,
				duration: 0.5,
				ease: "power2.out",
				onComplete: () => {
					// Fade out after showing
					gsap.to(img, {
						opacity: 0,
						scale: 0.8,
						duration: 0.5,
						delay: 1,
						ease: "power2.in",
					});
				},
			}
		);
	}, [items]);

	if (items.length === 0) return null;

	return (
		<div className="content">
			<div className="content__img" ref={imageRef}>
				<div className="content__img-inner" style={{ backgroundImage: `url(${items[0]})` }} />
			</div>
		</div>
	);
}
