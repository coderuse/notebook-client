/// <reference path="../../../typings/index.d.ts" />

import * as React from 'react';
import * as ReactDOM from 'react-dom';

export interface IHomeState {
  message?: string
}

export class Home extends React.Component<{}, IHomeState> {
  constructor() {
    super();

    this.state.message = `Working!!!`
  }
  
  render() {
    return (
      <div className="row">
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}