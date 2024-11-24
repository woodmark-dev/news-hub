import UmbrellaIcon from "../../icons/umbrella";
import "./top-updates.css";

export default function TopUpdates() {
	return (
		<section className="TopUpdates">
			<p className="PlaceHolder" role="place holder" inert></p>
			<p className="Update">
				Traffic Report: Lekki Ibeju express is currently blocked.
			</p>
			<div className="WeatherUpdates">
				<div className="Date">
					<p>Mon</p>
					<p>30C</p>
				</div>
				<div className="LatestUpdate">
					<p>Rainy</p>
					<UmbrellaIcon />
				</div>
			</div>
		</section>
	);
}
