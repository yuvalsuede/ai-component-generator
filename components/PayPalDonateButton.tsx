import React, {useEffect, useState} from 'react';

const PayPalDonateButton: React.FC = () => {
    const [showDonate, setShowDonate] = useState(false);

    useEffect(() => {
        setShowDonate(process.env.SHOW_DONATE === 'true');
    }, []);

    if (!showDonate) {
        return null;
    }

    return (
        <>
            <div className="flex align-center justify-center">
                <span className="mr-2">You can always buy me a coffee ☕️ {' '}</span>
                <span dangerouslySetInnerHTML={{
                    __html: `

       <form action="https://www.paypal.com/donate" method="post" target="_top">
            <input type="hidden" name="business" value="9GEESLUNXZNV4" />
            <input type="hidden" name="no_recurring" value="1" />
            <input type="hidden" name="item_name" value="This project is free to use, however the API is costly. Help me keeping it up and running" />
            <input type="hidden" name="currency_code" value="USD" />
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
            <img alt="" border="0" src="https://www.paypal.com/en_IL/i/scr/pixel.gif" width="1" height="1" />
       </form>
       

`
                }} />
            </div>
        </>
    );

};

export default PayPalDonateButton;
