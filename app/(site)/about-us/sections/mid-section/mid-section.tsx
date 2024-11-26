import Image from "next/image";
import "./mid-section.css";
export default function MidSection() {
	return (
		<section className="MidSection">
			<div className="TopSection">
				<Image
					src="/about-us/first.png"
					width={1240}
					height={405}
					alt="People having a discussion"
				/>
			</div>

			<div className="BottomSection">
				<div className="LeftSide">
					<p>“Lorem ipsum dolor sit amet, consectetur adipiscing”</p>
				</div>
				<div className="RightSide">
					<Image
						src="/about-us/second.png"
						width={527}
						height={291}
						alt="a man with a laptop"
					/>
				</div>
			</div>
		</section>
	);
}
