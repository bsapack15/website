import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import navBarLogo from '../images/adventure-on.png';
import fbLogo from '../images/facebooklogo.png';

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand='lg' id='main-navigation'>
        <Container>
          <Navbar.Brand href='/'>
            <div className='navContainer'>
              <img
                src={navBarLogo}
                alt='Pack 15 Home'
                className='adventureOn'
              />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>
              {/* <NavLink to='/' className={(isActive) => 'nav-link unselected'}>
                Pack 15
              </NavLink> */}
              {/* <Nav.Link href='#pricing'>Pricing</Nav.Link> */}
              {/* <NavDropdown title='Dropdown' id='collasible-nav-dropdown'>
                <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.2'>
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3'>
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#action/3.4'>
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            <Nav>
              <NavLink to='/' className={(isActive) => 'nav-link unselected'}>
                Home
              </NavLink>
              <NavLink
                className={(isActive) => 'nav-link unselected'}
                to='/whatwedo'
              >
                About Us
              </NavLink>
              <NavLink
                className={(isActive) => 'nav-link unselected'}
                to='/calendar'
              >
                Event Calendar
              </NavLink>
              {/* <NavLink
                className={(isActive) => 'nav-link unselected'}
                to='/resources'
              >
                Resources
              </NavLink> */}
              <NavDropdown title='Resources' id='collapsible-nav-dropdown'>
                <NavDropdown.Item as={NavLink} to='/parents'>
                  Parents
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to='/leaders'>
                  Leaders
                </NavDropdown.Item>
              </NavDropdown>
              <NavLink
                className={(isActive) => 'nav-link unselected'}
                to='/leadership'
              >
                Leadership
              </NavLink>
              <NavLink
                className={(isActive) => 'nav-link unselected'}
                to='/contact'
              >
                Contact Us
              </NavLink>
              <a
                className={(isActive) => 'nav-link unselected'}
                href='https://www.facebook.com/groups/223900387710465'
                rel='noreferrer'
                target={'_blank'}
              >
                <img src={fbLogo} alt='Facebook' />
              </a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
