import React from 'react'
import Link from 'gatsby-link'

const people = [
  {
    name: 'The Hunter Family',
    imgSrc: '/pics/hunter.jpg',
    description: `Brad & Susan`,
  },
  {
    name: 'The Thomas Family',
    imgSrc: '/pics/thomas.jpg',
    description: `Laura, Bruce III, Bruce Jr., Betsy, Betty, Meghan, & Eric`,
  },
  {
    name: 'Betty, Flower Girl',
    imgSrc: '/pics/betty.jpg',
    description: `Betty is Blake’s sweet and brilliant niece.  She enjoys counting to ten, blowing raspberries, and saying “avocado.”  Babysitting Betty is one of Blake and Anna’s favorite weekend activities.`,
  },
  {
    name: 'Marianne, Matron of Honor',
    imgSrc: '/pics/marianne.jpg',
    description: `Anna was randomly assigned as Marianne’s freshman roommate.  11 years later (7 under the same roof!), she would choose her in a heartbeat.  Anna and Marianne have built their friendship on a rock-solid foundation of bad (great) reality television marathons, late-night nachos, and cake-in-a-mug (recipe available upon request).  Marianne is devoted to her family and friends, and takes care of everyone.`,
  },
  {
    name: 'Rachel, Bridesmaid',
    imgSrc: '/pics/rachel.jpg',
    description: `Rachel and Anna met in third grade.  Their friendship grew through many recesses spent deep in conversation and a mutual love of the performing arts.  If they weren’t sharing the stage, they were supporting one another, attending countless chorus concerts, dance recitals, and musicals over the years.  Though they’ve lived in different cities since starting college, Anna is so thankful they’ve kept in touch.`,
  },
  {
    name: 'Maggie, Bridesmaid',
    imgSrc: '/pics/maggie.jpg',
    description: `Maggie and Anna first met in high school, but grew close in college through many theatre and English classes together, and many late-night adventures after mom (Marianne) had gone to bed.  Maggie is quick to lighten the mood, and can always get Anna to laugh at herself.  She's also fiercely competitive.  Don’t mess with her over board games or at the flip-cup table.`,
  },
  {
    name: 'Caitlin, Bridesmaid',
    imgSrc: '/pics/caitlin.jpg',
    description: `Caitlin and Anna started as work-friends, but quickly became life-friends.  She and Atticus (pictured), are frequent visitors in the Hunter-Thomas household.  Caitlin loves to travel the world, and is always planning her next adventure off the beaten path.  She’s also a social butterfly, and if weren’t for her, Anna would likely spend every weekend in sweatpants.`,
  },
  {
    name: 'Brian, Best Man',
    imgSrc: '/pics/brian.jpg',
    description: `Brian and Blake met on the steps of the University of Virginia Rotunda in 2007.  Their mutual love of heady tunes and juicy IPAs has increased with each passing year.  Blake values Brian’s opinion, and appreciates his honesty.  Whether helping out a stranger who is up a creek without a paddle, or getting lost in the woods at Marvin’s Mountaintop, Blake and Brian always have a good time together.`,
  },
  {
    name: 'Ben, Groomsman',
    imgSrc: '/pics/ben.jpg',
    description: `Ben and Blake went on their first date to McGrady’s Irish Pub in 2012.  They’ve been grilling meats, drinking beers, and seeing live music together ever since.  Ben is a great listener and a thoughtful friend, and Blake appreciates his positive attitude.  His gregarious personality has earned him the prestigious title of “Happiness Coordinator.”`,
  },
  {
    name: 'Eric, Groomsman',
    imgSrc: '/pics/eric.jpg',
    description: `Eric, the middle Brother Thomas, enjoys beer, bourbon, barbecue, and boats.  Eric is known amongst family and friends for his incredible generosity and dependability - he is always up for a good time, and always there to help you out of a jam.  Luckily for Blake and Anna, Eric and his wife Meghan live just a few miles away.`,
  },
  {
    name: 'Bruce, Groomsman',
    imgSrc: '/pics/bruce.jpg',
    description: `Bruce is the eldest Brother Thomas.  When he’s not closing deals or hanging out on the playground with baby Betty, Bruce enjoys traveling the world with his wife Laura.  Blake appreciates Bruce’s unconditional support.  He is always there with great advice in tough times and the first to offer congratulations in good times.`,
  },
];

const PeoplePage = () =>
  <div>
    {people.map(person => {
      return (
        <div key={person.name}>
          <h3>{person.name}</h3>
          <img src={person.imgSrc} style={{width: '80%', maxWidth: '600px', height: 'auto', display: 'block', margin: '-5px auto 25px'}}/>
          {person.description && <p className="person description">{person.description}</p>}
        </div>
      );
    })}

  </div>

export default PeoplePage;
