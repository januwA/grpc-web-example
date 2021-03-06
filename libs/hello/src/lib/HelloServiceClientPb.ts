/**
 * @fileoverview gRPC-Web generated client stub for hello
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import {Response} from './hello_pb';

export class HelloServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: string; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoHello = new grpcWeb.AbstractClientBase.MethodInfo(
    Response,
    (request: Response) => {
      return request.serializeBinary();
    },
    Response.deserializeBinary
  );

  hello(
    request: Response,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/hello.HelloService/Hello',
      request,
      metadata || {},
      this.methodInfoHello,
      callback);
  }

}

