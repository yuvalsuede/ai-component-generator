import PayPalDonateButton from "./PayPalDonateButton";
import React from "react";

export default function Footer() {
    return (
        <footer className="text-center h-8 sm:h-16 w-full sm:pt-1 pt-2 border-t mt-2 flex sm:flex-row flex-col justify-between items-center px-3 space-y-3 sm:mb-0 mb-2">
            <div>
                By{" "}
                <a
                    href="https://www.linkedin.com/in/yuval-suede/"
                    target="_blank"
                    rel="noreferrer"
                    className="font-bold hover:underline transition underline-offset-2"
                >
                    Yuval Suede
                </a>
            </div>
            <div className="sm:text-right ">
                <PayPalDonateButton/>

            </div>
        </footer>
    );
}
