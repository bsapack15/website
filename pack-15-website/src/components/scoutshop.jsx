const ScoutShop = () => {
  return (
    <>
      <div className='subcontent'>
        Located at: 9644 Brookline Ave, Baton Rouge, LA 70809, the Scout Shop is
        a Boy Scout's paradise with all the gear you need from neckerchiefs to
        camping gear!
        <br />
        <br />
        <button className='btn btn-primary'>
          <a
            href='https://www.iacbsa.org/scoutshop'
            target='_blank'
            rel='noreferrer'
          >
            Local Hours and Contact Information
          </a>
        </button>
        <br />
        <br />
        <iframe
          title='map'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1526.9519975706137!2d-91.08144875054329!3d30.427911965414193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8626a49ef9606543%3A0x20b79d7e05b85808!2sBaton+Rouge+Scout+Shop!5e0!3m2!1sen!2sus!4v1483928175921'
          width='100%'
          height='325'
          frameborder='0'
          allowfullscreen
        ></iframe>
      </div>
    </>
  );
};

export default ScoutShop;
