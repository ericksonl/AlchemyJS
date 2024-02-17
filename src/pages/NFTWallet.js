import React from 'react'
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";
import '../styles/browser.scss'

class Wallet extends React.Component {
  constructor(props) {
    super(props)
  }

  // getData() {
  //   document.getElementById('output').innerHTML = 'Loading...'
  //   let options = { method: 'GET', headers: { accept: 'application/json' } }
  //   fetch(`https://eth-mainnet.g.alchemy.com/nft/v3/${process.env.React_App_API_KEY}/getNFTsForOwner?owner=${this.state.getData}&withMetadata=true&pageSize=100`, options)
  //     .then(res => res.json())
  //     .then((result) => {
  //       this.setState({
  //         data: result.ownedNfts,
  //         dataLength: result.ownedNfts.length
  //       })
  //     })
  //     .catch(error => {
  //       document.getElementById('output').innerHTML = 'Error: Invalid wallet address or no NFTs found. Please try again.'
  //       console.error('Error:', error)
  //     })
  // }

  render() {
    // let collection = this.state.data
    // console.log(collection)
    return (
      <div id='wrapper'>
        <h1>HELLO</h1>
        {/* //FIX: If name is Deprecated, dont map it */}
        {/* <div id='output'>  
          {collection.length !== 1 ? collection.map((item, index) => (
            <div key={index}>
              <img src={item.image.pngUrl ? item.image.pngUrl : item.contract.openSeaMetadata.imageUrl} />
              <p>{item.name ? item.name : item.collection.name + ' ' + item.tokenId}</p>
            </div>
          )) : ''
          }
        </div> */}
      </div>
    )
  }
}

export default Wallet