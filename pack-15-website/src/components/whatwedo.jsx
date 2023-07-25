import React, { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import imageSrc from '../images/rockets-back.jpeg';
import PackEvents from './packevents';
import Affiliates from './affiliates';
import About from './about';

const WhatWeDo = () => {
  const [content, setContent] = useState(<About />);

  return (
    <>
      <img className='content-image' src={imageSrc} alt='scouting' />
      <div className='container-fluid content '>
        <div className='row'>
          <div className='col-25'>
            <ListGroup variant='flush'>
              <ListGroup.Item
                action='true'
                eventKey={'pack'}
                onClick={() => setContent(<PackEvents />)}
              >
                Pack Events
              </ListGroup.Item>
              <ListGroup.Item
                action='true'
                eventKey={'affiliates'}
                onClick={() => setContent(<Affiliates />)}
              >
                Affiliates
              </ListGroup.Item>
            </ListGroup>
          </div>
          <div className='col-75 text-start'>{content}</div>
        </div>
      </div>
    </>
  );
};

export default WhatWeDo;
