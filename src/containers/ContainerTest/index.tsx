import React, { Component } from 'react';
import WrapperContent from '@containers/WrapperContent';
import Message from "@components/Message";
import { connect } from 'react-redux';

import * as userActions from '../../actions/userAction';

let currentPage = 'ContainerTest';

class ContainerTest extends Component<{ user: any }, {}> {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        //console.log(this.props);
        this.props.traerUser();
    }

    render() {
        return (
            <WrapperContent currentPage={currentPage}>
                <Message>Hola mundo container test</Message>
            </WrapperContent>
        );
    }
}

const mapStateToProps = (reducers) => {
    return {
        ...reducers.userReducer
    };
};

export default connect(mapStateToProps, userActions)(ContainerTest);