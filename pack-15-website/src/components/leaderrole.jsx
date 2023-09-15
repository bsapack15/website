function LeaderRole({ roleName, roleData }) {
  return (
    <>
      <div className='row'>
        <div className='subcontenttitle'>{roleName}</div>
        <Leader roleData={roleData} />
      </div>
    </>
  );
}

function Leader({ roleData }) {
  return (
    <>
      <div className='col-6'>
        <p>
          <div className='subcontent'>
            <ul>
              {roleData.array.map((item) => (
                <li>
                  {' '}
                  {item.FirstName} {item.LastName}
                </li>
              ))}
            </ul>
          </div>
        </p>
      </div>
    </>
  );
}

export default LeaderRole;
