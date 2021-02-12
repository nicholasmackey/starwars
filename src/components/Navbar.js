import React from 'react'
import { Menu, Container } from 'semantic-ui-react'

export default function Navbar() {
  return (
    <div>
      <Menu inverted>
        <Container>
          <Menu.Item name='Star Wars'></Menu.Item>
          <Menu.Item name='People'></Menu.Item>
          <Menu.Item name='Planets'></Menu.Item>
        </Container>
      </Menu>
    </div>
  )
}
