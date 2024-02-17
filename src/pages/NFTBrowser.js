import React from 'react'
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";
import '../styles/browser.scss'

class Browser extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [0],
            dataLength: 0,
            input: ''
        }
        this.getInput = this.getInput.bind(this)
    }

    getInput() {
        console.log(document.getElementById('input').value.length)
        if (document.getElementById('input').value.length >= 42) {
            this.setState({
                getData: document.getElementById('input').value
            }, () => {
                this.getData()
            })
        } else {
            document.getElementById('output').innerHTML = 'Error: Invalid wallet address. Please try again.'
            return
        }
    }

    render() {
        let collection = this.state.data
        // console.log(collection)
        return (
            <div id='wrapper'>
                <h1 id='heading'>NFT Portfolio Tracker</h1>
                <div id='input-wrapper'>
                    <span class="eth-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                            <path d="m15.925 23.96-9.819-5.8L15.923 32l9.827-13.84-9.825 5.8zM16.075 0 6.254 16.297l9.82 5.805 9.82-5.8L16.075-.001z">
                            </path>
                        </svg>
                    </span>
                    <input type='text' id='input' autocomplete='off' placeholder='Paste Wallet address or ENS' />

                    <Link to={`/wallet/${this.state.address}`} className="btn btn-primary" id='wallet-btn'>Open Wallet</Link>

                    {/* <Button variant='primary' id='wallet-btn' onClick={() => { this.getInput() }}>Open Wallet</Button> */}
                </div>

            </div>
        )
    }
}

export default Browser