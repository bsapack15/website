import imageSrc from '../images/canoeing-back.jpg';

const Calendar = () => {
  return (
    <>
      <img className='content-image' src={imageSrc} alt='scouting' />
      <div className='container-fluid content'>
            -TODO - Insert some witty, yet profound text about how amazing our
            pack calendar is here.
            <hr />
            <div className='responsiveCal'>
              <div className='deskContent'>
                <iframe
                  title='Pack 15 Calendar'
                  src='https://calendar.google.com/calendar/embed?src=d5kl6b14ngun2nb5mvgrbhtkddle9r94%40import.calendar.google.com&ctz=America%2FChicago'
                  width='100%'
                  height='100%'
                  frameborder='0'
                  style={{
                    borderWidth: 0,
                    resize: 'both',
                    overflowX: 'scroll',
                  }}
                ></iframe>
              </div>
              <div class='phoneContent'>
                <iframe
                  title='Pack 15 Calendar'
                  src='https://calendar.google.com/calendar/embed?src=d5kl6b14ngun2nb5mvgrbhtkddle9r94%40import.calendar.google.com&ctz=America%2FChicago&mode=AGENDA'
                  // src='https://calendar.google.com/calendar/embed?mode=AGENDA&amp;height=400&amp;wkst=1&amp;src=m7djtqdm8q7b43kol0nu295sko%40group.calendar.google.com&ctz=America%2FNew_York'
                  height='400'
                  frameborder='0'
                ></iframe>
              </div>
        </div>
      </div>
    </>
  );
};

export default Calendar;
