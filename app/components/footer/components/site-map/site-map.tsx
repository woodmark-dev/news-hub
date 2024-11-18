import Link from "next/link";
import "./site-map.css";
import FacebookIcon from "./media-icons/facebook";
import YoutubeIcon from "./media-icons/youtube";
import InstagramIcon from "./media-icons/instagram";
import XIcon from "./media-icons/x";
export default function SiteMap() {
	return (
		<div className="SiteMap">
			<Link href="#">About Us</Link>
			<Link href="#">Contact Us</Link>
			<Link href="#">Privacy Policy</Link>
			<Link href="#">Editorial Guideline</Link>
			<div className="SocialMediaBox">
				<header>
					<h6>Social Media Links</h6>
				</header>
				<div className="MediaLinks">
					<Link href="#">
						<FacebookIcon />
					</Link>
					<Link href="#">
						<YoutubeIcon />
					</Link>
					<Link href="#">
						<InstagramIcon />
					</Link>
					<Link href="#">
						<XIcon />
					</Link>
				</div>
			</div>
			<Link href="#">Terms of Service</Link>
			<Link href="#">Archives</Link>
			<Link href="#">Subscribe</Link>
			<Link href="#">Advertise With Us</Link>
			<Link href="#">Jobs/Career</Link>
			<Link href="#">FAQs</Link>
		</div>
	);
}
