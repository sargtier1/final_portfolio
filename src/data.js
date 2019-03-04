// here I will input all my project data, personal data, and the like.
let portfolioData = {
  name: "Salvatore Argentieri",
  role: "Full Stack Web Developer",
  headshot: "images/headshot.jpg",
  location: "Dallas, Texas",
  tagline: ` Thank you for checking out my portfolio! If you wish 
  to contact me my preferred method of contact is LinkedIn. 
  Please reach out for employment opportunities, free-lance work. 
  I do have my business email on here as well for those of you who are not on
  LinkedIn. Please give me a few business days to reply to inquiries via
  email. Thanks for checking out my website, and I hope to hear from you
  in the near future!`,
  socialMedia: [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/salvatore-argentieri-39a363146/",
      bigSize: "fa fa-linkedin-square fa-3x",
      smallSize: "fa fa-linkedin-square fa-2x"
    },
    {
      name: "Github",
      link: "https://github.com/sargtier1",
      bigSize: "fa fa-github-square fa-3x",
      smallSize: "fa fa-github-square fa-2x"

    },
    {
      name: "Email",
      link: "mailto:salv.m.argent@gmail.com",
      bigSize: "fa fa-envelope fa-3x",
      smallSize: "fa fa-envelope-square fa-2x"

    }
    // {third social media link here}
  ],
  aboutMe: `As of 2019 I completed the Full Stack Web Development certification course offered through SMU. The 24-week immersive curriculum 
    taught me a wide set of skills for full stack development. Paired with my experience as a working professional 
    in management, training & development, and operations I'm confident I will be an asset to any organization. In addition to 
    being tech savvy, I have experience with other sectors such as business development, marketing, and sales.`,
  skills: "UI/UX Design Concepts, Social Media Marketing, Project Management, SCRUM/Agile Development, Public Speaking, Microsoft Office Systems.",
  frontSkills:
    "Semantic HTML, CSS3, JS(ES6), Bootstrap 4, JQuery, React.js, Handlebars.js, Moment.js, Passport.js, Responsive Web Design, Semantic-UI, Mocha.js & Chai.js, Travic CLI, Axios, Cheerio.js, ES-Lint, Search Engine Optimization.",
  backSkills:
    "Node.JS, Express.JS, MySQL, NoSQL, Security Session Storage, User Authentication; Spring MVC Design Pattern, Command line, Git, Deployment, Database Theory.",
  projects: [
    {
      name: "Scion",
      desc:
        "Revolutionizing the way Intended Parents, connect with Gestational Carriers.",
      src: "images/projectpics/scion.png",
      link: "https://github.com/justinkunz/Final_Project"
    },
    {
      name: "Call of Duty Clicky Game",
      desc:
        "A game that demostrates an understanding of react, and life cycle methods. ",
      src: "images/projectpics/click_game.png",
      link: "https://github.com/sargtier1/Clicky_Game"
    },
    {
      name: "Daily Dose",
      desc:
        "We help you keep track of prescription refills. Complete with Express, and Node.",
      src: "images/projectpics/pill_tracker.png",
      link: "https://github.com/sargtier1/Pill_Tracker"
    },
    {
      name: "Pokedex",
      desc:
        "A simple pokedex for the professional circuit. Uses the PokeApi, Jquery, Firebase.",
      src: "images/projectpics/pokedex.png",
      link: "https://github.com/Crhodes92/PokedexRepo"
    },
    {
      name: "Crystal Game",
      desc:
        "A fun, easy, guess-the-value crystal game using JQuery, HTML, CSS.",
      src: "images/projectpics/crystal_game.png",
      link: "https://github.com/sargtier1/Crystal_game/tree/master"
    },
    {
      name: "Gif Search",
      desc:
        "A simple search engine to find, and share your favorite gifs using the Giphy API.",
      src: "images/projectpics/gif_search.png",
      link: "https://github.com/sargtier1/Giphy_project/tree/master"
    }
  ]
};
export default portfolioData;
