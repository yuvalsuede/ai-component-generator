import React from "react";

interface RoundFilledNumberProps {
    number: number;
}

const RoundFilledNumber: React.FC<RoundFilledNumberProps> = ({ number }) => {


    return (
        <div
            style={{ backgroundColor: '#1A6292'}}
            className="rounded-full w-8 h-8 flex items-center justify-center text-white font-bold text-sm">
            {number}
        </div>
    );
};

export default RoundFilledNumber;
