'use strict';

//* Top Navbar - 
document.querySelectorAll('nav ul li a').forEach((link => {
    link.addEventListener('mouseover', (e) => {
        e.preventDefault();
        link.style.textDecoration = 'underline';
        link.style.textUnderlineOffset = '5px';
        link.style.opacity = '0.7';
    });
    link.addEventListener('mouseout', (e) => {
        e.preventDefault();
        link.style.textDecoration = 'none';
        link.style.opacity = '1';
    });
}));


//* Home Section Connect button -
document.querySelectorAll('#home button').forEach((btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        window.open('mailto:contact@shallvhack.com', '_blank');
    }, false);
}));


//* About Section Social Media button -
const socialLinks = [
    'https://x.com/shallvhack',
    'https://github.com/shallvhack',
    'https://www.linkedin.com/company/shallvhack/?originalSubdomain=in',
    'mailto:contact@shallvhack.com',
    'https://www.facebook.com/shallvhack/photos/?ref=page_internal'
];
document.querySelectorAll('#about .social-media li a').forEach((link, idx) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        if (socialLinks[idx]) {
            window.open(socialLinks[idx], '_blank');
        }
    }, false);
});


//* About Section Contact button -
document.querySelectorAll('#about .contactBtn').forEach((connectBtn) => {
    connectBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.open('contact.html', '_blank');
    }, false);
});


//* Projects Section Button -
const projectCards = [
    'https://github.com/shallvhack/Sudo-Security-Bypass-CVE-2019-14287',
    'https://github.com/vyvivekyadav04/SharpScan',
    'https://github.com/shallvhack/hotshotbot',
    'https://github.com/vyvivekyadav04/InstaBot',
    'https://github.com/shallvhack/hotshotbot'
];
document.querySelectorAll('#projects .project-container button').forEach((card, idx) => {
    card.addEventListener('click', (e) => {
        if (projectCards[idx]) {
            window.open(projectCards[idx], '_blank');
        }
    }, false);
});


//* Recent Posts links -
const recentPosts = [
    'https://medium.com/hackcura/multiple-flaws-leads-to-account-takeover-within-an-application-9f64abfb1073',
    'https://medium.com/hackcura/blind-idor-leads-to-change-personal-details-of-the-companys-employees-acc2e0701155',
    'https://harshitsengar.in/resources/GraphQL%20Attacks.pdf'
];
document.querySelectorAll('#posts .card button').forEach((card, idx) => {
    card.addEventListener('click', (e) => {
        if (recentPosts[idx]) {
           window.open(recentPosts[idx], '_blank');
        }
    }, false);
});


//* Footer Links-
const footerContactLinks = [
    'mailto:contact@shallvhack.com',
    'tel:+91-9560697511'
];
document.querySelectorAll('footer .contact-footer a').forEach((link, idx) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        if (footerContactLinks[idx]) {
            window.open(footerContactLinks[idx], '_blank');
        }
    }, false);
});


//* Clickable each Section by Navbar links-
// const sectionIds = ['home', 'about', 'projects', 'posts', 'contact'];
// document.querySelectorAll('nav ul li a').forEach((link, idx) => {
//     link.addEventListener('click', (e) => {
//         e.preventDefault();
//         if (sectionIds[idx]) {
//             document.getElementById(sectionIds[idx]).scrollIntoView({ behavior: 'smooth' });
//         }
//     }, false);
// });

document.querySelectorAll('nav li a').forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetId) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    }, false);
});


//* Scroll to Top Button-
document.querySelectorAll('footer button').forEach((btn) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, false);
});
