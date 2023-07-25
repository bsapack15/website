import { Link } from 'react-router-dom';

const NewParentGuide = () => {
  return (
    <>
      <div className='subcontent'>
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
        <p>NEW PARENT GUIDES</p>
        <p>
          <a href='https://247scouting.com/web/BSA620/attachment/document_15021627450_1777.pdf'>
            {' '}
            BSA Guide for New Parents
          </a>
        </p>
        <p>Youth Protection Guide</p>
        <p>Important tips for new Scout Parents</p>
        <p>General New Parent Info FAQ</p>
        <p>Parent’s Scout Guide PDF</p>
        <p>BSA Medical Forms Explained/Download</p>
      </div>
    </>
  );
};

export default NewParentGuide;
