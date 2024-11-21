import FacebookIcon from "@/app/components/footer/components/site-map/media-icons/facebook";
import StayConnectedCard from "./components/stay-connected-card/stay-connected-card";
import "./stay-connected.css";
import InstagramIcon from "@/app/components/footer/components/site-map/media-icons/instagram";
import YoutubeIcon from "@/app/components/footer/components/site-map/media-icons/youtube";
import "./stay-connected.css";

export default function StayConnected() {
	return (
		<div className="StayConnected">
			<header>
				<h4>stay connected</h4>
			</header>
			<StayConnectedCard buttonText="like" followers="16,000 fans">
				<FacebookIcon />
			</StayConnectedCard>
			<StayConnectedCard buttonText="follow" followers="10,000 followers">
				<InstagramIcon />
			</StayConnectedCard>
			<StayConnectedCard buttonText="subscribed" followers="10,000 subscribers">
				<YoutubeIcon />
			</StayConnectedCard>
		</div>
	);
}
