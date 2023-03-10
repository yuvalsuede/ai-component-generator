import { useState, useEffect } from 'react';

type Props = {
    children: React.ReactNode;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const DynamicSelect = ({ children, value, onChange }: Props) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return isClient ? (
        <select value={value} onChange={onChange}>
            {children}
        </select>
    ) : null;
};

export default DynamicSelect;
