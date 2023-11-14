

const currentpage = window.location.pathname; //current page to check
const navLinks = document.querySelectorAll('nav a').forEach(link => {
  if(link.href.includes(`${currentpage}`)){
    link.classList.add('active');
  }
})

