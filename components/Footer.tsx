import Link from "next/link";
import { useDarkMode } from "./darkModeContext";
import Image from "next/image";

export default function Footer() {
	const { mode } = useDarkMode();
	return (
		<footer className="text-center h-16 sm:h-20 w-full sm:pt-2 pt-4 border-t mt-5 flex sm:flex-row flex-col justify-between items-center px-3 space-y-3 sm:mb-0 mb-3">
			<div className={`${mode === "dark" ? " text-white " : ""}`}>
				By{" "}
				<a
					href="https://www.linkedin.com/in/yuval-suede/"
					target="_blank"
					rel="noreferrer"
					className={`${
						mode === "dark" ? " text-white " : ""
					}font-bold hover:underline transition underline-offset-2`}
				>
					Yuval Suede.
				</a>
				(contact me to suggest improvements).
			</div>
			<div className="flex lg:md:flex-row flex-col items-center  justify-center">
				<p className="flex-row flex space-x-1">
					<span
						className={`${
							mode === "dark" ? "text-blue-200" : "text-blue-600"
						} font-bold`}
					>
						AI
					</span>
					<span
						className={`${
							mode === "dark" ? "text-white" : ""
						} font-bold text-center`}
					>
						components generator
					</span>
				</p>
				<div className="h-16 sm:h-20 w-full flex items-center justify-center">
					<Image
						className={`h-full w-auto object-contain ${
							mode === "dark" ? "hidden sm:block" : "block sm:hidden"
						}`}
						src="/whiteshark.svg"
						alt=""
						width={32}
						height={28}
					/>
					<Image
						className={`h-full w-auto object-contain ${
							mode === "dark" ? "block sm:hidden" : "hidden sm:block"
						}`}
						src="/blueshark.svg"
						alt=""
						width={32}
						height={28}
					/>
				</div>
			</div>
		</footer>
	);
}
