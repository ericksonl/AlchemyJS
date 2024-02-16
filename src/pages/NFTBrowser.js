import React from 'react'
import Button from 'react-bootstrap/Button'
import '../styles/data.scss'

class Data extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [0],
            dataLength: 0
        }
    }

    getData() {
        let options = { method: 'GET', headers: { accept: 'application/json' } };
        fetch(`https://eth-mainnet.g.alchemy.com/nft/v3/${process.env.React_App_API_KEY}/getNFTsForOwner?owner=${process.env.React_App_TOKEN_ADDRESS}&withMetadata=true&pageSize=100`, options)
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    data: result.ownedNfts,
                    dataLength: result.ownedNfts.length
                })
            })
            .catch(error => console.error('Error:', error));
    }
    render() {
        let collection = this.state.data
        console.log(collection)
        return (
            <div id='output'>
                <Button variant='primary' onClick={() => { this.getData() }}>Get Data</Button>
                {collection.length !== 1 ? collection.map((item, index) => (
                    <div key={index}>
                        <img src={item.image.pngUrl ? item.image.pngUrl : item.contract.openSeaMetadata.imageUrl} />
                        <p>{item.name ? item.name : item.collection.name + ' ' + item.tokenId}</p>
                    </div>
                )) : ''
                }
            </div >
        )
    }
}

export default Data