import React, { Component } from 'react';
import WrapperContent from '@containers/WrapperContent';
import Message from '@components/Message';
import { connect } from 'react-redux';

import * as userActions from '@actions/userAction';

let currentPage = 'ContainerTest';

class ContainerTest extends Component<{ user: any; traerUser: any }, {}> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.traerUser();
  }

  render() {
    const { user } = this.props;

    return (
      <WrapperContent currentPage={currentPage}>
        <Message>Hola mundo container test</Message>
        <Message>{user.name}</Message>
      </WrapperContent>
    );
  }
}

const mapStateToProps = (reducers) => {
  return {
    user: { ...reducers.userReducer.user },
  };
};

export default connect(mapStateToProps, userActions)(ContainerTest);