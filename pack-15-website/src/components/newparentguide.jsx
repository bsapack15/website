import { Link } from 'react-router-dom';

const NewParentGuide = () => {
  return (
    <>
      <div className='subcontent'>
        <p>
          <b>Get Involved</b>
        </p>
        <p>
          Scouting is built upon volunteers to guide the Scouts on their journey
          through life. You too have the opportunity help build a great
          experience for your Scout.
        </p>
        <p>
          Click{' '}
          <a
            href='https://www.scouting.org/programs/cub-scouts/how-to-volunteer/'
            target='_blank'
            rel='noreferrer'
          >
            here
          </a>{' '}
          to discover ways you can get involved.
        </p>
        <hr />
        <p>
          <b>Scout Safety</b>
        </p>
        <p>
          BSA Is committed to creating a safe environment for Scouts and
          Leaders. Click{' '}
          <a
            href='https://www.scouting.org/training/youth-protection/cub-scout/'
            target='_blank'
            rel='noreferrer'
          >
            here
          </a>{' '}
          for more information on the Guide to Safe Scouting.
          <br />
        </p>
        {/* <hr />


        <p>Important tips for new Scout Parents</p>
        <p>General New Parent Info FAQ</p>
        <p>Parent’s Scout Guide PDF</p>
        <p>BSA Medical Forms Explained/Download</p>
        */}
      </div>
    </>
  );
};

export default NewParentGuide;
