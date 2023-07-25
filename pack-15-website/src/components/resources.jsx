import React, { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import imageSrc from '../images/camping-back.jpg';
import Ranks from './ranks';
import Scoutbook from './scoutbook';
import ScoutShop from './scoutshop';
import MedicalForms from './medforms';
import ScoutCloset from './scoutcloset';
import GetInvolved from './newparentguide';

const Resources = () => {
  const [content, setContent] = useState('');
  const [toggle, setToggle] = useState('');

  return (
    <>
      <img className='content-image' src={imageSrc} alt='scouting' />
      <div className='container-fluid content '>
        <div className='row'>
          <div className='col-25'>
            <ListGroup variant='flush'>
              <ListGroup.Item
                action='false'
                eventKey='parent'
                className='resource-title'
                onClick={() => setToggle('parent')}
              >
                Parent Resources
              </ListGroup.Item>
              {
                toggle === 'parent' && (
                  <>
                    <ListGroup.Item
                      action='true'
                      eventKey={'getinvolved'}
                      onClick={() => setContent(<GetInvolved />)}
                      variant='light'
                    >
                      Get Involved
                    </ListGroup.Item>
                    <ListGroup.Item
                      action='true'
                      eventKey={'scoutcloset'}
                      onClick={() => setContent(<ScoutCloset />)}
                      variant='light'
                    >
                      Scout Closet
                    </ListGroup.Item>
                    <ListGroup.Item
                      action='true'
                      eventKey={'scoutbook'}
                      onClick={() => setContent(<Scoutbook />)}
                      variant='light'
                    >
                      Scoutbook
                    </ListGroup.Item>
                    <ListGroup.Item
                      action='true'
                      eventKey={'scoutshop'}
                      onClick={() => setContent(<ScoutShop />)}
                      variant='light'
                    >
                      Scout Shop
                    </ListGroup.Item>
                    <ListGroup.Item
                      action='true'
                      eventKey={'medforms'}
                      onClick={() => setContent(<MedicalForms />)}
                      variant='light'
                    >
                      Medical Forms
                    </ListGroup.Item>
                    <ListGroup.Item
                      action='true'
                      eventKey={'ranks'}
                      onClick={() => setContent(<Ranks />)}
                      variant='light'
                    >
                      Scout Ranks
                    </ListGroup.Item>
                  </>
                )
                /*  */
              }
            </ListGroup>
            <br />
            <ListGroup variant='flush'>
              <ListGroup.Item
                action='false'
                eventKey='leader'
                className='resource-title'
                onClick={() => setToggle('leader')}
              >
                Leader Resourcessss
              </ListGroup.Item>
              {toggle === 'leader' && (
                <>
                  <ListGroup.Item
                    action='true'
                    eventKey={'leadermed'}
                    onClick={() => setContent(<MedicalForms />)}
                    variant='light'
                    className={toggle === 'parent' ? 'hidden' : ''}
                  >
                    Medical Forms
                  </ListGroup.Item>
                  <ListGroup.Item
                    action='true'
                    eventKey={'leaderscoutbook'}
                    onClick={() => setContent(<Scoutbook />)}
                    variant='light'
                    className={toggle === 'parent' ? 'hidden' : ''}
                  >
                    Scoutbook
                  </ListGroup.Item>
                  <ListGroup.Item
                    action='true'
                    eventKey={'leaderscoutshop'}
                    onClick={() => setContent(<ScoutShop />)}
                    variant='light'
                  >
                    Scout Shop
                  </ListGroup.Item>
                  <ListGroup.Item
                    action='true'
                    eventKey={'l2'}
                    onClick={() => setContent(<MedicalForms />)}
                    variant='light'
                    className={toggle === 'parent' ? 'hidden' : ''}
                  >
                    Some Resource 2
                  </ListGroup.Item>
                  <ListGroup.Item
                    action='true'
                    eventKey={'l3'}
                    onClick={() => setContent(<MedicalForms />)}
                    variant='light'
                    className={toggle === 'parent' ? 'hidden' : ''}
                  >
                    Some Resource 3
                  </ListGroup.Item>
                </>
              )}
            </ListGroup>
          </div>
          <div className='col-75 text-start'>{content}</div>
        </div>
      </div>

      {/*

        <div className='row'>
          <div className='col'>
            <div className='resource-title'>Medical Forms</div>

          </div>
        </div>
        <div className='row'><div className='col section-spacer'>&nbsp;</div></div>
        <div className='row'>
          <div className='col resource-section'>Leader Resources</div>
        </div>
        <div className='row'>
          <div className='col resource-title'>Youth Protection</div>
        </div>
        <div className='row'>
          <div className='col resource'>
            The Boy Scouts of America places the greatest importance on creating
            the most secure environment possible for our youth members. To
            maintain such an environment, the BSA developed numerous procedural
            and leadership selection policies and provides parents and leaders
            with resources for the Cub Scout, Scouts BSA, and Venturing
            programs.
            <br />
            <br />
            <div>
              <button className='btn btn-primary'>
                Youth Protection Information
              </button>
            </div>
          </div>
        </div>
      </div> */}

      {/* <Nav
        id='main-navigation'
        className='justify-content-center'
        activeKey='/home'
      >
        <Nav.Item>
          <Link to='/'>Home</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to='/about'>What We Do</Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>Pack Calendar</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>Cub Notes</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>Cub Notes</Nav.Link>
        </Nav.Item>
        <NavDropdown title='Resources' id='basic-nav-dropdown'>
          <NavDropdown.Item href='#action/3.1'>
            Parent Resources
          </NavDropdown.Item>
          <NavDropdown.Item href='#action/3.2'>
            Leader Resources
          </NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title='Scouting.org' id='basic-nav-dropdown'>
          <NavDropdown.Item href='#action/3.1'>
            Youth Protection
          </NavDropdown.Item>
          <NavDropdown.Item href='#action/3.1'>MyScouting.org</NavDropdown.Item>
          <NavDropdown.Item href='#action/3.1'>Scouting Forms</NavDropdown.Item>
          <NavDropdown.Item href='#action/3.1'>BeAScout.org</NavDropdown.Item>
        </NavDropdown>
        <Nav.Item>
          <Nav.Link href='#calendar'>Contact</Nav.Link>
        </Nav.Item>
      </Nav> */}
    </>
  );
};

export default Resources;
