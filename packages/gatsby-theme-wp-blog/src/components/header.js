/** @jsx jsx */
import {Link} from 'gatsby'
import {jsx} from '../context'

const NavItem = props => (
  <li>
    <Link
      {...props}
      sx={{
        color: 'primary',
        fontFamily: 'body',
        '&:hover': {
          color: 'secondary',
        },
      }}
    />
  </li>
)
export default props => (
  <header>
    <nav>
      <ul
        sx={{
          display: 'flex',
          margin: 0,
          '& li': {
            marginLeft: '1rem',
            listStyleType: 'none',
          },
        }}
      >
        <NavItem to="/">Home</NavItem>
        <NavItem to="/blog">WP Blog</NavItem>
        <NavItem to="/dev-blog">MDX Blog</NavItem>
        <NavItem to="/shop">Shop</NavItem>
      </ul>
      <ul
        sx={{
          display: 'flex',
          '& li': {
            marginLeft: '1rem',
            listStyleType: 'none',
          },
        }}
      >
        <NavItem to="/app">Dashboard</NavItem>
      </ul>
    </nav>
  </header>
)
