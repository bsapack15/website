import imageSrc from "../images/popcorn-back.png";
import { Link } from "react-router-dom";

const Popcorn = () => {
  const today = new Date();
  var year = today.getFullYear();

  if (today.getMonth() < 7) {
    year -= 1;
  }

  return (
    <>
      <div className="popcornBack">
        <img className="content-image" src={imageSrc} alt="scouting" />
      </div>
      <div className="container-fluid content">
        <div className="row">
          <div className="col-5">
            <div className="subcontent popcornTitleLeft">
              PACK 15 is … <span>POPPIN'!</span>
            </div>
          </div>
          <div className="col-6">
            <div className="subcontent popcornTitleRight">
              {year} GOAL: <span>$20,000 </span> IN SALES
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col subcontent">
            <p className="popcorn">
              <div className="popcornHeader">
                Why do we do this? What's in it for us?
              </div>
              <ul>
                <li>
                  This is Pack 15's designated method for obtaining financial
                  support from our community. We receive 33% of total popcorn
                  sales.
                </li>
                <li>
                  When we sell a lot of popcorn, our Pack can offer more
                  activities for scouts, minimizing the need to ask for
                  additional funds from families.
                </li>
                <li>
                  Skill development - through this process, our scouts learn:
                  <ol className="popcornInlineSubDetail">
                    <li>Public speaking;</li>
                    <li>
                      Goal setting AND working hard to achieve your goal; and
                    </li>
                    <li>Personal responsibility.</li>
                  </ol>
                </li>
                <li>As parents, we get to see our scouts be successful.</li>
                <li>
                  Sales can help defray the cost of annual dues (recharter fees)
                  in the following ways:
                  <ul className="popcornSubDetail">
                    <li>
                      Scouts will have 10% of sales deposited into their scout
                      account to apply to future costs run through the Pack's
                      Square account.
                    </li>
                    <li>
                      Sell <span className="emphasize">$1,500+</span> and the
                      Pack will cover your scout's next recharter fees.
                    </li>
                    <li>
                      Participate in a Show & Sell shift and your scout will
                      receive an even share of{" "}
                      <span className="emphasize">
                        10% of the total day's sales
                      </span>{" "}
                      into their scout account. Your scout will also receive an
                      even share of the day's total sales towards prizes!
                    </li>
                  </ul>
                </li>
              </ul>
            </p>
            <p className="popcorn">
              <div className="popcornHeader">What's in it for my scout?</div>
              Besides valuable skills, there is some extra FUN to be had!
              <ul>
                <li>
                  <span className="strong">Patches!</span> Sell just one item
                  and receive the {year} Popcorn Sale Patch.
                </li>
                <li>
                  <span className="strong">Pins!</span> Online sales, military
                  sales, and sales of $1,000 or more earn special pins.
                </li>
                <li>
                  <span className="strong">Prizes!</span> Scouts selling at
                  least $90 can select prizes from the prize form. Assist your
                  scout to set a goal and help them work to achieve it. The{" "}
                  {year}
                  prize list can be found on the reverse side of the popcorn
                  order form. Sell over $3000 and your scout can choose a
                  special prize.
                </li>
                {/* <li>
                  <span className='strong'>Insert top selling language here when known</span> The top
                  seller from each den <i className='emphasize'>and</i> the top
                  selling den (by average per scout) will ride on the Pack 15
                  float at the Jones Creek Christmas Parade. A 2.4 mile value!
                </li> */}
                <li>
                  <span className="strong">
                    If the Pack achieves sales and participation goals, some
                    special incentives will be unlocked!
                  </span>
                </li>
              </ul>
            </p>
            <p className="popcorn">
              <div className="popcornHeader">
                What are the ways my scout can sell?
              </div>
              This year, we have three ways to sell. We know not all three ways
              will be possible for you and your family; we ask that 100% of you
              participate in
              <span className="emphasize"> at least one way</span> to support
              our unit.
              <ul>
                <li>
                  <span className="strong">Online:</span> set up your scout's
                  online account and share their personalized URL.{" "}
                  <i>
                    Note: online orders are processed quickly and are shipped to
                    the customer directly from Camp Masters. Prices can be much
                    higher than the prices on the paper form due to shipping
                    costs.
                  </i>
                </li>
                <li>
                  <span className="strong">Door to Door:</span> familiarize your
                  scout with the{" "}
                  <a
                    href="https://drive.google.com/file/d/1GO_ZmWXB9CeiHfl7HW59Atbd4ji6QDe0/view?usp=sharing"
                    rel="noreferrer"
                    target="_blank"
                  >
                    products
                  </a>{" "}
                  and have fun filling up an order form!{" "}
                  <i>
                    NOTE: Take Orders will be available for pick-up on November
                    21st - It's a popular question that customers will ask.
                  </i>
                </li>
                <li>
                  <span className="strong">Show & Sell:</span> we will set up a
                  display of products at local businesses in September and
                  October and Scouts can sign up for shifts to come out and help
                  sell. This year we will be setting up at Calvin's Bocage
                  Market on September 6th, October 11th, and October 25th.
                </li>
              </ul>
            </p>
            <p className="popcorn">
              <div className="popcornHeader">
                How does my scout sell online?
              </div>

              <ul>
                <li>
                  <span className="strong">Set Up</span> your scout's online
                  profile at{" "}
                  <a
                    href="https://ordering.campmasters.org/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    ordering.campmasters.org
                  </a>
                  .
                </li>
                <li>
                  <span className="strong">Log In</span> and update your scout's
                  profile and picture; grab the online sale link and share!
                </li>
              </ul>
            </p>{" "}
            <p className="popcorn">
              <div className="popcornHeader">
                How does my scout sell door-to-door (a.k.a. Form Sales/Take
                Orders)?
              </div>
              <ul>
                <li>
                  <span className="strong">Complete</span> the top of your
                  scout's form, including goal/prize. Take orders will be
                  available for pick up on Friday, November 21.
                </li>
                <li>
                  <span className="strong">Prepare:</span> familiarize your
                  scout with the product list, practice a sales pitch, wear
                  class A Uniform and don't forget a pen/device/QR code (see
                  payment details below).
                </li>
                <li>
                  <span className="strong">Be Safe:</span> Always accompany your
                  scout, wear Class A uniform, and never sell at night.
                </li>
                <li>
                  <span className="strong">Promote:</span> Spread the word with
                  relatives, friends, coworkers, in your neighborhood, at
                  church, and other locations where you spend a lot of time. You
                  can also share on social media. No matter what, have your
                  scout follow up!
                </li>
              </ul>
              <span className="strong">Payment Details:</span>
              <ul>
                <li>
                  <span className="strong">Due Date:</span> Payments will be due
                  for 100% of your Take Orders by{" "}
                  <span className="strong">
                    <u>October 26th</u>
                  </span>{" "}
                  which is our Rocket Launch Event. Your payment should be less
                  any credit card payments in Camp Masters for customers who may
                  have paid online. <i>Hint: receive payment at the time of sale to
                  avoid using your own funds to cover costs.</i>
                </li>
                <li>
                  <span className="strong">Payment Options:</span> use any or all of the options below to accept popcorn payments:
                  <ol>
                    <li>Cash</li>
                    <li>
                      Checks made out to Pack 15. <i>Note: checks will not be
                      cashed until early November.</i>
                    </li>
                    <li>Checks made out to you that you combine into one check made out to Pack 15.</li>
                    <li>
                      Venmo/Zelle/other payment apps to your personal account.
                      These payments will need to be submitted as a cash or
                      check payment by 10/26.
                    </li>
                    <li>
                      Credit Card - Customers can pay via Credit Card! In your
                      scout's{" "}
                      <a
                        href="https://ordering.campmasters.org/"
                        rel="noreferrer"
                        target="_blank"
                      >
                        Camp Masters account
                      </a>
                      , look for the <span style={{ color: "darkgreen", fontWeight: 600}}>green buttons</span> in the "Scout Delivery" section. Please do <u>not</u> use anything in the
                      <span style={{ color: "blue", fontWeight: 600}}> blue</span> "Show & Sell" section. Two options:
                      <ul className="popcornSubDetail">
                        <li>
                          Download/print your Scout's QR code and a customer can scan the QR code to pay via Credit Card. Customer will need to manually enter credit card information.
                        </li>
                        <li>
                          In Camp Masters: four options appear after selecting "Credit Card" as a payment type: 
                          <ol className="popcornInlineSubDetail" >
                            <li>
                              Tap to pay will be an option (only if your phone
                              is set up for this);
                            </li>
                            <li>Your scout's QR code;</li>
                            <li>
                              Option to text a link to the customer's phone; or
                            </li>
                            <li>Manually enter in credit card information</li>
                          </ol>
                          <i><span className="emphasize">Note:</span> a minimal service charge will be applied for credit card payments.</i>
                        </li>
                      </ul>
                    </li>
                  </ol>
                </li>
              </ul>
            </p>
            <p className="popcorn">
              <div className="popcornHeader">
                How does my scout participate in Show & Sells?
              </div>
              <ul>
                <li>
                  <span className="strong">Check email</span> for an
                  announcement that Show & Sell shift sigh-up is live.
                </li>
                <li>
                  <span className="strong">Sign Up</span> for shifts. Note: a
                  scout's parent or guardian must remain on site for the entire
                  shift.
                </li>
                <li>
                  <span className="strong">Dress</span> in complete Class A
                  Uniform. Bring some{" "}
                  <span className="strong">
                    <u>BIG</u>
                  </span>{" "}
                  energy and be ready to sell to strangers.
                </li>
              </ul>
            </p>
            <p className="popcorn">
              <div className="popcornHeader">Important dates</div>
              <ul>
                <li>
                  <span className="strong">Today</span> - Set up your online
                  profile and start selling!{" "}
                </li>
                <li>
                  <span className="strong">
                    Saturday, September 6
                  </span>{" "}
                  - Show & Sell #1 at Calvin's Bocage Market, 8am-2pm                  
                </li>
                <li>
                  <span className="strong">
                    Saturday, October 11
                  </span>{" "}
                  - Show & Sell #2 at Calvin's Bocage Market, 8am-2pm                  
                </li>
                <li>
                  <span className="strong">
                    Saturday, October 25
                  </span>{" "}
                  - Show & Sell #3 at Calvin's Bocage Market, 8am-2pm                  
                </li>
                <li>
                  <span className="strong">October 26</span> - Deadline to submit orders, payment(s), and prize selections (or at the Pack Meeting on 10/15)
                </li>
                <li>
                  <span className="strong">November 21 (Friday)</span> - Popcorn
                  distribution date
                </li>
              </ul>
            </p>
            <p className="popcorn">
              If you have any questions, please{" "}
              <Link to="/contact">reach out.</Link>{" "}
              <span className="emphasize">Let's get POPPIN!</span>
            </p>
            <p className="popcorn">
              <b className="popcornHeader">Additional Resources</b>
              <ul>
                <li>
                  <a
                    href="https://drive.google.com/file/d/19Vn2Wm4R8YpCiaNTCacV0mwb1wpxFW76/view?usp=drive_link"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Creating online selling profile tips
                  </a>
                </li>
                <li>
                  <a
                    href="https://drive.google.com/drive/folders/1f8t7PoRDCTuLkWZZt4gD8r9jk6ge9slk?usp=sharing"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Pack 15 Resources for families
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
