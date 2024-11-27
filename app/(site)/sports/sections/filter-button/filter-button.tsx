"use client";
import Button from "@/app/components/button/button";
import "./filter-button.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function FilterButton() {
	const pathname = usePathname();
	const state = (url: string) => (pathname == url ? "primary" : "nuetral");

	return (
		<section className="filterButton">
			<Link href="/all-categories">
				<Button type={state("/all-categories")} text="all categories" />
			</Link>
			<Link href="/search">
				<Button type={state("/search")} text="search news" />
			</Link>
			<Link href="/filter">
				<Button type={state("/filter")} text="filter news" />
			</Link>
		</section>
	);
}
