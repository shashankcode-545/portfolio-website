import { ProgressBar } from "./progressBar.js";

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// function initScroll() {
//     const nav = document.querySelector('.nav');
//     const navButtons = document.querySelectorAll('.nav-buttons a');
//     const sections = document.querySelectorAll('section');

//     // Function to change navbar background on scroll
//     window.addEventListener('scroll', () => {
//         if (window.scrollY > 50) {
//             nav.style.backgroundColor = 'rgba(255, 255, 255, 1)'; // Solid background on scroll
//             nav.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
//         } else {
//             nav.style.backgroundColor = 'rgba(255, 255, 255, 0.9)'; // Semi-transparent background
//             nav.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
//         }
//     });
// }

// function initializeAnimations() {
//     document.querySelector('greet')?.classList.add('slide-in-left','delay-0');
//     document.querySelector('text-gradient')?.classList.add('slide-in-left', 'delay-2');
//     document.querySelector('cta-button')?.classList.add('slide-in-left', 'delay-3');
//     document.querySelector('socials')?.classList.add('slide-in-left', 'delay-3');
// }
// document.addEventListener('DOMContentLoaded', initializeAnimations);
// document.addEventListener("DOMContentLoaded", function () {
//     const heroSection = document.querySelector(".hero-section");

//     const observer = new IntersectionObserver(
//         (entries) => {
//             entries.forEach((entry) => {
//                 if (entry.isIntersecting) {
//                     // Add a class to trigger the animations
//                     entry.target.classList.add("in-view");
//                     observer.unobserve(entry.target); // Stop observing after triggering
//                 }
//             });
//         },
//         {
//             threshold: 0.5, // Trigger when 50% of the section is visible
//         }
//     );

//     if (heroSection) {
//         observer.observe(heroSection); // Start observing the hero section
//     }
// });

// let observer = new IntersectionObserver((entries) => {
//     if (entry.isIntersecting) {
//         entry.target.classList.add('active');
//     } else {
//         entry.target.classList.remove('active');
//     }
// });
// document.querySelectorAll("hero-content")
// .forEach(e =>{ 
//     observer.observe(e);
// });
// function initScrollReveal() {
//     const reveals = document.querySelectorAll('.hero-content');

//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add('slide-in-left');
//             } else {
//                 entry.target.classList.remove('slide-in-left');
//             }
//         });
//     }, {
//         threshold: 0.2,
//     });

//     reveals.forEach(element => {
//         observer.observe(element);
//     })
// }
// document.addEventListener('DOMContentLoaded', initScrollReveal);


// document.addEventListener('DOMContentLoaded', () => {
//     // Create a custom cursor element
//     const cursor = document.createElement('div');
//     cursor.classList.add('custom-cursor'); 
//     document.body.appendChild(cursor);

//     // Track mouse movements
//     document.addEventListener('mousemove', (event) => {
//         const { clientX: x, clientY: y } = event;
//         cursor.style.left = `${x}px`;
//         cursor.style.top = `${y}px`;
// });
// });
// document.querySelectorAll('.nav-btn').forEach((button) => {
//     button.addEventListener('mouseenter', (e) => {
//     const { offsetX, offsetY, clientWidth, clientHeight } = e.target;
//     const x = offsetX / clientWidth;
//     const y = offsetY / clientHeight;

//     if (x < 0.5 && y < 0.5) {
//         button.classList.add('hover-from-left');
//     } else if (x > 0.5 && y < 0.5) {
//         button.classList.add('hover-from-right');
//     } else if (y > 0.5 && x < 0.5) {
//         button.classList.add('hover-from-bottom');
//     } else {
//         button.classList.add('hover-from-top');
//     }
//     });

//     button.addEventListener('mouseleave', () => {
//     button.classList.remove(
//         'hover-from-left',
//         'hover-from-right',
//         'hover-from-top',
//         'hover-from-bottom'
// );
//     });
// });

// document.querySelectorAll('.nav-btn').forEach((button) => {
//     let prevX = 0; // Track previous X position
//     let prevY = 0; // Track previous Y position

//     button.addEventListener('mousemove', (e) => {
//         const { offsetX, offsetY, clientWidth, clientHeight } = e.target;
//         const x = offsetX / clientWidth; // Normalized X position (0 to 1)
//         const y = offsetY / clientHeight; // Normalized Y position (0 to 1)

//         // Calculate direction based on previous and current positions
//         const deltaX = x - prevX; // Change in X direction
//         const deltaY = y - prevY; // Change in Y direction

//         // Determine the dominant direction
//         if (Math.abs(deltaX) > Math.abs(deltaY)) {
//             // Horizontal movement
//             if (deltaX > 0) {
//                 button.classList.add('hover-from-left');
//                 button.classList.remove('hover-from-right', 'hover-from-top', 'hover-from-bottom');
//             } else {
//                 button.classList.add('hover-from-right');
//                 button.classList.remove('hover-from-left', 'hover-from-top', 'hover-from-bottom');
//             }
//         } else {
//             // Vertical movement
//             if (deltaY > 0) {
//                 button.classList.add('hover-from-top');
//                 button.classList.remove('hover-from-bottom', 'hover-from-left', 'hover-from-right');
//             } else {
//                 button.classList.add('hover-from-bottom');
//                 button.classList.remove('hover-from-top', 'hover-from-left', 'hover-from-right');
//             }
//         }

//         // Update previous positions
//         prevX = x;
//         prevY = y;
//     });

//     button.addEventListener('mouseleave', () => {
//         button.classList.remove(
//             'hover-from-left',
//             'hover-from-right',
//             'hover-from-top',
//             'hover-from-bottom'
//         );
//     });
// });

// document.querySelectorAll('.nav-btn').forEach((button) => {
//     let prevX = 0; // Track previous X position
//     let prevY = 0; // Track previous Y position

//     button.addEventListener('mousemove', (e) => {
//         const { offsetX, offsetY, clientWidth, clientHeight } = e.target;
//         const x = offsetX / clientWidth; // Normalized X position (0 to 1)
//         const y = offsetY / clientHeight; // Normalized Y position (0 to 1)

//         // Calculate direction based on previous and current positions
//         const deltaX = x - prevX; // Change in X direction
//         const deltaY = y - prevY; // Change in Y direction

//         // Remove all existing hover classes
//         button.classList.remove(
//             'hover-from-left',
//             'hover-from-right',
//             'hover-from-top',
//             'hover-from-bottom'
//         );

//         // Determine the dominant direction
//         if (Math.abs(deltaX) > Math.abs(deltaY)) {
//             // Horizontal movement
//             if (deltaX > 0) {
//                 button.classList.add('hover-from-left'); // Mouse moving left-to-right
//             } else {
//                 button.classList.add('hover-from-right'); // Mouse moving right-to-left
//             }
//         } else {
//             // Vertical movement
//             if (deltaY > 0) {
//                 button.classList.add('hover-from-top'); // Mouse moving top-to-bottom
//             } else {
//                 button.classList.add('hover-from-bottom'); // Mouse moving bottom-to-top
//             }
//         }

//         // Update previous positions
//         prevX = x;
//         prevY = y;
//     });

//     button.addEventListener('mouseleave', () => {
//         // Remove all hover classes when the mouse leaves
//         button.classList.remove(
//             'hover-from-left',
//             'hover-from-right',
//             'hover-from-top',
//             'hover-from-bottom'
//         );
//     });
// });

// document.querySelectorAll('.nav-btn').forEach((button) => {
//     button.addEventListener('mouseenter', (e) => {
//         const { left, top, width, height } = button.getBoundingClientRect();
//         const mouseX = e.clientX - left;
//         const mouseY = e.clientY - top;

//         // Determine the edge of entry based on the mouse position
//         const edges = {
//             top: mouseY,
//             bottom: height - mouseY,
//             left: mouseX,
//             right: width - mouseX,
//         };

//         // Find the closest edge
//         const closestEdge = Object.keys(edges).reduce((a, b) => (edges[a] < edges[b] ? a : b));

//         // Add the respective class based on the closest edge
//         button.classList.remove('hover-from-top', 'hover-from-bottom', 'hover-from-left', 'hover-from-right');
//         button.classList.add(`hover-from-${closestEdge}`);
//     });

//     button.addEventListener('mouseleave', () => {
//         // Remove all hover classes when the mouse leaves
//         button.classList.remove('hover-from-top', 'hover-from-bottom', 'hover-from-left', 'hover-from-right');
//     });
// });

// const typewriterText = document.getElementById('typewriter-text');
// const text = 'Shashank Sharma';
// let i = 0;

// function typewriter() {
//   if (i < text.length) {
//     typewriterText.textContent += text[i];
//     i++;
//     setTimeout(typewriter, 50);
//   }
// }

// typewriter();

document.querySelectorAll('.hero-button').forEach((button) => {
    button.addEventListener('mouseenter', (e) => {
        const { left, top, width, height } = button.getBoundingClientRect();
        const mouseX = e.clientX - left;
        const mouseY = e.clientY - top;

        const edges = {
            top: mouseY,
            bottom: height - mouseY,
            left: mouseX,
            right: width - mouseX,
        };

        const closestEdge = Object.keys(edges).reduce((a, b) => (edges[a] < edges[b] ? a : b));

        button.classList.remove('hover-from-top', 'hover-from-bottom', 'hover-from-left', 'hover-from-right');
        button.classList.add(`hover-from-${closestEdge}`);
    });

    button.addEventListener('mouseleave', () => {
        button.classList.remove('hover-from-top', 'hover-from-bottom', 'hover-from-left', 'hover-from-right');
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const revealers = document.querySelectorAll('.revealer');

    revealers.forEach(revealer => {
        revealer.addEventListener('mouseenter', () => {
            revealer.querySelector('.hover-content').style.display = 'block';
        });

        revealer.addEventListener('mouseleave', () => {
            revealer.querySelector('.hover-content').style.display = 'none';
        });
    });
});

function loadinganimation() {
    gsap.from("#page1 h1",{
        x:-180,
        duration:0.7,
        delay:0.5,
        opacity:0,
        stagger:0.3,
        transformOrigin: "0% 50% -50",
        ease: "back",
        stagger: 0.6,
        yoyo:1
    })
    gsap.from("#page1 p",{
        x:-120,
        duration:0.8,
        delay:0.9,
        opacity:0
    })
    gsap.from(".image", {
        scale:0.9,
        duration:0.4,
        x:0,
        y:0,
        delay:1.4,
        opacity:0
    })
    gsap.from(".hero-button",{
        scale:0.8,
        opacity:0,
        duration:0.6,
        y:10,
        delay:0.6
    })
}
loadinganimation();

// document.addEventListener('DOMContentLoaded', () => {
//     const headers = document.querySelectorAll('.headers');
    
//     headers.forEach((header) => {
//         gsap.from(header, {
//         scrollTrigger: {
//             trigger: header,
//             start: 'top 80%',
//             end: 'top 50%',
//           toggleActions: 'play none none reset', // Enables replay on every observation
//         },
//         y: 20,
//         opacity: 0,
//         duration: 0.8,
//         ease: 'power2.out',
//         });
//     });
// });
document.addEventListener('DOMContentLoaded', () => {
    
    const headers = document.querySelectorAll('.headers');
    
    headers.forEach((header) => {
        const h1s = header.querySelectorAll('h1');
        gsap.from(h1s, {
        scrollTrigger: {
            trigger: header,      
            start: 'top 80%',     
            end: 'top 50%',      
            toggleActions: 'play none none reset',
        },
        y: 20,           
        opacity: 0,        
        duration: 0.8,       
        ease: 'power2.out',      
        stagger: 0.2,           
        });
    });
});

function initScrollReveal2() {
    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active');
            }
        });
    }, {
        threshold: 0.01,
    });

    reveals.forEach(element => {
        observer.observe(element);
    });
}
document.addEventListener('DOMContentLoaded', initScrollReveal2);

function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal2');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active');
            }
        });
    }, {
        threshold: 0.01,
    });

    reveals.forEach(element => {
        observer.observe(element);
    });
}
document.addEventListener('DOMContentLoaded', initScrollReveal);

const progressBar1 = new ProgressBar({
    progress: 30 ,
    height: "8px",
    backgroundColor: "#f5848c",
    fillColor: "#ff3c0a",
    rounded: true,
    duration: 2000 ,
});
progressBar1.mount("#cpp");
const progressBar2 = new ProgressBar({
    progress: 30 ,
    height: "8px",
    backgroundColor: "#f5848c",
    fillColor: "#ff3c0a",
    rounded: true,
    duration: 1000 ,
});
progressBar2.mount("#python");
// progressBar1.mount("#cpp");
const progressBar3 = new ProgressBar({
    progress: 60 ,
    height: "8px",
    backgroundColor: "#f5848c",
    fillColor: "#ff3c0a",
    rounded: true,
    duration: 1000 ,
});
progressBar3.mount("#express");
// progressBar1.mount("#cpp");
const progressBar4 = new ProgressBar({
    progress: 70 ,
    height: "8px",
    backgroundColor: "#f5848c",
    fillColor: "#ff3c0a",
    rounded: true,
    duration: 1000 ,
});
progressBar4.mount("#node");

const progressBar5 = new ProgressBar({
    progress: 90 ,
    height: "8px",
    backgroundColor: "#f5848c",
    fillColor: "#ff3c0a",
    rounded: true,
    duration: 1000 ,
});
progressBar5.mount("#css");
const progressBar6 = new ProgressBar({
    progress: 100 ,
    height: "8px",
    backgroundColor: "#f5848c",
    fillColor: "#ff3c0a",
    rounded: true,
    duration: 2000 ,
});
progressBar6.mount("#html");

const starContainer = document.createElement('div');
starContainer.classList.add('stars');
document.body.appendChild(starContainer);

for (let i = 0; i < 200; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.top = `${Math.random() * 100}vh`;
    star.style.left = `${Math.random() * 100}vw`;
    starContainer.appendChild(star);
}
// Wait for the crawl animation to complete
window.addEventListener('load', () => {
    setTimeout(() => {
        // Hide the loader screen and show the main content
        document.querySelector('.loader-screen').style.display = 'none';
        document.querySelector('.main-content').style.display = 'block';
    }, 10000); // Matches the total animation time
});
