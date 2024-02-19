import React from 'react';
import Col from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Button';
import '../styles/wallet.scss';
import ownedNfts from '../components/exampleData';
import placeholderImage from '../icons/placeholder.png';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      currency: '',
      data: []
    };
  }

  componentDidMount() {
    const searchParams = new URLSearchParams(window.location.search);
    const address = searchParams.get('address');
    const currency = searchParams.get('currency');
    this.setState({ address, currency });
    this.setState({
      data: ownedNfts
    })
    // let options = { method: 'GET', headers: { accept: 'application/json' } }
    // fetch(`https://eth-mainnet.g.alchemy.com/nft/v3/${process.env.React_App_API_KEY}/getNFTsForOwner?owner=${address}&withMetadata=true&pageSize=100`, options)
    //   .then(res => res.json())
    //   .then((result) => {
    //     console.log(result.ownedNfts)
    //     this.setState({
    //       data: result.ownedNfts
    //     })
    //   })
    //   .catch(error => {
    //     // document.getElementById('output').innerHTML = 'Error: Invalid wallet address or no NFTs found. Please try again.'
    //     console.error('Error:', error)
    //   })

  }

  processImg = (nft, index) => {
    const elements = [];
    if (nft.image.originalUrl && nft.image.originalUrl.includes('.mp4')) {
      elements.push(<img key={index + 1} className="nft-image" src={placeholderImage} alt='NFT' />)
    } else if (nft.image.cachedUrl) {
      elements.push(<img key={index + 1} className='nft-image' src={nft.image.cachedUrl} alt='NFT' />)
    } else if (nft.contract.openSeaMetadata.imageUrl) {
      elements.push(<img key={index + 1} className='nft-image' src={nft.contract.openSeaMetadata.imageUrl} alt='NFT' />)
    } else {
      elements.push(<img key={index + 1} className="nft-image" src={placeholderImage} alt='NFT' />)
    }

    const collection_logo_src = nft.collection.bannerImageUrl? nft.collection.bannerImageUrl : placeholderImage;
    const name = nft.name ? nft.name : nft.contract.name;

    console.log(name, collection_logo_src)

    elements.push(<p key={index + 2} className='nft-name'> {name}</p>)
    elements.push(<div key={index + 3} className='nft-footer'>
      <img className='nft-collection-logo' src={collection_logo_src} alt='Collection Logo' />
      <p key={index + 4} className='nft-floor-price'> {nft.contract.openSeaMetadata.floorPrice ? (Math.round(nft.contract.openSeaMetadata.floorPrice * 10000000) / 10000000) : '0'} ETH</p>
    </div>)
    return (
      // <p>hi</p>, <- Cant do this. Have to add extra data in the above statements
      elements
    )
  }


  render() {
    const { address, currency } = this.state;
    return (
      <div id='nft-wrapper'>
        <div>
          <h1 id='heading'>NFT Portfolio Tracker</h1>
          {this.state.data.length === 0 ?

            <div>
              <h2 id='output'>Loading...</h2>
            </div> :
            <div>
              <h2 id='output'>NFTs in {currency} wallet {address}</h2>
              <div id='nft-container'>
                {this.state.data.map((nft, index) => (
                  <div key={index} className='nft-card'>
                    {this.processImg(nft, index)}
                  </div>
                ))}
              </div>
            </div>
          }
        </div>
      </div>
    );
  }
}



// render() {
//   const { address, currency, data } = this.state;

//   // Grouping NFTs by collection
//   const nftsByCollection = {};
//   data.forEach(nft => {
//     const collectionName = nft.collection.name;
//     if (!nftsByCollection[collectionName]) {
//       nftsByCollection[collectionName] = [];
//     }
//     nftsByCollection[collectionName].push(nft);
//   });

//   // Sorting collections alphabetically
//   const sortedCollections = Object.keys(nftsByCollection).sort();

//   return (
//     <div id='nft-wrapper'>
//       <div>
//         <h1 id='heading'>NFT Portfolio Tracker</h1>
//         {data.length === 0 ?
//           <div>
//             <h2 id='output'>Loading...</h2>
//           </div> :
//           <div>
//             <h2 id='output'>NFTs in {currency} wallet {address}</h2>
//             <div id='nft-container'>
//               {sortedCollections.map(collectionName => (
//                 <div key={collectionName}>
//                   <h3>{collectionName}</h3>
//                   {nftsByCollection[collectionName].map((nft, index) => (
//                     <div key={index} className='nft-card'>
//                       {this.processImg(nft)}
//                     </div>
//                   ))}
//                 </div>
//               ))}
//             </div>
//           </div>
//         }
//       </div>
//     </div>
//   );
// }

export default Wallet;