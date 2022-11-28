import portfolioImg from '../portfolio_screenshot.png';
import foodappImg from '../foodapp_screenshot.png';
import mernImg from '../mern.png';
import toastImg from '../not_screenshot.png';

export const Education = {
  Graduation:
    'Graduated in Computer Science at Jawaharlal Nehru Technological University Hyderabad in the year 2020.',
  XII: 'Completed XII from Narayana Junior College.',
};

export const Experience = {
  Propertyloop: [
    `Currently working as Full Stack Devloper on developing application on both frontend and
    backend areas in developing responsive UI, creating APIs, fixing
    bugs, writing clean and error free code.`,
    `working on bunch of tech
    stacks which includes Javascript, React with Ionic, Nodejs, Nestjs,
    MySql, Azure Micro services etc.`,
  ],
  Panorbit: [
    `Worked as Junior Software Devloper in Panorbit in developing responsive web and
    mobile applications.`,
    `Worked on Tech Stacks like React, React Native, Javascript etc.`,
  ],
};

export const Projects = [
  {
    title: 'Portfolio Website',
    text: 'Portfolio website built using React',
    src: 'https://github.com/Tarun-555/portfolio',
    img: portfolioImg,
    backgroundColor: 'linear-gradient(to right, #7b4397, #dc2430)',
  },
  {
    title: 'Food App',
    text: 'Food app is mobile based application built using react native, firebase etc',
    src: 'https://github.com/Tarun-555/Food_delievery_app',
    img: foodappImg,
    backgroundColor: 'linear-gradient(to right, #3494e6, #ec6ead)',
  },
  {
    title: 'Grocery Bag',
    text: 'Grocery Bag is web app built using React, Nodejs, Mongodb etc',
    src: 'https://github.com/Tarun-555/GroceryBag',
    img: mernImg,
    backgroundColor: 'linear-gradient(to right, #da4453, #89216b)',
  },
  {
    title: 'Notification Toaster',
    text: 'A Simple Notification Toaster',
    src: 'https://github.com/Tarun-555/notification_popup',
    img: toastImg,
    backgroundColor: 'linear-gradient(to right, #e55d87, #5fc3e4)',
  },
];
