const { redirect } = require("next/dist/server/api-utils")

module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/products',
        destination: 'http://127.0.0.1:5000/api/products', // Matched parameters can be used in the destination
      },
      {
        ///api/products/:id
        source: '/api/products/:id',
        destination: 'http://127.0.0.1:5000/api/products/:id', // Matched parameters can be used in the destination      
      },
      {
        source: '/api/products/images',
        destination: 'http://127.0.0.1:5000/api/products/images', // Matched parameters can be used in the destination
      },
      {
        ///api/users/login
        source: '/api/users/login',
        destination: 'http://127.0.0.1:5000/api/users/login', // Matched parameters can be used in the destination      
      },
      {
        ///api/users
        source: '/api/users',
        destination: 'http://127.0.0.1:5000/api/users', // Matched parameters can be used in the destination      
      },
      {
        ///api/users/:id
        source: '/api/users/deleteUser',
        destination: 'http://127.0.0.1:5000/api/users/deleteUser', // Matched parameters can be used in the destination      
      },
      {
        ///api/users/profile
        source: '/api/users/profile',
        destination: 'http://127.0.0.1:5000/api/users/profile', // Matched parameters can be used in the destination      
      },
      {
        ///api/users/profile/images
        source: '/api/users/profile/images',
        destination: 'http://127.0.0.1:5000/api/users/profile/images', // Matched parameters can be used in the destination      
      },
      {
        ///api/orders
        source: '/api/orders',
        destination: 'http://127.0.0.1:5000/api/orders', // Matched parameters can be used in the destination      
      },
      {
        ///api/orders/myorders
        source: '/api/orders/myorders',
        destination: 'http://127.0.0.1:5000/api/orders/myorders', // Matched parameters can be used in the destination      
      },
      {
        ///s3Url
        source: '/s3Url',
        destination: 'http://127.0.0.1:5000/s3Url', // Matched parameters can be used in the destination      
      }
    ]
  },
}
