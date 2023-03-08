import { createContext, useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

type DarkModeContextType = {
	mode: "light" | "dark";
	toggleMode: () => void;
};

const DarkModeContext = createContext<DarkModeContextType>({
	mode: "light",
	toggleMode: () => {},
});

export function useDarkMode() {
	return useContext(DarkModeContext);
}

export function DarkModeProvider({ children }: { children: React.ReactNode }) {
	const [mode, setMode] = useState<"light" | "dark">("light");

	const toggleMode = () => {
		setMode(mode === "light" ? "dark" : "light");
	};

	const contextValue: DarkModeContextType = {
		mode,
		toggleMode,
	};

	return (
		<DarkModeContext.Provider value={contextValue}>
			{children}
		</DarkModeContext.Provider>
	);
}

export function DarkModeButton() {
	const { mode, toggleMode } = useDarkMode();

	useEffect(() => {
		// Access the body element
		const body = document.body;
		// Make sure the body element exists before trying to update its style
		body?.style.setProperty(
			"background-color",
			mode === "dark" ? "#121212" : "#ffffff"
		);
	}, [mode]);

	return (
		<div className="lg:md:block mr-2 mt-2">
			<button className="" onClick={toggleMode}>
				{mode === "dark" ? (
					<FontAwesomeIcon icon={faSun} className="text-gray-200  h-10 w-10" />
				) : (
					<FontAwesomeIcon
						icon={faMoon}
						className="text-gray-500  h-10 w-10  "
					/>
				)}
			</button>
		</div>
	);
}
