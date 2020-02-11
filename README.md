
# 跨域无法解决

- 安装[protoc](https://github.com/protocolbuffers/protobuf/releases)
- 安装[protoc-gen-grpc-web](https://github.com/grpc/grpc-web/releases)

```sh
$ protoc -I=. hello.proto  --js_out=import_style=commonjs:.
$ protoc -I=. hello.proto --grpc-web_out=import_style=commonjs,mode=grpcwebtext:.

// use typescript

$ protoc -I=. hello.proto  --js_out=import_style=typescript:. --grpc-web_out=import_style=typescript,mode=grpcwebtext:.
```

styles:
```
closure,commonjs,commonjs+dts,typescript
```

## grpcurl

```
$ grpcurl -plaintext -d '{"message": 1}' 0.0.0.0:7777 hello.HelloService/Hello
```