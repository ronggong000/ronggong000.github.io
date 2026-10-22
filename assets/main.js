// Academic profile interactions: theme, mobile navigation, and CV printing.
const toggle=document.querySelector('.theme-toggle');
toggle?.addEventListener('click',()=>{const dark=document.documentElement.getAttribute('data-theme')==='dark'||(!document.documentElement.hasAttribute('data-theme')&&matchMedia('(prefers-color-scheme: dark)').matches);const theme=dark?'light':'dark';document.documentElement.setAttribute('data-theme',theme);try{localStorage.setItem('theme',theme)}catch(e){}});
const navToggle=document.querySelector('.nav-toggle');
navToggle?.addEventListener('click',()=>{const nav=document.querySelector('#site-nav');const open=nav.classList.toggle('is-open');navToggle.setAttribute('aria-expanded',String(open));});
document.querySelector('.print-cv')?.addEventListener('click',()=>window.print());
