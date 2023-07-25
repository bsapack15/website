import imageSrc from '../images/fishing-back.jpg';
import istrouma from '../images/istrouma.png';
import adventure from '../images/AdventureOnLogo.jpeg';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const ContactUs = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_gzypg41',
        'contact_form',
        form.current,
        '42s1rVZbrDj1BUsZ9'
      )
      .then(
        (result) => {
          var myform = document.getElementById('contact_form');
          var confirmMessage = document.getElementById('confirmMessage');
          //myform.style.visibility = "hidden";
          myform.style.display = 'none';
          //confirmMessage.style.visibility = "visible";
          confirmMessage.style.display = 'block';
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <img className='content-image' src={imageSrc} alt='scouting' />
      <div className='container content'>
        <div className='row confirm' id='confirmMessage'>
          <div className='col'>
            <img src={adventure} alt='Adventure On!' />
            <br />
            <span id='confirmation'>
              Thank you for reaching out to Pack 15! Your message has been sent
              successfully. Someone from the Pack will reach out to you soon.
            </span>
            <img
              src={istrouma}
              alt='Istrouma Council'
              className='confirmImage'
            />
            <br />
          </div>
        </div>
        <form ref={form} id='contact_form' onSubmit={sendEmail}>
          <div className='row'>
            <div className='col-25'>&nbsp;</div>
            <div className='col-75 subcontent'>
              Thank you for visiting our site. If you have any Questions or
              Comments, feel free to reach out to our leadership and we will do
              our best to respond as soon as possible.
            </div>
          </div>
          <div className='row'>
            <div class='col-25'>
              <label for='name'>Name</label>
            </div>
            <div className='col-75'>
              <input
                type='text'
                id='name'
                name='name'
                placeholder='Name'
                required
                aria-required='true'
                maxlength='100'
                aria-label='Name *'
                aria-invalid='false'
              />
            </div>
          </div>
          <div className='row'>
            <div class='col-25'>
              <label for='email'>Email</label>
            </div>
            <div className='col-75'>
              <input
                type='email'
                id='email'
                name='email'
                placeholder='Email'
                required
                aria-required='true'
                pattern='^.+@.+\.[a-zA-Z]{2,63}$'
                maxlength='250'
                aria-label='Email *'
              />
            </div>
          </div>
          <div className='row'>
            <div class='col-25'>
              <label for='phone'>Phone</label>
            </div>
            <div className='col-75'>
              <input
                type='tel'
                id='phone'
                name='phone'
                required
                placeholder='Phone No.'
                aria-required='false'
                maxlength='14'
                aria-label='Phone No.'
                title='(###) ###-#### or ###-###-####'
              />
            </div>
          </div>
          <div className='row'>
            <div class='col-25'>
              <label for='message'>Message</label>
            </div>
            <div className='col-75'>
              <textarea
                id='message'
                name='message'
                placeholder='Message'
                aria-required='false'
              ></textarea>
            </div>
          </div>
          <div className='row'>
            <div className='col-25'></div>
            <div className='col-75'>
              <button aria-disabled='false' data-testid='buttonElement'>
                SUBMIT
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactUs;
