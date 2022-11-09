// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #58b536",
  firstName: "Gabby",
  middleName: "",
  lastName: "Alexis",
  message: " Changing the world one line of code at a time. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/gabbya8",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/gabriellaalexis/",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../assets/img/linkedinpic.jpeg"),
  imageSize: 360,
  message:
    "Hi, I'm Gabby. I'm a Software Engineer with a bachelor's degree in Computer Science and a minor in Media Studies.  I am passionate about using creativity with technology to revolutionize our daily lives.  My goal is to pursue this passion through the field of software engineering.  Aside from a programmer, I am also an ameteur roller skater, video game enthusiast and a foodie!",
  resume: "https://docs.google.com/document/d/1fBqOIYL5NQgpYh_lqktl2TXMOxBXz9tt/edit?usp=sharing&ouid=108781859556352815954&rtpof=true&sd=true",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "gabbya8", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

const portfolio = {
  show: true,
  heading: "Recent Projects",
  projects: [
    {
      title: "Music Sample Website",
      description: "A web app that lets you listen to a variety of songs and shows you where they've been sampled from",
      img: require("../assets/img/music-sample-site.png"),
      url: "https://gabbya8.github.io/song-sample-website/"
    },
    {
      title: "Climate Game",
      description: "An educational web application designed to teach students about climate change and how to actively prevent its effects on the environment",
      img: require("../assets/img/climate-game.png"),
      url: "https://gabbya8.github.io/ClimateGame/"
    },
    {
      title: "Star Wars Character Hub",
      description: "A website that utilizes mySQL and PHP to queue information on hero and villan characters from the Star Wars Universe",
      img: require("../assets/img/star-wars.png"),
      url: "https://star-wars-char-hub.herokuapp.com/"
    },
    {
      title: "Meditapp",
      description: "A social media like iOS app that provides a platform for meditation enthusiasts to upload content and interact with members of the community",
      img: require("../assets/img/explore-page.png"),
      url: "https://github.com/gabbya8/meditapp"
    }
  ]
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    {
      img: require("../assets/img/linkedinpic.jpeg"),
      label: "First slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
    {
      img: require("../assets/img/linkedinpic.jpeg"),
      label: "Second slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
  ],
  imageSize: {
    width: "615",
    height: "450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 75 },
    { name: "SQL", value: 70 },
    { name: "Firebase", value: 70 },
    { name: "C++", value: 80 },
    { name: "JavaScript", value: 80 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 90 },
    { name: "Git", value: 80 },
  ],
  softSkills: [
    { name: "Communication", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Critical Thinking", value: 85 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 100 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: false,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering or Web Development opportunities! If you know of any positions available and feel like I'm the right candidate for your company, feel free to email me at",
  email: "gabriellaalexis4@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer III',
      companylogo: require('../assets/img/amex.png'),
      date: 'November 2021 – ',
    },
    {
      role: 'Instructor',
      companylogo: require('../assets/img/gwc-logo.png'),
      date: 'June 2020 – August 2021',
    },
    {
      role: 'IOS & Android Engineer Intern',
      companylogo: require('../assets/img/mindweaver.png'),
      date: 'July 2019 – August 2019',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, portfolio, skills, leadership, getInTouch, experiences };
