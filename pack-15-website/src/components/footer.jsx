import footerImage from '../images/Prepared_standard_4K-Logo-BC.png';

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <>
      <div className='footer w-100'>
        <div className='row no-gutters '>
          <div className='col-12 col-sm-6 col-md-8'>
            <div className='footerLinks'>
              &copy; {year} Pack 15{' - '}
              <a
                href='http://www.scouting.org/'
                target='_blank'
                rel='noreferrer'
              >
                Boy Scouts of America
              </a>
              <br />
              <a
                href='https://www.iacbsa.org/'
                target='_blank'
                rel='noreferrer'
              >
                Istrouma Area Council
              </a>{' '}
              |{' '}
              <a
                href='https://www.iacbsa.org/sewell-eagle'
                target='_blank'
                rel='noreferrer'
              >
                Sewell-Eagle District
              </a>
              <br />
              Chartered by{' '}
              <a
                href='https://www.rotarysebr.com/'
                target='_blank'
                rel='noreferrer'
              >
                Rotary Club of Southeast Baton Rouge
              </a>
            </div>
          </div>
          <div className='col-6 col-md-4'>
            <div className='footerScouts'>
              <a
                href='http://www.scouting.org/'
                target='_blank'
                rel='noreferrer'
              >
                <img
                  id='footer-prepared'
                  src={footerImage}
                  alt='Prepared for Life!'
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};



export default Footer;
