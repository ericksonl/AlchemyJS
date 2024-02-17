import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import '../styles/browser.scss';

const Browser = () => {
    const navigate = useNavigate();
    const [currency, setCurrency] = useState('eth');

    const getInput = () => {
        let address = document.getElementById('input').value;
        console.log(currency, address);
        if (currency === 'eth' && address.startsWith('0x') && address.length === 42) {
            navigate(`/wallet/${address}`);
        } else if (currency === 'sol' && address.length >= 44) {
            navigate(`/wallet/${address}`);
        } else {
            document.getElementById('input').style.border = '2px solid red';
            if (!document.getElementById('error')) {
                const errorElement = document.createElement('p');
                errorElement.id = 'error';
                errorElement.textContent = 'Not a valid address';
                document.getElementById('wrapper').appendChild(errorElement);
            }
        }
    };

    const selectCurrency = (event) => {
        setCurrency(event.target.value);
    };

    return (
        <div id='wrapper'>
            <h1 id='heading'>NFT Portfolio Tracker</h1>
            <div id='input-wrapper'>
                <label className={`currency-button ${currency === 'eth' ? 'active' : ''}`}>
                    <input type='radio' name='currency' value='eth' onClick={selectCurrency} checked={currency === 'eth'} />
                    ETH
                </label>
                <label className={`currency-button ${currency === 'sol' ? 'active' : ''}`}>
                    <input type='radio' name='currency' value='sol' onClick={selectCurrency} checked={currency === 'sol'} />
                    SOL
                </label>
                <span id='currency-icon'>
                    <img id="currency" src={currency === 'eth' ? 'https://cryptologos.cc/logos/ethereum-eth-logo.png' : 'https://cryptologos.cc/logos/solana-sol-logo.png'} alt="Currency Icon" />
                </span>
                <input type='text' id='input' autoComplete='off' placeholder='Paste Wallet address or ENS' />
                <Button id='wallet-btn' onClick={getInput}>Open Wallet</Button>
            </div>
        </div>
    );
};

export default Browser;