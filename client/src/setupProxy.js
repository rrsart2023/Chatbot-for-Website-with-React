const proxy = require('http-proxy-middleware');


module.exports = function(app) {
    app.use(proxy('/api', { target: 'https://rad-skowak.onrender.com/' }));

};
