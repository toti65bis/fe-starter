const nextRoutes = require('next-routes');
const routes = module.exports = nextRoutes();

// PAGE ROUTES
const APP_ROUTES = [{
    name: 'home',
    page: 'index',
    pattern: '/'
}, {
    name: 'about',
    page: 'about',
    pattern: '/about'
}]

APP_ROUTES.forEach( route => routes.add(route) )
