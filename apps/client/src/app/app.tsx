import * as grpcWeb from 'grpc-web';
import React, { Component } from 'react';

import { HelloServiceClient, Response } from '@grpc-web-example/hello';
const helloService = new HelloServiceClient(
  'http://localhost:5000',
  null,
  null
);

export class App extends Component {
  get = async () => {
    const req = new Response();
    req.setMessage('Hello World!');
    helloService.hello(req, {}, (err, response) => {
      console.log(response);
    });
  };
  render() {
    return (
      <div className="app">
        <button onClick={this.get}>get</button>
      </div>
    );
  }
}
