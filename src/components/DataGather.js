import React from 'react';
import ownedNfts from './exampleData';
import NftNavBar from './NftNavBar.js';
import NFTCard from '../components/NFTCard';

class DataGather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: this.props.address,
      currency: this.props.currency,
      data: []
    };
  }

  componentDidMount() {
    this.setState({
      data: ownedNfts
    })

    console.log(this.props.address)

    // const { address } = this.props;
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
    //     console.error('Error:', error)
    //   })
  }

  render() {
    return (
      <>
        {this.state.data.length === 0 ?
          <div>
            <h2 id='output'>Loading...</h2>
          </div> :
          <div id="card-wrapper">
            <h3 id='title'>NFTs</h3>
            <NftNavBar />
            <div id='nft-container'>
              {
                this.state.data.map((nft, index) => (
                  <div key={index} className='nft-card' collection={nft.collection.name}>
                    <NFTCard
                      nft={nft}
                      index={index}
                    />
                  </div>
                ))
              }
            </div>
          </div>
        }
      </>
    );
  }
}

export default DataGather;