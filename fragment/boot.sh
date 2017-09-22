mkdir -p /fragment/node_modules
cp -R /fragment-deps/node_modules/* /fragment/node_modules/
cd /fragment
nodemon ./server.js
