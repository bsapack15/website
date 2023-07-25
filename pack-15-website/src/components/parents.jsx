import React, { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Ranks from './ranks';
import Scoutbook from './scoutbook';
import ScoutShop from './scoutshop';
import MedicalForms from './medforms';
import ScoutCloset from './scoutcloset';
import GetInvolved from './newparentguide';

import imageSrc from '../images/camping-back.jpg';

const ParentResources = () => {
  const [content, setContent] = useState('');

  return (
    <>
      <img className='content-image' src={imageSrc} alt='scouting' />
      <div className='container-fluid content '>
        <div className='row'>
          <div className='col-25'>
            <ListGroup variant='flush'>
              <ListGroup.Item
                action='true'
                eventKey={'getinvolved'}
                onClick={() => setContent(<GetInvolved />)}
                variant='light'
              >
                Parent Guide
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
            </ListGroup>
          </div>
          <div className='col-75 text-start'>{content}</div>
        </div>
      </div>
    </>
  );
};


export default ParentResources;