document.addEventListener('DOMContentLoaded', (event) => {
    // --- THEME TOGGLER ---
    const themeToggle = document.getElementById('checkbox');
    const body = document.body;

    // Function to set the theme
    const setTheme = (theme) => {
        body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        themeToggle.checked = theme === 'light';
    };

    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);

    // Event listener for the toggle switch
    themeToggle.addEventListener('change', () => {
        const newTheme = themeToggle.checked ? 'light' : 'dark';
        setTheme(newTheme);
    });


    // --- ACTIVE NAV LINK ON SCROLL (only on index.html) ---
    if (document.querySelector('.nav-links')) { // Check if we are on the main page
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-links a');

        const activateNavLink = () => {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (pageYOffset >= sectionTop - 150) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(current)) {
                    link.classList.add('active');
                }
            });
        };
        
        window.addEventListener('scroll', activateNavLink);
        activateNavLink(); // Initial call
    }
});