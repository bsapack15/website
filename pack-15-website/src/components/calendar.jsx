import imageSrc from '../images/canoeing-back.jpg';

const Calendar = () => {
  return (
    <>
      <img className='content-image' src={imageSrc} alt='scouting' />
      <div className='container-fluid content'>
        <p>&nbsp;</p>
        <hr />
        <div className='responsiveCal'>
          <div className='deskContent'>
            <iframe
              title='Pack 15 Calendar'
              src="https://calendar.google.com/calendar/embed?src=34p2l88t1s8ejq17qrcqmhprqse6u6ul%40import.calendar.google.com&ctz=America%2FChicago"
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

        <p>
          {/*
          TODO
          To Subscribe to the Pack Google Calendar, use the following link:
https://calendar.google.com/calendar/u/0?cid=cGFjazEzNi5zdGdlb3JnZUBnbWFpbC5jb20

To add the Pack Calendar to your Google Calendar:

On your computer, open Google Calendar.
On the left, next to “Other calendars,” click Add Add other calendars and then From URL.
Enter the calendar’s address. (above)
Click Add calendar. The calendar appears on the left, under “Other calendars.”
Tip: It might take up to 12 hours for changes to show in your Google Calendar.

CLICK HERE to download PACK EVENTS 2023-2024 Flyer */}
        </p>
      </div>
    </>
  );
};

export default Calendar;
