import imageSrc from '../images/popcorn-back.png'
import { Link } from 'react-router-dom';

const Popcorn = () => {
  return (
    <>
      <div className='popcornBack'>
        <img className='content-image' src={imageSrc} alt='scouting' />
      </div>
      <div className='container-fluid content'>
        <div className='row'>
          <div className='col-5'>
            <div className='subcontent popcornTitleLeft'>
              PACK 15 is … <span>POPPIN'!</span>
            </div>
          </div>
          <div className='col-6'>
            <div className='subcontent popcornTitleRight'>
              GOALS: <span>$20,000</span> &amp; <span>100%</span> PARTICIPATION
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col subcontent'>
            <p className='popcorn'>
              <div className='popcornHeader'>
                Why do we do this? What's in it for us?
              </div>
              <ul>
                <li>
                  This is our designated method for obtaining financial support
                  from our community.
                </li>
                <li>
                  When we sell a lot of popcorn, our Pack can offer more
                  activities for scouts, minimizing the need to ask for
                  additional funds from families.
                </li>
                <li>
                  Skill development - through this process, our scouts learn:
                  <ol>
                    <li>public speaking</li>
                    <li>goal setting AND working hard to achieve your goal</li>
                    <li>personal responsibility</li>
                  </ol>
                </li>
                <li>As parents, we get to see our scouts be successful.</li>
                <li>
                  Sales can help defray the cost of annual dues (recharter fees)
                  in the following ways:
                  <ul className='popcornNoIcon'>
                    <li>
                      Scouts will have 10% of sales deposited into their scout
                      account
                    </li>
                    <li>
                      Sell <span className='emphasize'>$1,000+</span> and that
                      percentage moves from 10% to dues being completely covered
                    </li>
                    <li>
                      $10 in scout account dollars for participation in a 2-hour
                      Show & Sell shift
                    </li>
                  </ul>
                </li>
              </ul>
            </p>
            <p className='popcorn'>
              <div className='popcornHeader'>What's in it for my scout?</div>
              Besides valuable skills, there is some extra FUN to be had!
              <ul>
                <li>
                  <span className='strong'>Patches!</span> Sell just one item
                  for the 2023 Popcorn Sale Patch.
                </li>
                <li>
                  <span className='strong'>Pins!</span> Military donations,
                  online sales, and sales of $1,000 or more earn special pins
                </li>
                <li>
                  <span className='strong'>Prizes!</span> All scouts can select
                  prizes from the prize form. Assist your scout to set a goal
                  and help them work to achieve it. Access the prize page{' '}
                  <a
                    href='https://drive.google.com/file/d/1axDCsyUlR2k6a0hrpFltwm7Dtalky_L9/view?usp=drive_link'
                    rel='noreferrer'
                    target='_blank'
                  >
                    here
                  </a>
                  .
                </li>
                <li>
                  <span className='strong'>Riding in Style!</span> The top
                  seller from each den <i className='emphasize'>and</i> the top
                  selling den (by average per scout) will ride on the Pack 15
                  float at the Jones Creek Christmas <br/>Parade.
                  <span className='strong'> A 2.4 mile value!</span>
                </li>
                <li>
                  <span className='strong'>
                    If the Pack achieves sales and participation goals, some
                    special incentives will be unlocked!
                  </span>
                </li>
              </ul>
            </p>
            <p className='popcorn'>
              <div className='popcornHeader'>
                What are the ways can my scout sell?
              </div>
              This year, we have three ways to sell. We know not all three ways
              will be possible for you and your family; we ask that 100% of you
              participate in
              <span className='emphasize'> at least one way</span>.
              <ul>
                <li>
                  <span className='strong'>Online:</span> set up your scout’s
                  online account, share the special URL and/or use your
                  “business card” and all sales are attributed to your scout.
                </li>
                <li>
                  <span className='strong'>Door-to-door:</span> familiarize your
                  scout with the{' '}
                  <a
                    href='https://drive.google.com/file/d/1e1cwdIkOaix5Oco-bXqOighuAGAaTyOO/view?usp=drive_link'
                    rel='noreferrer'
                    target='_blank'
                  >
                    products
                  </a>{' '}
                  , use the{' '}
                  <a
                    href='https://drive.google.com/file/d/1K3i51ZSx7aLA6GPtrhb4u1MSsNhMvoZn/view?usp=drive_link'
                    rel='noreferrer'
                    target='_blank'
                  >
                    paper form
                  </a>{' '}
                  , the tips and script, and have fun!
                </li>
                <li>
                  <span className='strong'>Show & Sell:</span> we will set up a
                  display of products at local businesses in October. Scouts can
                  sign up for two hours shifts.
                </li>
              </ul>
            </p>
            <p className='popcorn'>
              <div className='popcornHeader'>
                How does my scout sell online?
              </div>

              <ul>
                <li>
                  <span className='strong'>Set Up</span> your scout’s online
                  profile at{' '}
                  <a
                    href='https://ordering.campmasters.org/'
                    rel='noreferrer'
                    target='_blank'
                  >
                    ordering.campmasters.org
                  </a>
                  .
                </li>
                <li>
                  <span className='strong'>Log In</span> and update your scout’s
                  profile and picture; grab the online sale link and share!
                </li>
                <li>
                  <span className='strong'>Reference</span> the{' '}
                  <a
                    href='https://prod-19.centralus.logic.azure.com/workflows/b91d85f1dc07420b97db6017fc9297e0/triggers/manual/paths/invoke/42864/SCOUTS-ONLY-Popcorn-Guide---CampMasters?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=UzCi6vhuc-bXCB4vz4FNTcbNl8DQ6ozNO-7smYSGA7k'
                    rel='noreferrer'
                    target='_blank'
                  >
                    Istrouma Area Council Scout Popcorn Guide
                  </a>{' '}
                  for additional details & tips.
                </li>
                <li>
                  <span className='strong'>Notes:</span> online orders ship
                  immediately to customers; selections differ from Take Orders;
                  prices are higher to account for packing & shipping
                </li>
              </ul>
            </p>{' '}
            <p className='popcorn'>
              <div className='popcornHeader'>
                How does my scout sell door-to-door (a.k.a. Take Orders)?
              </div>
              <ul>
                <li>
                  <span className='strong'>Complete</span> the top of your
                  scout’s form, including goal/prize. Delivery date is after
                  11/15.
                </li>
                <li>
                  <span className='strong'>Prepare:</span> always accompany your
                  scout, wear Class A uniform, never sell at night, and don’t
                  forget a pen/device/QR code (see below).
                </li>
                <li>
                  <span className='strong'>Promote</span> spread the word at
                  work and/or where you spend a lot of time; share on social
                  media, and have your scout follow up.
                </li>
                <li>
                  <span className='strong'>Receive payment:</span> you will need
                  to submit payment for 100% of your Take Order payments at the
                  10/18 Pack Meeting, less any credit card payments in Camp
                  Masters. It is highly recommended to get payment at the time
                  of sale. Payment options:
                  <ul className='popcornNoIcon'>
                    <li>Cash</li>
                    <li>
                      Checks made out to Pack 15 - note: checks will not be
                      cashed until after 10/18
                    </li>
                    <li>
                      Checks made out to you - if you prefer to submit a single
                      payment on 10/18
                    </li>
                    <li>
                      Venmo/Zelle/other payment apps to your personal account.
                      These payments will need to be transferred and included in
                      your cash/check payment on 10/18.
                    </li>
                    <li>
                      <span className='strong'>and...</span>
                    </li>
                  </ul>
                </li>
                <li>
                  <span className='strong'>…NEW FOR 2023!</span> Customers can
                  pay via Credit Card! In your scout’s{' '}
                  <a
                    href='https://ordering.campmasters.org/'
                    rel='noreferrer'
                    target='_blank'
                  >
                    Camp Masters account
                  </a>{' '}
                  , you have two options:
                  <ul className='popcornNoIcon'>
                    <li>
                      <span className='emphasize'>Option #1:</span> download
                      your scout’s QR code from their Camp Masters dashboard
                      (the smaller <span className='green'>GREEN</span> button),
                      print a copy or save to your phone, and have your customer
                      scan the QR code at the time of sale. Verify the customer
                      has added the correct product(s) and have them complete
                      the credit card information.
                    </li>
                    <li>
                      <span className='emphasize'>Option #2:</span> Use the
                      larger <span className='green'>GREEN</span> button found
                      on the dashboard, add the correct product, and a QR code
                      <i className='emphasize'>
                        {' '}
                        specific to the purchase
                      </i>{' '}
                      will be generated. Have the customer scan from your device
                      and complete credit card information. You can also text a
                      code or receive payment manually
                    </li>
                    <li>
                      <span className='emphasize'>Note:</span> service charge =
                      2.9% of sale + $0.30
                    </li>
                  </ul>
                </li>
              </ul>
            </p>
            <p className='popcorn'>
              <div className='popcornHeader'>
                How does my scout participate in Show & Sells?
              </div>
              <ul>
                <li>
                  <span className='strong'>Check email</span> for an
                  announcement of Show & Sell locations and shifts.
                </li>
                <li>
                  <span className='strong'>Sign Up</span> for shifts. Note: a
                  scout’s parent or guardian must remain on site for the entire
                  shift.
                </li>
                <li>
                  <span className='strong'>Dress</span> in complete Class A
                </li>
                <li>
                  <span className='strong'>Bring</span> some{' '}
                  <span className='strong'>
                    <u>BIG</u>
                  </span>{' '}
                  energy and be ready to sell to strangers.
                </li>
              </ul>
            </p>
            <p className='popcorn'>
              <div className='popcornHeader'>Important dates</div>
              <ul>
                <li>
                  <span className='strong'>September 20</span> - Official
                  Popcorn kick-off meeting at monthly Pack meeting; set up your
                  online profile and start selling!{' '}
                </li>
                <li>
                  <span className='strong'>October (weekends)</span> - Show &
                  Sell Dates; watch your email and our{' '}
                  <a
                    href='https://www.facebook.com/groups/223900387710465'
                    rel='noreferrer'
                    target='_blank'
                  >
                    Facebook group
                  </a>{' '}
                  for more details soon.
                </li>
                <li>
                  <span className='strong'>October 18</span> - Pack meeting:
                  turn in your forms, money, and prize selections.
                </li>
                <li>
                  <span className='strong'>November 15</span> - Pack meeting:
                  popcorn distribution date
                </li>
              </ul>
            </p>
            <p className='popcorn'>
              If you have any questions, please{' '}
              <Link to='/contact'>reach out.</Link>{' '}
              <span className='emphasize'>Let’s get POPPIN!</span>
            </p>
            <p className='popcorn'>
              <b className='popcornHeader'>Additional Resources</b>
              <ul>
                <li>
                  <a
                    href='https://prod-19.centralus.logic.azure.com/workflows/b91d85f1dc07420b97db6017fc9297e0/triggers/manual/paths/invoke/42864/SCOUTS-ONLY-Popcorn-Guide---CampMasters?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=UzCi6vhuc-bXCB4vz4FNTcbNl8DQ6ozNO-7smYSGA7k'
                    rel='noreferrer'
                    target='_blank'
                  >
                    Getting Started Guide
                  </a>
                </li>
                <li>
                  <a
                    href='https://docs.google.com/document/d/1its4JtFcTPhub0H2wGTHtlLKOYxuuE3O2ZVG5CtHxbA/edit'
                    rel='noreferrer'
                    target='_blank'
                  >
                    Creating online selling profile tips
                  </a>
                </li>
                <li>
                  <a
                    href='https://drive.google.com/drive/folders/11u1Uz-foiOdLKq9MrJAWnutLkbI189J4?usp=drive_link'
                    rel='noreferrer'
                    target='_blank'
                  >
                    Resources for families
                  </a>
                </li>

              </ul>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Popcorn;