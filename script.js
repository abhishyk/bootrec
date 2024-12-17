// script.js

// Navbar HTML content
document.getElementById('navbar-container').innerHTML = `
    <div class="navbar">
        <div class="logo"><a href="/index.html">Bootrec</a></div>
        <div class="hamburger-menu" id="hamburger-menu">&#9776;</div>
        <div class="menu" id="mobile-menu">
            <a href="/blog.html">Blog</a>
            <a href="/about.html">About</a>
            <a href="/contact.html">Contact</a>
        </div>
    </div>
`;

// Footer HTML content
document.getElementById('footer-container').innerHTML = `
    <footer class="footer">
        <div class="row">
           <div class="column">
            <h3>Bootrec Menu</h3>
            <ul class="link-list">
                <li><a href="/index.html">Home</a></li>
                <li><a href="/about.html">About us</a></li>
                <li><a href="/blog.html">Blog</a></li>
                <li><a href="/contact.html">Contact Us</a></li>
                <li><a href="#">Privacy Policy</a></li>
            </ul>
        </div>
            <div class="column">
            <h3>Bootrec Tool's</h3>
            <ul class="link-list">
                <li><a href="#">Font Generator</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Privacy Policy</a></li>
            </ul>
        </div>
          <div class="column">
            <h3>Useful Links</h3>
            <ul class="link-list">
               <li><a href="https://www.w3schools.com/html/tryit.asp?filename=tryhtml_basic" target="_blank">W3school HTML Editor</a></li>
                <li><a href="https://github.com" target="_blank">Github.com</a></li>
                <li><a href="https://getintopc.com" target="_blank">All Free Software</a></li>
                <li><a href="https://www.sejda.com/pdf-editor" target="_blank">Real time PDF Editor</a></li>
                <li><a href="https://www.photopea.com" target="_blank">Online Photoshop</a></li>
            </ul>
        </div>
        </div>
    </footer>
`;

// Hamburger menu functionality for mobile view
const hamburgerMenu = document.getElementById('hamburger-menu');
const mobileMenu = document.getElementById('mobile-menu');

hamburgerMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});
