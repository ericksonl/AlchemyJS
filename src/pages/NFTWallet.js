import React from 'react';
import Col from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Button';
import '../styles/wallet.scss';

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
    let options = { method: 'GET', headers: { accept: 'application/json' } }
    fetch(`https://eth-mainnet.g.alchemy.com/nft/v3/${process.env.React_App_API_KEY}/getNFTsForOwner?owner=${address}&withMetadata=true&pageSize=100`, options)
      .then(res => res.json())
      .then((result) => {
        console.log(result.ownedNfts)
        this.setState({
          data: result.ownedNfts
        })
      })
      .catch(error => {
        // document.getElementById('output').innerHTML = 'Error: Invalid wallet address or no NFTs found. Please try again.'
        console.error('Error:', error)
      })
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
                <Container>
                  <Row>
                    {this.state.data.map((nft, index) => (
                      <Col key={index} className='nft-card'>
                        <img id='nft-image' src={nft.image.cachedUrl} alt='NFT' />
                        <h3>{nft.name}</h3>
                      </Col>
                    ))}
                  </Row>
                </Container>

              </div>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default Wallet;