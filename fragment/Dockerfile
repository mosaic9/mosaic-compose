FROM registry.opensource.zalan.do/pathfinder/alpine-node:8.3.0
MAINTAINER Team Pathfinder <team-pathfinder@zalando.de>


RUN mkdir -p /fragment
RUN mkdir -p /fragment-deps

ADD ./package.json /fragment-deps/
ADD ./boot.sh /fragment-deps
RUN cd /fragment-deps && npm i
RUN npm i -g nodemon

CMD /fragment-deps/boot.sh
