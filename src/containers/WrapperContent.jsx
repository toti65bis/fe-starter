import React, { Component } from 'react';

class WrapperContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: ''
    };
  }

  componentDidMount() {
    this.setState(prevState => ({
      ...prevState,
      currentPage: this.props.currentPage,
    }))
  }

  render() {
    const { children } = this.props;
    const { currentPage } = this.state;

    return (
      <div id={currentPage}>
        {/*Wrapper*/}
        <div className="wrapper">
          {/*MAIN-CONTENT*/}
          <div className="main-content">
            {children}
          </div>
          {/* /MAIN-CONTENT*/}
        </div>
        {/*/Wrapper*/}
      </div>
    );
  }
}

export default WrapperContent;