// TODO: Add a comment explaining role of the index.js file and import statements
// Import boxClick and headerClick function as dependency into entry point

import { boxClick } from './box';
import { headerClick } from './header';

document.getElementById('boxBtn').addEventListener('click', boxClick);
document.getElementById('headerBtn').addEventListener('click', headerClick);
