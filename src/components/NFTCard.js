import React from 'react';
import placeholderImage from '../icons/placeholder.png';

class NFTCard extends React.Component {
    render() {
        const { nft, index } = this.props;
        var elements = null;

        if (nft.image.originalUrl && nft.image.originalUrl.includes('.mp4')) {
            elements = <img key={index} className="nft-image" src={placeholderImage} alt='NFT' />;
        } else if (nft.image.cachedUrl) {
            elements = <img key={index} className='nft-image' src={nft.image.cachedUrl} alt='NFT' />;
        } else if (nft.contract.openSeaMetadata.imageUrl) {
            elements = <img key={index} className='nft-image' src={nft.contract.openSeaMetadata.imageUrl} alt='NFT' />;
        } else {
            elements = <img key={index} className="nft-image" src={placeholderImage} alt='NFT' />;
        }

        const collection_logo_src = nft.contract.openSeaMetadata.imageUrl ? nft.contract.openSeaMetadata.imageUrl : placeholderImage;
        const name = nft.name ? nft.name : nft.contract.name;
        let total = nft.contract.openSeaMetadata.floorPrice ? (Math.round(nft.contract.openSeaMetadata.floorPrice * 10000000) / 10000000) : '0';

        return (
            
            <>
                {elements}
                <p className='nft-name'> {name}</p>
                <div className='nft-footer'>
                    <a href={'https://opensea.io/collection/' + nft.collection.slug} target='_blank' rel='noreferrer noopener' className='nft-collection-name'>
                        <img className='nft-collection-logo' src={collection_logo_src} alt='Collection Logo' />
                    </a>
                    <p className='nft-floor-price'> {total} ETH</p>
                </div>
            </>
        );
    }
}

export default NFTCard;