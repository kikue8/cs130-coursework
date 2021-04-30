const defaultTheme = (ev) => {
   document.querySelector('body').className = 'container';
};

const oceanTheme = (ev) => {
      document.querySelector('body').className = 'ocean'; 
};

const desertTheme = (ev) => {
      document.querySelector('body').className = 'desert';
};

document.querySelector('#default').onclick = defaultTheme;
document.querySelector('#ocean').onclick = oceanTheme;
document.querySelector('#desert').onclick = desertTheme;