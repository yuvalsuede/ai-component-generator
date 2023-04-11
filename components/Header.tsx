import Link from "next/link";
import { useTranslation } from "next-i18next";
import LogoAICG from "./LogoAICG";

export default function Header() {
	const { t } = useTranslation('common');

	return (
		<header className="flex justify-center items-center w-full mt-2 border-b pb-3 sm:px-4 px-2">
			<Link href="/" className="flex space-x-3">
				<LogoAICG isDark={true} />
			</Link>
			<div className="flex flex-row">
			</div>
		</header>
	);
}
