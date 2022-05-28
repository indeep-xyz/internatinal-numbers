import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from '../../../organisms/BasicNavMenu/views/BasicNavMenu';

export class BasicLayout extends Component {
  static displayName = BasicLayout.name;

  render () {
    return (
      <div>
        <NavMenu />
        <Container>
          {this.props.children}
        </Container>
      </div>
    );
  }
}
