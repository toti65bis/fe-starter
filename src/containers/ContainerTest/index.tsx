import React, { Component } from 'react';
import WrapperContent from '@containers/WrapperContent';
import Message from "@components/Message";
let currentPage = 'ContainerTest';

class ContainerTest extends Component<{ location: any }, {}> {
    constructor(props) {
        super(props);
        //console.log('STATE: ', this.props.location.state);
    }

    render() {
        return (
            <WrapperContent currentPage={currentPage}>
                <Message>Hola mundo container test</Message>
            </WrapperContent>
        );
    }
}

export default ContainerTest;