import * as path from 'path';
import * as grpc from 'grpc';
import * as protoLoader from '@grpc/proto-loader';

export const PROTO_PATH = path.resolve(
  __dirname,
  '../../../libs/hello/src/lib/hello.proto'
);

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
});
const helloProto = grpc.loadPackageDefinition(packageDefinition).hello;

const server = new grpc.Server();
server.addService((helloProto as { HelloService: any }).HelloService.service, {
  hello(call, callback) {
    console.log(call.request);
    callback(null, { message: 'Hello gRPC.' });
  }
});
const PORT = '5000';
server.bind(`0.0.0.0:${PORT}`, grpc.ServerCredentials.createInsecure());
server.start();
console.log(`gRPC server success. http://localhost:${PORT}`);
