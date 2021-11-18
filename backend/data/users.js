import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('1234',10),
    isAdmin: true
  },
  {
    name: 'Second User',
    email: 'second@example.com',
    password: bcrypt.hashSync('1234',10),
  },
  {
    name: 'thrid User',
    email: 'third@example.com',
    password: bcrypt.hashSync('1234',10),
  },
]

export default users;