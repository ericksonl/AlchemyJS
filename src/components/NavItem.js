import Dropdown from 'react-bootstrap/Dropdown';
import React from 'react';

class NavItem extends React.Component {
    render() {
        const { collection } = this.props;
        return (
            <Dropdown.Item href="#/action-1">Hello {collection}</Dropdown.Item>
        )
    }
}

export default NavItem;