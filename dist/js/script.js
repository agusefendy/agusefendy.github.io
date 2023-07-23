//Navbar fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixNav = header.offsetTop;
    const toTop = document.querySelector('#to-top')

    if(window.pageYOffset > fixNav){
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    }else{
        header.classList.remove('navbar-fixed');
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }
}

//Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');
hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
})

//out hamburger
window.addEventListener('click', function(e) {
    if(e.target != hamburger && e.target != navMenu) {
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
})

//darkmode
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function(){
    if(darkToggle.checked) {
        html.classList.add('dark');
    }else{
        html.classList.remove('dark');
    }
})

//Contact Form
const scriptURL = 'https://script.google.com/macros/s/AKfycbyWltNpr6yoycknEwbE2kvLXjNr7hnlTkvsUTVcOl8UfGCV7z_GF2DbbqbvwX_l-7MNLg/exec'
  const form = document.forms['contact-form']
  const success = document.querySelector('#n-success')
  const fail = document.querySelector('#n-fail')

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        success.classList.remove('hidden')
        form.reset()
        console.log('Success!', response)
    })
      .catch(error => {
        fail.classList.remove('hidden')
        console.error('Error!', error.message)
    })
  })