import './public/transfermole-widget.css';
import React, {FC, useEffect, useState} from 'react';
import logo_pic from './public/logo.png';

export const TransferMoleWidget: FC = () => {
    const [username, setUsername] = useState<string>('');
    const [payDisabled, setPayDisabled] = useState(true)

    const checkIGUsername = (username: string): boolean => {
        const re = /^[\w](?!.*?\.{2})[\w.]{1,28}[\w]$/;
        return re.test(username);
    }

    useEffect(() => {
        setPayDisabled(!checkIGUsername(username))
    }, [username]);

    const onPayClick = () => {
        window.location.href = `https://app.transfermole.com/pay/ig/${username}`
    }

    return (
        <div className='tm-widget-vertical-layout'>
            <img src={logo_pic} style={{maxHeight: "40px"}}/>
            <div className='tm-widget-horizontal-layout'>
                <b>@</b>
                <input
                    id='tmw-ig-name'
                    type="text"
                    name="IG username"
                    className='tm-widget-input'
                    value={username}
                    onChange={(e) => {setUsername(e.target.value)}}
                />
                <button
                    id='tmw-ok'
                    className='tm-widget-button'
                    disabled={payDisabled}
                    onClick={onPayClick}
                >
                    <b>Pay</b>
                </button>
            </div>
        </div>
    )
};
