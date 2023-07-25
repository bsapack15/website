import { Link } from 'react-router-dom';

const ScoutCloset = () => {
  return (
    <>
      <div className='subcontent'>
        <p>
          Pack 15 has a limited amount of used scout items available for
          families in need. These items are donated by families that have
          crossed over to Boy Scouts.
        </p>
        <p>
          To request items from or to donate items to the Scout Closet, please{' '}
          <Link to='/contact'>Contact</Link> one of the Cubmasters for more
          information.
        </p>
      </div>
    </>
  );
};

export default ScoutCloset;
