import React from 'react';
import ownedNfts from './exampleData';
import NavItem from './NavItem';
import NFTCard from '../components/NFTCard';
import Dropdown from 'react-bootstrap/Dropdown';
import '../styles/nav.scss';

class DataGather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: this.props.address,
      currency: this.props.currency,
      data: [],
      collections: []
    };
  }


  componentDidMount() {

    let tempCollections = []
    ownedNfts.map((nft) => {
      tempCollections.push(nft.collection.name)
    })

    let solid = tempCollections.filter((value, index) => tempCollections.indexOf(value) === index)

    this.setState({
      data: ownedNfts,
      collections: solid,
    })



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

    console.log(this.state.collections)
  }

  render() {
    return (
      <>
        {
          this.state.data.length === 0 ?
            <div>
              <h2 id='output'>Loading...</h2>
            </div> :
            <div id="card-wrapper">
              <h3 id='title'>NFTs</h3>
              <Dropdown id='collection-dropdown'>
                <Dropdown.Toggle id="dropdown-basic-button">
                  All Collections
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {
                    this.state.collections.map((item, index) => (
                      <NavItem
                        collection={item}
                        key={index}
                      />
                    ))
                  }
                </Dropdown.Menu>
              </Dropdown>
              <div id='nft-container'>
                { //Create NFT Cards dynamically
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

            </div >
        }
      </>
    );
  }
}

export default DataGather;