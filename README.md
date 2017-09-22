# mosaic-compose

This repo is a sandbox for playing around with various components in [mosaic](https://www.mosaic9.org/):

- [Skipper](https://github.com/zalando/skipper) + etcd
- [Tailor](https://github.com/zalando/tailor)

After going through this document, check [Guide.md](Guide.md) and follow the steps described there to get some basic feeling of what Mosaic is.


## Prerequisite

Make sure you have [docker and docker-compose](https://www.docker.com/community-edition#/download) installed.


## Running the stack

```
$ docker-compose up
$ open http://localhost:9090/
```

Have a look at `docker-compose.yml` to see which ports are needed for the stack to work.
