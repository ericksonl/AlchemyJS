import React from 'react';
import DataGather from '../components/DataGather';
import '../styles/wallet.scss';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: null,
      currency: null,
      loading: true,
    };
  }

  componentDidMount() {
    const searchParams = new URLSearchParams(window.location.search);
    const address = searchParams.get('address');
    const currency = searchParams.get('currency');
    this.setState({ address, currency, loading: false });
  }

  render() {
    const { address, currency, loading } = this.state;
    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div id='nft-wrapper'>
        <h1 id='heading'>NFT Portfolio Tracker</h1>
        <h2 id='output'>NFTs in {currency} wallet {address}</h2>
        <DataGather
          address={address}
          currency={currency}
        />
      </div>
    );
  }
}

export default Wallet;