import type { Metadata } from "next";
// import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import "./globals.css";
import Logo from "./components/logo/logo";
import Footer from "./components/footer/footer";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const poppins = Poppins({
	variable: "--primary-font",
	subsets: ["latin"],
	weight: ["100", "500", "600", "200", "800"],
});

export const metadata: Metadata = {
	title: "News Hub",
	description: "Reliable news accumulator",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${poppins.variable} MainLayout`}>
				<Logo />
				{children}
				<Footer />
			</body>
		</html>
	);
}
