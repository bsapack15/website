import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import navBarLogo from '../images/adventure-on.png';
import fbLogo from '../images/facebooklogo.png';

const Header = () => {
  const handleCollapse = () => {
    console.log('handleCollapse');
    var nav = document.getElementById('navBarNav');
    var btn = document.getElementById('responsive-navbar-nav');
    nav.classList.remove('show');
    nav.classList.add('collapsed');
    btn.classList.remove('show');
    btn.classList.add('collapsed');
  };

  return (
    <>
      <Navbar collapseOnSelect expand='lg' id='main-navigation'>
        <Navbar.Brand href='/'>
          <div className='navContainer'>
            <img src={navBarLogo} alt='Pack 15 Home' className='adventureOn' />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' id='navBarNav' />

        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto' id='navBarNav'></Nav>
          <Nav>
            <NavLink
              to='/'
              className={(isActive) => 'nav-link unselected'}
              data-toggle='collapse'
              data-target='#navbarCollapse'
              onClick={handleCollapse}
            >
              Home
            </NavLink>
            <NavLink
              className={(isActive) => 'nav-link unselected'}
              to='/whatwedo'
              data-toggle='collapse'
              data-target='#navbarCollapse'
              onClick={handleCollapse}
            >
              About Us
            </NavLink>
            <NavLink
              className={(isActive) => 'nav-link unselected'}
              to='/popcorn'
            >
              Popcorn
            </NavLink>
            <NavLink
              className={(isActive) => 'nav-link unselected'}
              to='/calendar'
              data-toggle='collapse'
              data-target='#navbarCollapse'
              onClick={handleCollapse}
            >
              Event Calendar
            </NavLink>
            <NavDropdown title='Resources' id='collapsible-nav-dropdown'>
              <NavDropdown.Item
                as={NavLink}
                to='/parents'
                data-toggle='collapse'
                data-target='#navbarCollapse'
                onClick={handleCollapse}
              >
                Parents
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to='/leaders'
                data-toggle='collapse'
                data-target='#navbarCollapse'
                onClick={handleCollapse}
              >
                Leaders
              </NavDropdown.Item>
            </NavDropdown>
            <NavLink
              className={(isActive) => 'nav-link unselected'}
              to='/contact'
              data-toggle='collapse'
              data-target='#navbarCollapse'
              onClick={handleCollapse}
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
      </Navbar>
    </>
  );
};

export default Header;
