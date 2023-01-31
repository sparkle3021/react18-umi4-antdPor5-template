#!/bin/bash
# 拉取最新带代码
git pull
# 编译项目
yarn install
yarn run build
# 编译docker镜像
docker stop react-ant-pro
docker rm react-ant-pro && docker rmi -f react-ant-pro:latest
docker build -t react-ant-pro:latest .
docker run -d --name react-ant-pro --restart=always -p 80:80 react-ant-pro:latest
