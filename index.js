const searchInput = document.querySelector('.search-input');
const searchIcon = document.querySelector('.search-icon');

searchIcon.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query) {
        alert(`Searching for: "${query}" on Amazon...`);
        searchInput.value = '';
    } else {
        alert('Please enter a search term!');
    }
});

//  Cart Interaction
const cartBtn = document.querySelector('.nav-cart');
cartBtn.addEventListener('click', () => {
    alert('Your cart is currently empty 🛍️');
});

// 👤 Sign In Hover Greeting
const signInBox = document.querySelector('.nav-singin');
signInBox.addEventListener('mouseenter', () => {
    signInBox.style.backgroundColor = '#232f3e';
});
signInBox.addEventListener('mouseleave', () => {
    signInBox.style.backgroundColor = 'transparent';
});

//  “See More” Click for Boxes
const seeMoreLinks = document.querySelectorAll('.box-con p');
seeMoreLinks.forEach(link => {
    link.addEventListener('click', () => {
        alert('Redirecting to product details...');
    });
});

//  Back to Top Button
const backToTop = document.querySelector('.foot-panel1');
backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

//  Dynamic Navbar Shadow on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

//  Footer Year Auto Update
const copyright =
    document.querySelector('.copyright span');
if (copyright) {
    const year = new Date().getFullYear();
    copyright.textContent = `© 1996-${year}, Amazon.com, Inc. or its affiliates`;
}

//  Responsive Message
window.addEventListener('resize', () => {
    if (window.innerWidth < 600) {
        console.log('Mobile view active 📱');
    }
});
