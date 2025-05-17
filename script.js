document.addEventListener('DOMContentLoaded', function() {
 // Testimonial Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.testimonial-slide');
const dots = document.querySelectorAll('.testimonial-dot');

function showSlide(index) {
    // Hide all slides
    slides.forEach(slide => {
        slide.classList.remove('active', 'prev', 'next');
    });
    
    // Update dots
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Calculate previous and next indexes
    const prevIndex = (index - 1 + slides.length) % slides.length;
    const nextIndex = (index + 1) % slides.length;
    
    // Set classes for animation
    slides[prevIndex].classList.add('prev');
    slides[nextIndex].classList.add('next');
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    
    currentSlide = index;
}

function nextSlide() {
    showSlide((currentSlide + 1) % slides.length);
}

function prevSlide() {
    showSlide((currentSlide - 1 + slides.length) % slides.length);
}

// Dot navigation
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
    });
});

// Button navigation
document.querySelector('.testimonial-next').addEventListener('click', nextSlide);
document.querySelector('.testimonial-prev').addEventListener('click', prevSlide);

// Auto slide
let slideInterval = setInterval(nextSlide, 5000);

// Pause on hover
const slider = document.querySelector('.testimonial-slider');
slider.addEventListener('mouseenter', () => clearInterval(slideInterval));
slider.addEventListener('mouseleave', () => {
    slideInterval = setInterval(nextSlide, 5000);
});

// Initialize slider
showSlide(0);

  // ===== Modal Functionality =====
  const modal = document.getElementById('lessonModal');
  const modalCloseBtn = document.querySelector('.modal-close');
  const modalCloseBottomBtn = document.querySelector('.modal-close-bottom');
  
  function closeModal() {
    if (modal) {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    }
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (modalCloseBottomBtn) {
    modalCloseBottomBtn.addEventListener('click', closeModal);
  }

  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && modal && modal.style.display === 'block') {
      closeModal();
    }
  });


});

document.addEventListener('DOMContentLoaded', function() {
  // Burger menu functionality - only run if elements exist
  const burgerMenu = document.getElementById('burger-menu');
  const nav = document.getElementById('nav');
  
  if (burgerMenu && nav) {
    burgerMenu.addEventListener('click', e => {
      e.stopPropagation();
      nav.classList.toggle('active');
      burgerMenu.classList.toggle('active');
      document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking on nav links
    document.querySelectorAll('.nav-list a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('active');
        burgerMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', e => {
      if (!nav.contains(e.target) && !burgerMenu.contains(e.target)) {
        nav.classList.remove('active');
        burgerMenu.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // Touch-friendly interaction for clickable boxes - only run if elements exist
  const clickableBoxes = document.querySelectorAll('.j-box, .box');
  if (clickableBoxes.length > 0) {
    clickableBoxes.forEach(element => {
      element.style.cursor = 'pointer';
      element.addEventListener('click', e => {
        if (!e.target.closest('a')) {
          const link = element.querySelector('a');
          if (link) link.click();
        }
      });
    });
  }

  // Smooth scrolling for anchor links - only run if anchors exist
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  if (anchorLinks.length > 0) {
    anchorLinks.forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }
});

// Lesson content data
const lessons = {
  1: {
    title: "Introduction & Tools Setup",
    subtitle: "Get familiar with web development basics and set up your environment.",
    content: `
      <div class="lesson-content">
        <h4>What is a Website?</h4>
        <p>A website is a collection of web pages accessed through the internet. At its core, websites use three main technologies:</p>
        <ul>
          <li><strong>HTML</strong> - Provides structure and content</li>
          <li><strong>CSS</strong> - Controls styling and presentation</li>
          <li><strong>JavaScript</strong> - Adds interactivity</li>
        </ul>
        <h4>Setting Up Your Development Environment</h4>
        <p>To build websites, you'll need:</p>
        <ul>
          <li>A code editor (e.g., Visual Studio Code)</li>
          <li>Web browsers (Chrome, Firefox, or Edge)</li>
          <li>Developer tools (built into modern browsers)</li>
        </ul>
        <h4>Understanding File Structure</h4>
        <pre>
my-website/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
└── images/
    └── logo.png</pre>
        <h4>Key Takeaways</h4>
        <ul>
          <li>Websites are built with HTML, CSS, and JavaScript</li>
          <li>VS Code is an excellent free editor</li>
          <li>Organizing files is essential for maintainability</li>
          <li>Browser developer tools help debug and improve sites</li>
        </ul>
      </div>
      <div class="lesson-expectations">
        <h4>What to Expect</h4>
        <ul>
          <li><strong>Duration:</strong> 45 minutes</li>
          <li><strong>Resources:</strong> 3 downloadable files</li>
          <li><strong>Videos:</strong> 2 tutorial videos</li>
          <li><strong>Difficulty:</strong> Beginner</li>
          <li><strong>Topics Covered:</strong></li>
          <li>What is a website?</li>
          <li>Setting up VS Code</li>
          <li>Understanding file structure</li>
          <li>Essential web development tools</li>
        </ul>
      </div>
    `
  },
  2: {
    title: "HTML Basics",
    subtitle: "Learn the foundations of HTML and structure your first webpage.",
    content: `
      <div class="lesson-content">
        <h4>HTML Document Structure</h4>
        <p>Every HTML document follows this basic structure:</p>
        <pre>
&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;My First Webpage&lt;/title&gt;
    &lt;meta charset="UTF-8"&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;!-- Content goes here --&gt;
  &lt;/body&gt;
&lt;/html&gt;</pre>
        <h4>Text Elements</h4>
        <p>HTML offers various elements for structuring text:</p>
        <ul>
          <li><strong>Headings:</strong> &lt;h1&gt; through &lt;h6&gt;</li>
          <li><strong>Paragraphs:</strong> &lt;p&gt;</li>
          <li><strong>Formatting:</strong> &lt;strong&gt;, &lt;em&gt;, &lt;mark&gt;, etc.</li>
        </ul>
        <h4>Images and Links</h4>
        <p>Adding media and navigation:</p>
        <pre>
&lt;!-- Image --&gt;
&lt;img src="image.jpg" alt="Description of image"&gt;

&lt;!-- Link --&gt;
&lt;a href="https://example.com"&gt;Visit Example&lt;/a&gt;</pre>
        <h4>Lists and Tables</h4>
        <p>Organizing information:</p>
        <ul>
          <li><strong>Unordered lists:</strong> &lt;ul&gt; with &lt;li&gt; items</li>
          <li><strong>Ordered lists:</strong> &lt;ol&gt; with &lt;li&gt; items</li>
          <li><strong>Tables:</strong> &lt;table&gt;, &lt;tr&gt;, &lt;th&gt;, and &lt;td&gt;</li>
        </ul>
      </div>
      <div class="lesson-expectations">
        <h4>What to Expect</h4>
        <ul>
          <li><strong>Duration:</strong> 60 minutes</li>
          <li><strong>Resources:</strong> 4 downloadable files</li>
          <li><strong>Videos:</strong> 2 tutorial videos</li>
          <li><strong>Difficulty:</strong> Beginner</li>
          <li><strong>Topics Covered:</strong></li>
          <li>HTML document structure</li>
          <li>Headings, paragraphs, and text formatting</li>
          <li>Adding images and links</li>
          <li>Creating lists and tables</li>
        </ul>
      </div>
    `
  },
  3: {
    title: "CSS Basics",
    subtitle: "Add style and design to your webpage using CSS.",
    content: `
      <div class="lesson-content">
        <h4>CSS Syntax</h4>
        <p>CSS uses a selector and declaration block structure:</p>
        <pre>
selector {
  property: value;
  another-property: value;
}</pre>
        <h4>Selectors</h4>
        <p>Different ways to target HTML elements:</p>
        <ul>
          <li><strong>Element selectors:</strong> p { color: blue; }</li>
          <li><strong>Class selectors:</strong> .highlight { background-color: yellow; }</li>
          <li><strong>ID selectors:</strong> #header { font-size: 24px; }</li>
          <li><strong>Combinators:</strong> div > p { margin-left: 20px; }</li>
        </ul>
        <h4>Colors and Typography</h4>
        <p>Styling text content:</p>
        <pre>
body {
  color: #333333;
  font-family: Arial, sans-serif;
  font-size: 16px;
  line-height: 1.5;
}

h1 {
  color: #0066cc;
}</pre>
        <h4>Box Model</h4>
        <p>Every element in CSS has a box around it:</p>
        <ul>
          <li><strong>Content</strong> - The actual content of the box</li>
          <li><strong>Padding</strong> - Space around the content</li>
          <li><strong>Border</strong> - Line around the padding</li>
          <li><strong>Margin</strong> - Space around the border</li>
        </ul>
      </div>
      <div class="lesson-expectations">
        <h4>What to Expect</h4>
        <ul>
          <li><strong>Duration:</strong> 75 minutes</li>
          <li><strong>Resources:</strong> 5 downloadable files</li>
          <li><strong>Videos:</strong> 3 tutorial videos</li>
          <li><strong>Difficulty:</strong> Beginner-Intermediate</li>
          <li><strong>Topics Covered:</strong></li>
          <li>CSS syntax and selectors</li>
          <li>Colors, fonts, and text styling</li>
          <li>Box model and layout basics</li>
          <li>Class and ID selectors</li>
        </ul>
      </div>
    `
  },
  4: {
    title: "Responsive Design",
    subtitle: "Make your website look great on all devices.",
    content: `
      <div class="lesson-content">
        <h4>Mobile-First Design</h4>
        <p>Start by designing for mobile screens and then enhance for larger screens:</p>
        <ul>
          <li>Focus on content first</li>
          <li>Prioritize the most important elements</li>
          <li>Simplify navigation for small screens</li>
          <li>Enhance the design as screen space increases</li>
        </ul>
        <h4>Media Queries</h4>
        <p>Apply different styles based on device characteristics:</p>
        <pre>
/* Base styles for all devices */
body {
  font-size: 16px;
}

/* Styles for screens wider than 768px */
@media (min-width: 768px) {
  body {
    font-size: 18px;
  }
}

/* Styles for screens wider than 1200px */
@media (min-width: 1200px) {
  body {
    font-size: 20px;
  }
}</pre>
        <h4>Flexible Units</h4>
        <p>Use relative units instead of fixed pixels:</p>
        <ul>
          <li><strong>Percentages (%):</strong> Relative to parent element</li>
          <li><strong>em:</strong> Relative to parent's font size</li>
          <li><strong>rem:</strong> Relative to root element's font size</li>
          <li><strong>vw/vh:</strong> Relative to viewport width/height</li>
        </ul>
        <h4>Testing Techniques</h4>
        <p>Ensure your design works everywhere:</p>
        <ul>
          <li>Use browser developer tools to simulate different devices</li>
          <li>Test on actual phones and tablets when possible</li>
          <li>Check your site at different viewport widths</li>
          <li>Verify functionality works on touch screens</li>
        </ul>
      </div>
      <div class="lesson-expectations">
        <h4>What to Expect</h4>
        <ul>
          <li><strong>Duration:</strong> 90 minutes</li>
          <li><strong>Resources:</strong> 6 downloadable files</li>
          <li><strong>Videos:</strong> 3 tutorial videos</li>
          <li><strong>Difficulty:</strong> Intermediate</li>
          <li><strong>Topics Covered:</strong></li>
          <li>Mobile-first design principles</li>
          <li>Media queries for different screen sizes</li>
          <li>Flexible layouts and units</li>
          <li>Testing on multiple devices</li>
        </ul>
      </div>
    `
  },
  5: {
    title: "Adding Interactivity",
    subtitle: "Introduce basic JavaScript to make your site interactive.",
    content: `
      <div class="lesson-content">
        <h4>JavaScript Basics</h4>
        <p>JavaScript is a programming language that adds interactivity to your website:</p>
        <pre>
// Variables
let name = "John";
const age = 30;

// Functions
function greet() {
  return "Hello, " + name + "!";
}

// Output
console.log(greet()); // "Hello, John!"</pre>
        <h4>Event Handling</h4>
        <p>Responding to user interactions:</p>
        <pre>
// Get button element
const button = document.getElementById("myButton");

// Add click event listener
button.addEventListener("click", function() {
  alert("Button was clicked!");
});</pre>
        <h4>DOM Manipulation</h4>
        <p>Changing HTML elements dynamically:</p>
        <pre>
// Change text content
document.getElementById("demo").textContent = "New text";

// Change CSS styles
document.getElementById("demo").style.color = "blue";

// Create new elements
const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph";
document.body.appendChild(newParagraph);</pre>
        <h4>Common Interactive Features</h4>
        <ul>
          <li>Show/hide elements on click</li>
          <li>Form validation</li>
          <li>Image sliders and carousels</li>
          <li>Toggle navigation menus</li>
        </ul>
      </div>
      <div class="lesson-expectations">
        <h4>What to Expect</h4>
        <ul>
          <li><strong>Duration:</strong> 90 minutes</li>
          <li><strong>Resources:</strong> 5 downloadable files</li>
          <li><strong>Videos:</strong> 3 tutorial videos</li>
          <li><strong>Difficulty:</strong> Intermediate</li>
          <li><strong>Topics Covered:</strong></li>
          <li>JavaScript basics and syntax</li>
          <li>Handling click events</li>
          <li>Creating simple alerts and popups</li>
          <li>DOM manipulation basics</li>
        </ul>
      </div>
    `
  },
  6: {
    title: "Building a Full Landing Page",
    subtitle: "Combine everything you've learned to build a complete page.",
    content: `
      <div class="lesson-content">
        <h4>Planning Your Landing Page</h4>
        <p>Before writing code, plan your page structure:</p>
        <ul>
          <li>Define the purpose and main message</li>
          <li>Sketch the layout (header, sections, footer)</li>
          <li>Identify key elements (navigation, CTAs, etc.)</li>
          <li>Gather content and assets (text, images)</li>
        </ul>
        <h4>HTML Structure</h4>
        <p>Build the foundation of your landing page:</p>
        <pre>
&lt;header&gt;
  &lt;nav&gt;...&lt;/nav&gt;
&lt;/header&gt;

&lt;main&gt;
  &lt;section class="hero"&gt;...&lt;/section&gt;
  &lt;section class="features"&gt;...&lt;/section&gt;
  &lt;section class="testimonials"&gt;...&lt;/section&gt;
  &lt;section class="cta"&gt;...&lt;/section&gt;
&lt;/main&gt;

&lt;footer&gt;...&lt;/footer&gt;</pre>
        <h4>CSS Styling</h4>
        <p>Apply consistent styling throughout your page:</p>
        <ul>
          <li>Define a color scheme and typography system</li>
          <li>Create responsive layouts using flexbox or grid</li>
          <li>Add visual hierarchy to guide the user's eye</li>
          <li>Ensure contrast for readability and accessibility</li>
        </ul>
        <h4>JavaScript Interactions</h4>
        <p>Enhance your page with interactive elements:</p>
        <ul>
          <li>Mobile navigation toggle</li>
          <li>Smooth scrolling to page sections</li>
          <li>Form validation for contact or signup forms</li>
          <li>Modal windows for additional content</li>
        </ul>
      </div>
      <div class="lesson-expectations">
        <h4>What to Expect</h4>
        <ul>
          <li><strong>Duration:</strong> 105 minutes</li>
          <li><strong>Resources:</strong> 7 downloadable files</li>
          <li><strong>Videos:</strong> 4 tutorial videos</li>
          <li><strong>Difficulty:</strong> Intermediate-Advanced</li>
          <li><strong>Topics Covered:</strong></li>
          <li>Planning your landing page</li>
          <li>Building the HTML structure</li>
          <li>Applying CSS styling</li>
          <li>Adding JavaScript interactions</li>
        </ul>
      </div>
    `
  },
  7: {
    title: "Publishing Your Website",
    subtitle: "Launch your website and make it accessible to everyone.",
    content: `
      <div class="lesson-content">
        <h4>Web Hosting Basics</h4>
        <p>To make your website available online, you need:</p>
        <ul>
          <li><strong>Web hosting:</strong> Server space to store your website files</li>
          <li><strong>Domain name:</strong> The address users type to visit your site</li>
          <li><strong>DNS configuration:</strong> Connects your domain to your hosting</li>
        </ul>
        <h4>GitHub Pages Deployment</h4>
        <p>Free hosting for static websites through GitHub:</p>
        <ol>
          <li>Create a GitHub repository</li>
          <li>Upload your website files</li>
          <li>Go to repository Settings → Pages</li>
          <li>Set source branch to "main"</li>
          <li>Your site will be published at username.github.io/repository</li>
        </ol>
        <h4>Netlify Deployment</h4>
        <p>Another popular option with more features:</p>
        <ol>
          <li>Create a Netlify account</li>
          <li>Drag and drop your website folder to Netlify</li>
          <li>Or connect to your GitHub repository for continuous deployment</li>
          <li>Configure custom domain if desired</li>
        </ol>
        <h4>Next Steps After Launch</h4>
        <p>Once your site is live:</p>
        <ul>
          <li>Test your live site on different browsers and devices</li>
          <li>Share your website on social media</li>
          <li>Ask for feedback and make improvements</li>
          <li>Consider adding analytics to track visitor behavior</li>
        </ul>
      </div>
      <div class="lesson-expectations">
        <h4>What to Expect</h4>
        <ul>
          <li><strong>Duration:</strong> 60 minutes</li>
          <li><strong>Resources:</strong> 4 downloadable files</li>
          <li><strong>Videos:</strong> 2 tutorial videos</li>
          <li><strong>Difficulty:</strong> All levels</li>
          <li><strong>Topics Covered:</strong></li>
          <li>Understanding hosting and domains</li>
          <li>GitHub Pages deployment</li>
          <li>Netlify deployment alternative</li>
          <li>Sharing your website with the world</li>
        </ul>
      </div>
    `
  }
};


// Modal functionality
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('lessonModal');
  const modalLessonNumber = document.getElementById('modalLessonNumber');
  const modalLessonTitle = document.getElementById('modalLessonTitle');
  const modalLessonSubtitle = document.getElementById('modalLessonSubtitle');
  const modalLessonContent = document.getElementById('modalLessonContent');
  const markCompleteBtn = document.getElementById('markCompleteBtn');
  const goToLessonBtn = document.getElementById('goToLessonBtn');
  
  let completedLessons = JSON.parse(localStorage.getItem('completedLessons')) || [];
  
  document.querySelectorAll('.openModalBtn').forEach(btn => {
    const lessonNum = btn.getAttribute('data-lesson');
    if (completedLessons.includes(lessonNum)) {
      btn.classList.add('completed');
      btn.textContent = '✓ Completed';
    }
    btn.addEventListener('click', () => {
      const lesson = lessons[lessonNum];
      modalLessonNumber.textContent = lessonNum;
      modalLessonTitle.textContent = lesson.title;
      modalLessonSubtitle.textContent = lesson.subtitle;
      modalLessonContent.innerHTML = lesson.content;
      const isCompleted = completedLessons.includes(lessonNum);
      markCompleteBtn.textContent = isCompleted ? '✓ Completed' : 'Mark as Complete';
      markCompleteBtn.classList.toggle('completed', isCompleted);
      modal.style.display = 'block';
    });
  });
  
  markCompleteBtn.addEventListener('click', () => {
    const lessonNum = modalLessonNumber.textContent;
    if (!completedLessons.includes(lessonNum)) {
      completedLessons.push(lessonNum);
      localStorage.setItem('completedLessons', JSON.stringify(completedLessons));
      markCompleteBtn.textContent = '✓ Completed';
      markCompleteBtn.classList.add('completed');
      const lessonBtn = document.querySelector(`.openModalBtn[data-lesson="${lessonNum}"]`);
      if (lessonBtn) {
        lessonBtn.classList.add('completed');
        lessonBtn.textContent = '✓ Completed';
      }
    }
  });
  
  // Close modal handlers
  document.querySelector('.close').addEventListener('click', () => modal.style.display = 'none');
  window.addEventListener('click', e => { if(e.target === modal) modal.style.display = 'none'; });
  
  // Placeholder Go To Lesson
  goToLessonBtn.addEventListener('click', () => {
    alert(`Redirecting to full lesson ${modalLessonNumber.textContent} page...`);
  });
});


// Lesson content data - (Keep your existing lessons object here as is)

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('lessonModal');
  const modalLessonNumber = document.getElementById('modalLessonNumber');
  const modalLessonTitle = document.getElementById('modalLessonTitle');
  const modalLessonSubtitle = document.getElementById('modalLessonSubtitle');
  const modalLessonContent = document.getElementById('modalLessonContent');
  const markCompleteBtn = document.getElementById('markCompleteBtn');
  const goToLessonBtn = document.getElementById('goToLessonBtn');
  const modalCloseBottomBtn = document.getElementById('modalCloseBottomBtn');
  const modalCloseX = modal.querySelector('.close');

  let completedLessons = JSON.parse(localStorage.getItem('completedLessons')) || [];

  // Update Mark Complete Button UI
  function updateMarkCompleteButton(lessonNum) {
    const isCompleted = completedLessons.includes(lessonNum);
    markCompleteBtn.textContent = isCompleted ? '✓ Completed' : 'Mark as Complete';
    markCompleteBtn.classList.toggle('completed', isCompleted);
    markCompleteBtn.setAttribute('aria-pressed', isCompleted);
  }

  // Open modal when any lesson preview button is clicked
  document.querySelectorAll('.openModalBtn').forEach(btn => {
    const lessonNum = btn.getAttribute('data-lesson');
    // Update lesson preview button to show completed status if relevant
    if (completedLessons.includes(lessonNum)) {
      btn.classList.add('completed');
      btn.textContent = '✓ Completed';
    }
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const lesson = lessons[lessonNum];
      modalLessonNumber.textContent = lessonNum;
      modalLessonTitle.textContent = lesson.title;
      modalLessonSubtitle.textContent = lesson.subtitle;
      modalLessonContent.innerHTML = lesson.content;

      updateMarkCompleteButton(lessonNum);
      modal.style.display = 'block';
      markCompleteBtn.focus();
    });
  });

  // Toggle complete/uncomplete lesson
  markCompleteBtn.addEventListener('click', () => {
    const lessonNum = modalLessonNumber.textContent;
    const index = completedLessons.indexOf(lessonNum);
    if (index === -1) {
      completedLessons.push(lessonNum);
    } else {
      completedLessons.splice(index, 1);
    }
    localStorage.setItem('completedLessons', JSON.stringify(completedLessons));

    updateMarkCompleteButton(lessonNum);

    // Update preview button in main UI:
    const lessonBtn = document.querySelector(`.openModalBtn[data-lesson="${lessonNum}"]`);
    if (lessonBtn) {
      if (completedLessons.includes(lessonNum)) {
        lessonBtn.classList.add('completed');
        lessonBtn.textContent = '✓ Completed';
      } else {
        lessonBtn.classList.remove('completed');
        lessonBtn.textContent = 'Preview';
      }
    }
  });

  // Go to full lesson placeholder
  goToLessonBtn.addEventListener('click', () => {
    const lessonNum = modalLessonNumber.textContent;
    alert(`Redirecting to full lesson ${lessonNum} page...`);
  });

  // Close modal by X or bottom button
  function closeModal() {
    modal.style.display = 'none';
  }
  modalCloseX.addEventListener('click', closeModal);
  modalCloseBottomBtn.addEventListener('click', closeModal);

  // Close modal when clicking outside the modal content
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
});

// Enhanced Comment System
document.getElementById('comment-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('comment-name').value.trim();
    const text = document.getElementById('comment-text').value.trim();
    
    if (name && text) {
        const timestamp = new Date().toLocaleString();
        addComment({
            name,
            text,
            timestamp,
            avatar: getRandomAvatar() // Add random avatar
        });
        this.reset();
        saveComments();
    }
});

function getRandomAvatar() {
    const avatars = [
        'fas fa-user-graduate',    // student
        'fas fa-user-tie',         // professional
        'fas fa-user-astronaut',   // fun
        'fas fa-user-ninja',       // playful
        'fas fa-user-secret',      // mystery
        'fas fa-user-md',          // doctor
        'fas fa-user-crown',       // VIP
        'fas fa-user-robot'        // techy
    ];
    return avatars[Math.floor(Math.random() * avatars.length)];
}

function addComment(comment) {
    const commentsList = document.getElementById('comments-list');
    const commentDiv = document.createElement('div');
    commentDiv.className = 'comment-item';
    
    // Generate random color for avatar background
    const colors = ['#4f46e5', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    commentDiv.innerHTML = `
        <div class="comment-avatar" style="background-color: ${randomColor}">
            <i class="${comment.avatar}"></i>
        </div>
        <div class="comment-content">
            <div class="comment-header">
                <h4 class="comment-author">${comment.name}</h4>
                <span class="comment-date">${formatDate(comment.timestamp)}</span>
                <div class="comment-rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
            </div>
            <div class="comment-text">
                <p>${comment.text}</p>
            </div>
            <div class="comment-actions">
                <button class="btn-like"><i class="far fa-thumbs-up"></i> Like</button>
                <button class="btn-reply"><i class="far fa-comment-dots"></i> Reply</button>
            </div>
        </div>
    `;
    
    commentsList.prepend(commentDiv);
    
    // Add event listeners for the new buttons
    commentDiv.querySelector('.btn-like').addEventListener('click', function() {
        this.classList.toggle('liked');
        this.innerHTML = this.classList.contains('liked') ? 
            '<i class="fas fa-thumbs-up"></i> Liked' : 
            '<i class="far fa-thumbs-up"></i> Like';
    });
    
    commentDiv.querySelector('.btn-reply').addEventListener('click', function() {
        alert('Reply functionality would go here!');
    });
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric', 
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

function saveComments() {
    const comments = [];
    document.querySelectorAll('.comment-item').forEach(comment => {
        comments.push({
            name: comment.querySelector('.comment-author').textContent,
            text: comment.querySelector('.comment-text p').textContent,
            timestamp: comment.querySelector('.comment-date').textContent,
            avatar: comment.querySelector('.comment-avatar i').className
        });
    });
    localStorage.setItem('website-comments', JSON.stringify(comments));
}

function loadComments() {
    const savedComments = JSON.parse(localStorage.getItem('website-comments')) || [];
    savedComments.forEach(comment => {
        addComment(comment);
    });
}

// Load comments when page loads
window.addEventListener('DOMContentLoaded', loadComments);





