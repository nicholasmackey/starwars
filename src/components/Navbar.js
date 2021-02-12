import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Container } from 'semantic-ui-react'

export default function Navbar() {
  return (
    <div>
      <Menu inverted>
        <Container>
          <Link to='/'>
            <Menu.Item name='Star Wars'></Menu.Item>
          </Link>
          <Link to='/People'>
            <Menu.Item name='People'></Menu.Item>
          </Link>
          <Link to='/Planets'>
            <Menu.Item name='Planets'></Menu.Item>
          </Link>
        </Container>
      </Menu>
    </div>
  )
}
