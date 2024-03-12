import { nanoid } from 'nanoid';
import phonebook from '../src/assets/projects/phonebook.png';
import studio from '../src/assets/projects/studio.jpg';
import rentcar from '../src/assets/projects/rentcar.png';
import moviesSearch from '../src/assets/projects/moviesSearch.png';
import imageSearch from '../src/assets/projects/imageSearch.png';
import watch from '../src/assets/projects/watch.png';
import pulse from '../src/assets/projects/pulse.png';
import tastytreats from '../src/assets/projects/tastytreats.png';
import foodsta from '../src/assets/projects/foodsta.png';

export const projects = [
  {
    id: nanoid(),
    title: 'Phonebook',
    img: phonebook,
    description: 'Phonebook app helps you save phone contacts and manage them',
    repository: 'My own project',
    technologies: ['React.js'],
    github: 'https://github.com/BogdanK85/goit-react-hw-08-phonebook',
    live: 'https://bogdank85.github.io/goit-react-hw-08-phonebook/',
  },
  {
    id: nanoid(),
    title: 'Web-Studio',
    img: studio,
    description: 'Site for digital marketing for your business.   sales.',
    repository: 'My own project',
    technologies: ['HTML, CSS'],
    github: 'https://github.com/BogdanK85/web-studio',
    live: 'https://bogdank85.github.io/web-studio/',
  },
  {
    id: nanoid(),
    title: 'Lux car rent',
    img: rentcar,
    description: 'App helps you choose and rent lux car ',
    repository: 'My own project',
    technologies: ['React.js'],
    github: 'https://github.com/BogdanK85/lux-car-rent',
    live: 'https://bogdank85.github.io/lux-car-rent/',
  },
  {
    id: nanoid(),
    title: 'Movies search',
    img: moviesSearch,
    description: 'App for seacrh movies and info about it',
    repository: 'My own project',
    technologies: ['React.js'],
    github: 'https://github.com/BogdanK85/goit-react-hw-05-movies',
    live: 'https://bogdank85.github.io/goit-react-hw-05-movies/',
  },
  {
    id: nanoid(),
    title: 'Image search',
    img: imageSearch,
    description: 'App for helps you to find diferent images in hd quality',
    repository: 'My own project',
    technologies: ['React.js'],
    github: 'https://github.com/BogdanK85/goit-react-hw-04-images/',
    live: 'https://bogdank85.github.io/goit-react-hw-04-images/',
  },
  {
    id: nanoid(),
    title: 'FoodSta',
    img: foodsta,
    description:
      'TastyTreats - Customize Your Meal with Ingredient and Video Guides',
    repository: 'Team project',
    technologies: ['React.js'],
    github:
      'https://github.com/OleksandrShpachuk/foodsta-team-project/graphs/contributors',
    live: 'https://oleksandrshpachuk.github.io/foodsta-team-project/',
  },
  {
    id: nanoid(),
    title: 'The watch spot',
    img: watch,
    description: 'The site will help you choose and order a Swiss watch',
    repository: 'Team project',
    technologies: ['HTML, CSS, JavaScript'],
    github: 'https://github.com/RuslanMirasov/TheWatchSpot/graphs/contributors',
    live: 'https://ruslanmirasov.github.io/TheWatchSpot/',
  },
  {
    id: nanoid(),
    title: 'Power pulse',
    img: pulse,
    description:
      'App for training your body, with diferent exercises and products',
    repository: 'Team project',
    technologies: ['Node.js, React.js'],
    github:
      'https://github.com/kurshatsov-andrii/leader-code-team-power-pulse-back-end/graphs/contributors',
    live: 'https://kurshatsov-andrii.github.io/leader-code-team-power-pulse/',
  },
  {
    id: nanoid(),
    title: 'Tasty treats',
    img: tastytreats,
    description: 'Phonebook app helps you save phone contacts and manage them',
    repository: 'Team project',
    technologies: ['React.js'],
    github:
      'https://github.com/kurshatsov-andrii/leader-code-team-tasty-treats/graphs/contributors',
    live: 'https://kurshatsov-andrii.github.io/leader-code-team-tasty-treats/',
  },
];

export const data = { projects };
