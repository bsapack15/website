import imageSrc from '../images/camping-back.jpg';
import imageSrc2 from '../images/scout_me_in_horizon.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <img className='content-image' src={imageSrc} alt='scouting' />
      <div>
        <div className='container-fluid content'>
          <div className='row'>
            <div className='col'>
              <img className='scout-me-in' src={imageSrc2} alt='scout me in' />
            </div>
          </div>
          <div className='row'>
            <div className='col subcontent'>
              <br />
              Cub Scout Pack 15 was chartered in 1984 and has been serving
              scouts in grades K-5 in the Baton Rouge, LA area ever since. We
              are part of the Sewell-Eagle District of the Istrouma Area Council
              and are sponsored by the Rotary Club of Southeast Baton Rouge.
              <br />
              <br />
              Pack 15's goal is to foster the BSA vision of building our youth
              into conscientious, responsible, and productive boys and girls by
              instilling in them lifetime values and developing ethical
              character traits as expressed in the Scout Oath and Law. We want
              to create an environment that fosters a sense of community while
              keeping the fun in scouting. As Robert Baden-Powell once said, we
              are building “Happy, Healthy, and Helpful Citizens.”
              <br />
              <br />
              We require all our leaders to be properly trained so our scouts
              can be mentored in a safe environment. In addition, we encourage
              our leaders to attend regular Scout training events and monthly
              round tables. We are proud to have past and present leaders who
              are Eagle Scouts and Wood Badge trained.
              <br />
              <br />
              Many of our Scouts go on to join{' '}
              <a
                href='https://www.facebook.com/troop888/'
                rel='noreferrer'
                target={'_blank'}
              >
                Boy Scout Troop 888 (Baton Rouge) {' '}
              </a>
              or{' '}
              <a
                href='https://www.boyscoutmulchbr.org/about-troop-203'
                rel='noreferrer'
                target={'_blank'}
              >
                Troop 203 (Baton Rouge)
              </a>
              . Also, our female Cubs have multiple options available to
              continue their Scouting adventure. Our girls are able to join
              Troop 1848 (Galvez), Troop 1136 (Brownsfield),{' '}
              <a
                href='https://www.facebook.com/BSATroop103BatonRouge/'
                rel='noreferrer'
                target={'_blank'}
              >
                {' '}
                Troop 1103 (Baton Rouge)
              </a>
              ,{' '}
              <a
                href='https://www.facebook.com/bsacentral13'
                rel='noreferrer'
                target={'_blank'}
              >
                {' '}
                Troop 1013 (Central)
              </a>
              <br />
              <br />
              It is our sincerest hope that if you or if someone you know is
              considering becoming involved in Scouting, you will{' '}
              <Link to='/contact'>Contact Us</Link> for more information.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
