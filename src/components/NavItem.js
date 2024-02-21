import Dropdown from 'react-bootstrap/Dropdown';
import React from 'react';
import $ from 'jquery';

class NavItem extends React.Component {
    render() {
        const { collection, key } = this.props;
        return (
            // Change action type, cause it to sort
            // On click of dropdown item, change the inner HTML of the dropdown button to the inner HTML of the dropdown item
            // $('#dropdown-basic-button').html($(this).html());
            //Add event listener to each dropdown item with the following code:
            // $('.dropdown-item').on('click', function() {
            <Dropdown.Item id={collection.replace(/[\s-]+/g, '')} href="#/action-1">{collection}</Dropdown.Item>
        )
    }
}

export default NavItem;