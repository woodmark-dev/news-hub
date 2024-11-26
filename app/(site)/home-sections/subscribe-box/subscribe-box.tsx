import Image from "next/image";
import "./subscribe-box.css";
import Button from "@/app/components/button/button";

export default function SubscribeBox() {
	return (
		<section className="SubscribeBox">
			<div className="BoxWrapper">
				<div className="ImageWrapper">
					<Image
						src="/subscribe/happy-people.png"
						alt="Image of happy people"
						width={1240}
						height={179}
					/>
				</div>
				<div className="Content">
					<div className="Copy">
						<h4>Subscribe to Our Newsletter</h4>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
							maximus vehicula pretium.
						</p>
					</div>
					<div className="CTA">
						<input type="text" placeholder="Enter Your Email" />
						<Button text="Subscribe" type="primary" />
					</div>
				</div>
			</div>
		</section>
	);
}
