/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.*/
const header = document.querySelector('.header')
const menuBtn = document.querySelector('.menu-button')

function createMenu (items) {
  // INIT
  const menu = document.createElement('div')
  const ul = document.createElement('ul')

  //CLASS
  menu.classList.add('menu')

  // STRUCTURE
  menu.appendChild(ul)

  // LIST LOOP
  items.forEach(menuitem => {
    const li = document.createElement('li')
    li.textContent = menuitem
    ul.appendChild(li)
  });

  // EVENT
  menuBtn.addEventListener('click' , e => {
    menu.classList.toggle('menu--open')
    menuAnimationIn()
    let articles = document.querySelector('.articles')
    articles.addEventListener('click', e => {
      menu.classList.remove('menu--open')
    })
  })

  return menu

}

header.appendChild(createMenu(menuItems))
  

  // Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  // Add those items to the <ul>

  // Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  // Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  // Step 5: return the menu component.

  // Step 6: add the menu component to the DOM.
  
  gsap.from('.articles', {opacity: 0, duration: 1.5, y: 500})
  gsap.from('h1', {opacity: 0, duration: 1, x: 5000})
  function menuAnimationIn () {
    gsap.from('.menu', {opacity: 0, duration: 1, x: -500})
    gsap.from('.menu-button', {duration: 1, rotation: 180})
  }


  
