import TeamPhoto from "./components/team-photos/team-photo";
import "./the-team.css";

export default function TheTeam() {
	return (
		<section className="TheTeam">
			<div className="LeftSide">
				<div className="PhotoGroup">
					<div className="TopPhoto">
						{" "}
						<TeamPhoto
							imgSrc="/about-us/writer.jpeg"
							name="Ikechuku Inana"
							role="Web Content Writer"
						/>
					</div>
					<div className="BottomPhotos">
						{" "}
						<TeamPhoto
							imgSrc="/about-us/programmer.jpeg"
							name="Lilian David"
							role="Web Developer"
						/>{" "}
						<TeamPhoto
							imgSrc="/about-us/artist.jpeg"
							name="Boss Imam"
							role="UI Designer"
						/>
					</div>
				</div>
			</div>

			<div className="RightSide">
				<header>
					<h2>the team</h2>
				</header>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, Lorem ipsum dolor sit amet.
				</p>
				<p>
					Ut enim ad minim veniam, Lorem ipsum dolor sit amet, consectetur
					adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
					magna aliqua.
				</p>
			</div>
		</section>
	);
}
