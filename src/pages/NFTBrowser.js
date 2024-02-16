import React from 'react'
import Button from 'react-bootstrap/Button'
import '../styles/data.scss'

class Data extends React.Component {
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

    getData() {
        document.getElementById('output').innerHTML = 'Loading...'
        let options = { method: 'GET', headers: { accept: 'application/json' } }
        fetch(`https://eth-mainnet.g.alchemy.com/nft/v3/${process.env.React_App_API_KEY}/getNFTsForOwner?owner=${this.state.getData}&withMetadata=true&pageSize=100`, options)
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    data: result.ownedNfts,
                    dataLength: result.ownedNfts.length
                })
            })
            .catch(error => {
                document.getElementById('output').innerHTML = 'Error: Invalid wallet address or no NFTs found. Please try again.'
                console.error('Error:', error)
            })
    }

    render() {
        let collection = this.state.data
        // console.log(collection)
        return (
            <div id='wrapper'>
                <h1>NFT Holder Info</h1>
                <span class="eth-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                        <path d="m15.925 23.96-9.819-5.8L15.923 32l9.827-13.84-9.825 5.8zM16.075 0 6.254 16.297l9.82 5.805 9.82-5.8L16.075-.001z">
                        </path>
                    </svg>
                </span>
                <input type='text' id='input' autocomplete='off' placeholder='Paste Wallet address or ENS' />

                <Button variant='primary' onClick={() => { this.getInput() }}>Get Data</Button>
                <div id='output'>
                    {/* //FIX: If name is Deprecated, dont map it */}
                    {collection.length !== 1 ? collection.map((item, index) => (
                        <div key={index}>
                            <img src={item.image.pngUrl ? item.image.pngUrl : item.contract.openSeaMetadata.imageUrl} />
                            <p>{item.name ? item.name : item.collection.name + ' ' + item.tokenId}</p>
                        </div>
                    )) : ''
                    }
                </div>
            </div >
        )
    }
}

export default Data