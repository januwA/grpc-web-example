const path = require('path');
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

const PROTO_PATH = path.resolve(
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
const helloClient = new helloProto.HelloService(
  'localhost:5000',
  grpc.credentials.createInsecure()
);

helloClient.hello({ message: 'ajanuw' }, (er, r) => {
  console.log(r);
});
