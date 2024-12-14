// script.js

// Navbar HTML content
document.getElementById('navbar-container').innerHTML = `
    <div class="navbar">
        <div class="logo">Bootrec</div>
        <div class="hamburger-menu" id="hamburger-menu">&#9776;</div>
        <div class="menu" id="mobile-menu">
            <a href="/index.html">Blog</a>
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
                <h3>About Us</h3>
                <p>We are committed to delivering exceptional services with a focus on quality and customer satisfaction.</p>
            </div>
            <div class="column">
                <h3>Contact</h3>
                <p>Email: <a href="mailto:info@example.com">info@example.com</a></p>
                <p>Phone: +123 456 7890</p>
                <p>Address: 123 Business Street, City</p>
            </div>
            <div class="column">
                <h3>Follow Us</h3>
                <div class="social-icons">
                    <a href="#"><i class="fa fa-facebook"></i></a>
                    <a href="#"><i class="fa fa-twitter"></i></a>
                    <a href="#"><i class="fa fa-instagram"></i></a>
                </div>
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
