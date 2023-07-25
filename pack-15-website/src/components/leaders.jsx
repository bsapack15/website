import React, { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Scoutbook from './scoutbook';
import MedicalForms from './medforms';
import imageSrc from '../images/camping-back.jpg';

const LeaderResources = () => {
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
                eventKey={'leadermed'}
                onClick={() => setContent(<MedicalForms />)}
                variant='light'
              >
                Medical Forms
              </ListGroup.Item>
              <ListGroup.Item
                action='true'
                eventKey={'leaderscoutbook'}
                onClick={() => setContent(<Scoutbook />)}
                variant='light'
              >
                Scoutbook
              </ListGroup.Item>
              <ListGroup.Item
                action='true'
                eventKey={'leaderscoutshop'}
                variant='light'
              >
                Scout Shop
              </ListGroup.Item>
              <ListGroup.Item
                action='true'
                eventKey={'l2'}
                onClick={() => setContent(<MedicalForms />)}
                variant='light'
              >
                Some Resource 2
              </ListGroup.Item>
              <ListGroup.Item
                action='true'
                eventKey={'l3'}
                onClick={() => setContent(<MedicalForms />)}
                variant='light'
              >
                Some Resource 3
              </ListGroup.Item>
            </ListGroup>
          </div>
          <div className='col-75 text-start'>{content}</div>
        </div>
      </div>
    </>
  );
};

export default LeaderResources;
