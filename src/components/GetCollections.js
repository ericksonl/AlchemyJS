import $ from 'jquery';

//This is not updated before the divs are created
// fix by calling this function in the parent component?
// or by calling this function in the parent component after the divs are created
// but that wont work because the divs are created in a map function
// so the divs are created after the parent component is created
// Im not sure how to fix this
// I could use a useEffect hook in the parent component?

const gatherCollections = () => {
    // Define an empty array to store the collection values
    var collectionValues = [];

    $('#nft-container').children().each(function () {
        var collectionValue = $(this).attr('collection');
        if (collectionValue !== undefined && collectionValue !== '' && collectionValues.indexOf(collectionValue) === -1) {
            collectionValues.push(collectionValue);
        }
    });

    // Now, the collectionValues array contains all the 'collection' attribute values
    console.log(collectionValues);
}

export default gatherCollections;