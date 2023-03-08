import Image from "next/image";
import Link from "next/link";
import { DarkModeButton, useDarkMode } from "./darkModeContext";

export default function Header() {
	const { mode } = useDarkMode();
	return (
		<header className="flex justify-between items-center w-full mt-5 border-b-2 pb-7 sm:px-4 px-2">
			<Link href="/" className="flex space-x-3">
				<h1
					className={`${
						mode === "dark" ? " text-white " : ""
					}sm:text-4xl text-2xl font-bold  tracking-tight`}
				>
					AI <span style={{ color: "#1A6292" }}>component </span>generator
				</h1>
			</Link>
			<div className="flex flex-row justify-between items-center">
				<div className="hidden md:lg:block">
					<DarkModeButton />
				</div>
				<a
					href="https://www.linkedin.com/in/yuval-suede/"
					target="_blank"
					rel="noreferrer"
				>
					<Image
						alt="ChatGPT Icon"
						src="/me.png"
						className="sm:w-10 sm:h-[40px] w-10 h-[40px] rounded-full"
						width={32}
						height={28}
					/>
				</a>
			</div>
		</header>
	);
}
