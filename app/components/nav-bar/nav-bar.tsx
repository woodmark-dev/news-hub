"use client";
import Link from "next/link";

import "./nav-bar.css";
import { usePathname } from "next/navigation";
import SearchIcon from "./icons/search";

export default function NavBar() {
	const pathname = usePathname();

	const state = (url: string) => (pathname == url ? "active" : "notActive");
	console.log(state("/"));
	return (
		<div className="NavBar">
			<ul>
				<li>
					<Link href="/" data-active={state("/")}>
						Home
					</Link>
				</li>
				<li>
					<Link href="/politics" data-active={state("/politics")}>
						Politics
					</Link>
				</li>
				<li>
					<Link href="/sport" data-active={state("/sport")}>
						Sport
					</Link>
				</li>
				<li>
					<Link href="/crime" data-active={state("/crime")}>
						Crime
					</Link>
				</li>
				<li>
					<Link href="/culture" data-active={state("/culture")}>
						Culture
					</Link>
				</li>
				<li>
					<Link href="/business" data-active={state("/business")}>
						Business
					</Link>
				</li>
				<li>
					<Link href="/tech" data-active={state("/tech")}>
						Tech
					</Link>
				</li>
				<li>
					<Link href="/economy" data-active={state("/economy")}>
						Economy
					</Link>
				</li>
				<li>
					<Link href="/travel" data-active={state("/travel")}>
						Travel
					</Link>
				</li>
				<li>
					<Link href="/entertainment" data-active={state("/entertainment")}>
						Entertainment
					</Link>
				</li>
			</ul>
			<div className="SearchBox">
				<input type="text" placeholder="Search" />
				<SearchIcon />
			</div>
		</div>
	);
}
