import React from 'react'
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";
import '../styles/browser.scss'
import { useLocation } from 'react-router-dom';

const Wallet = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const address = searchParams.get('address');
  const currency = searchParams.get('currency');

  let options = { method: 'GET', headers: { accept: 'application/json' } }
  fetch(`https://eth-mainnet.g.alchemy.com/nft/v3/${process.env.React_App_API_KEY}/getNFTsForOwner?owner=${address}&withMetadata=true&pageSize=100`, options)
    .then(res => res.json())
    .then((result) => {
      console.log(result)
      // this.setState({
      //   data: result.ownedNfts,
      //   dataLength: result.ownedNfts.length
      // })
    })
    .catch(error => {
      // document.getElementById('output').innerHTML = 'Error: Invalid wallet address or no NFTs found. Please try again.'
      console.error('Error:', error)
    })


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
      <p>Address: {address}</p>
      <p>Currency: {currency}</p>
    </div>
  )
};

export default Wallet;