import lionSrc from '../images/rank-lion.jpg';
import bobcatSrc from '../images/rank-bobcat.jpg';
import tigerSrc from '../images/rank-tiger.jpg';
import wolfSrc from '../images/rank-wolf.jpg';
import bearSrc from '../images/rank-bear.jpg';
import webelosSrc from '../images/rank-webelos.jpg';

const Ranks = () => {
  return (
    <>
      <div className='row'>
        <div className='subcontent'>
          At each level of cub scouts, your scout will be challenged
          appropriately. Here are the programs your scout will expect to
          experience they rise through the ranks.
          <hr />
        </div>
        <div className='rankHeader'>
          <img className='rankImg center-block' src={bobcatSrc} alt='Bobcat' />
        </div>
        <div className='subcontent'>
          The Bobcat badge is the first badge that is earned by all Tiger, Cub,
          and Webelos Scouts. This badge is required for all scouts because it
          involves learning the Cub Scout Promise, the Law of the Pack and other
          fundamental aspects of Cub Scouting. Completion of this badge gives
          the Scout the right to wear the Bobcat patch on his uniform (in the
          twelve o’clock position of the front left shirt pocket) and the right
          to proceed to his next rank (which will vary based upon age.) At the
          end of the Scout year (in May), Lions graduate into a Tiger den.
        </div>
        <hr />
        <div className='rankHeader'>
          <img
            className='rankImgLion center-block'
            src={lionSrc}
            alt='Lion Cub'
          />
        </div>
        <div className='subcontent'>
          Research shows that childhood development accelerates around ages four
          and five, about the time youth begin formal education. To supplement
          the learning and growth children experience at home and in an
          educational environment at that age, Boy Scouts of America has
          developed a program for five-year-old kindergarten children called
          “Lion.” Parents of Lions work together independantly of the Pack to
          meet and play through the self-guided adventures laid out in their
          Lion activity books. The Pack provides a mentor known as a “Lion
          Guide” who will coach the group through their first session and serve
          as a resource for any questions or ideas to help those parents develop
          a plan for future sessions throughout the year. In the Lion program,
          an Adult Partner (a parent, grandparent, or other guardian) always
          accompanies each scout. All the Lions and their Adult Partners form a
          team or “Den” and work with their new friends at their own pace. Lions
          may be invited to attend the occasional Pack meeting, if the program
          scheduled can support age appropriate activities, such as the Pinewood
          derby race or family camping event.
        </div>
        <hr />
        <div className='rankHeader'>
          <img
            className='rankImg center-block'
            src={tigerSrc}
            alt='Tiger Cub'
          />
        </div>
        <div className='subcontent'>
          In the Tigers program, an Adult Partner (a parent, grandparent, or
          other guardian) always accompanies each scout. The Tigers and an Adult
          Partner form a team. The first few Tiger meetings are organized and
          run by the Tiger Den Leader in order to introduce the Tigers and Adult
          Partners to Scouting. After that, each Tiger/Adult team selects a
          topic from the Tiger book and presents the topic to the Tiger Group
          (one topic per meeting). The Tiger earns progress beads towards their
          Tiger badge. Completion of this badge earns the right for the Scout to
          wear the Tiger patch on their uniform (in the six o’clock position of
          the front left shirt pocket, directly beneath the Bobcat patch). At
          the end of the Scout year (in May), Tigers graduate into a Wolf den.
        </div>
        <hr />
        <div className='rankHeader'>
          <img className='rankImg center-block' src={wolfSrc} alt='Wolf Cub' />
        </div>
        <div className='subcontent'>
          In the Wolf program, completion of adventures found within the Wolf
          handbook leads to earning the Wolf badge and Adventure loops. The Wolf
          handbook includes many activities that are family oriented. Your child
          will need your assistance to earn this rank. Completion of this badge
          earns the right for the Scout to wear the Wolf patch on his uniform
          (see the section on placement of emblems and insignia near the end of
          the handbook). At the end of the Scout year (in May), Wolf scouts
          graduate into a Bear den.
        </div>
        <hr />
        <div className='rankHeader'>
          <img className='rankImg center-block' src={bearSrc} alt='Bear Cub' />
        </div>
        <div className='subcontent'>
          In the Bear program, completion of Adventures in the Bear handbook
          leads to earning the Bear badge. The Bear handbook includes many
          activities that are family oriented. Your scout will need your
          assistance to earn this rank. Completion of this badge earns the right
          for the Scout to wear the Bear patch on his uniform (see the section
          on placement of emblems and insignia near the end of the handbook). At
          the end of the Scout year (in May), Bears graduate into a WEBELOS den.
        </div>
        <hr />
        <div className='rankHeader'>
          <img
            className='rankImg center-block'
            src={webelosSrc}
            alt='Webelo Scout'
          />
        </div>
        <div className='subcontent'>
          We'll Be Loyal Scouts. The WEBELOS program is designed to transition
          the scouts from Cub Scouts to Boy Scouts. In the Webelos program,
          scouts earn Adventure pins in areas such as geology, scholarship,
          fitness, and outdoorsmanship that count towards the Webelos rank. As
          such it’s really broken into two phases, based upon the rank badge
          being earned. In the First-Year Webelos program, the boys work on
          their Webelos badge, however, in the second year they work on the
          Arrow of Light. The focus of the Webelos den is to work together as a
          team, much like a Boy Scout Patrol. This includes Webelos den camping.
        </div>
      </div>
    </>
  );
};

export default Ranks;
