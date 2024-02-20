import React from 'react';
import ownedNfts from './exampleData';
import NavItem from './NavItem';
import NFTCard from '../components/NFTCard';
import Dropdown from 'react-bootstrap/Dropdown';

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
    this.setState({
      data: ownedNfts,
      collections: ownedNfts.map((nft) => {
        return nft.collection.name
      })
    })

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
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic-button">
                  Dropdown Button
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {
                    this.state.collections.map(item => (
                      <NavItem
                        collection={item}
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