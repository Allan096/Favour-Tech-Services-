// Initialize AOS Animation
AOS.init({
  duration: 1000,
  once: true,
  offset: 100
});

// ========== EMERGENCY BANNER CLOSE ==========
const closeEmergency = document.getElementById('closeEmergency');
if (closeEmergency) {
  closeEmergency.addEventListener('click', () => {
    document.getElementById('emergencyBanner').style.display = 'none';
  });
}

// ========== LIVE SUPPORT QUEUE ==========
let queuePosition = 3;
const queuePositionElem = document.getElementById('queuePosition');
const queueWaitTimeElem = document.getElementById('queueWaitTime');
const queueBar = document.getElementById('queueBar');
const joinQueueBtn = document.getElementById('joinQueueBtn');

if (joinQueueBtn) {
  joinQueueBtn.addEventListener('click', () => {
    queuePosition = Math.floor(Math.random() * 8) + 1;
    queuePositionElem.textContent = queuePosition;
    const waitMin = queuePosition * 2;
    queueWaitTimeElem.textContent = `${waitMin}-${waitMin + 3}`;
    queueBar.style.width = `${Math.max(10, 100 - queuePosition * 10)}%`;
    alert(`✅ You've joined the queue! Position: ${queuePosition}. Estimated wait: ${waitMin}-${waitMin + 3} minutes. We'll notify you!`);
  });
}

// ========== AI SERVICE FINDER ==========
const aiSearchBtn = document.getElementById('aiSearchBtn');
const aiSearchInput = document.getElementById('aiSearchInput');
const aiResults = document.getElementById('aiResults');

const serviceDatabase = {
  'kra pin': 'KRA PIN Application - Get your PIN in 24-48 hours. Cost: KES 500',
  'kra': 'KRA Services - PIN, Returns, Amnesty. Call 0786633967',
  'returns': 'KRA Nil Returns Filing - KES 1,000. Includes consultation',
  'passport': 'Passport Application - Processed via E-Citizen. 7-14 days. KES 2,500',
  'ntsa license': 'NTSA Driving License - New & renewal. KES 1,500',
  'ntsa': 'NTSA Services - Driving License, Logbook, TIMS Support',
  'helb': 'HELB Loan Application - KES 1,000. Includes form filling',
  'business cards': 'Business Card Design - 500 cards starting at KES 2,500',
  'design': 'Design Services - Business cards, posters, flyers, branding',
  'sha': 'SHA Registration - Social Health Authority. KES 500',
  'tsc': 'TSC Application - Teachers Service Commission. KES 1,000',
  'ecitizen': 'E-Citizen Services - Passport, Good Conduct, Account opening'
};

if (aiSearchBtn) {
  aiSearchBtn.addEventListener('click', () => {
    const query = aiSearchInput.value.toLowerCase().trim();
    let result = 'No matching service found. Please call 0786633967 for assistance.';
    
    for (const [key, value] of Object.entries(serviceDatabase)) {
      if (query.includes(key)) {
        result = value;
        break;
      }
    }
    
    aiResults.innerHTML = `<div class="ai-result-card" style="background:rgba(255,255,255,0.2); padding:1rem; border-radius:0.5rem;">🤖 <strong>Recommended Service:</strong><br>${result}<br><a href="#" class="btn-small" style="display:inline-block; margin-top:0.5rem; color:#ffd966;">Get Started →</a></div>`;
  });
}

// ========== ONLINE AGENTS COUNTER ==========
let onlineAgents = 8;
setInterval(() => {
  onlineAgents = Math.floor(Math.random() * 5) + 6;
  const agentsElem = document.getElementById('onlineAgentsTop');
  if (agentsElem) agentsElem.textContent = onlineAgents;
}, 30000);

// ========== PORTFOLIO LIGHTBOX GALLERY ==========
const viewButtons = document.querySelectorAll('.view-project');
const lightbox = document.getElementById('lightboxModal');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClient = document.getElementById('lightboxClient');
const lightboxDesc = document.getElementById('lightboxDesc');
let currentIndex = 0;
const images = [];

viewButtons.forEach((btn, index) => {
  const imgSrc = btn.getAttribute('data-img');
  const client = btn.getAttribute('data-client');
  const desc = btn.getAttribute('data-desc');
  images.push({ src: imgSrc, client, desc });
  
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    currentIndex = index;
    updateLightbox();
    lightbox.classList.add('active');
  });
});

function updateLightbox() {
  if (images[currentIndex]) {
    lightboxImg.src = images[currentIndex].src;
    if (lightboxClient) lightboxClient.textContent = images[currentIndex].client;
    if (lightboxDesc) lightboxDesc.textContent = images[currentIndex].desc;
  }
}

const closeLightbox = document.querySelector('.close-lightbox');
if (closeLightbox) {
  closeLightbox.addEventListener('click', () => {
    lightbox.classList.remove('active');
  });
}

const prevBtn = document.querySelector('.lightbox-prev');
const nextBtn = document.querySelector('.lightbox-next');

if (prevBtn) {
  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateLightbox();
  });
}

if (nextBtn) {
  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateLightbox();
  });
}

// Close lightbox on click outside
if (lightbox) {
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove('active');
    }
  });
}

// Download Sample Button
const downloadSampleBtn = document.getElementById('downloadSampleBtn');
if (downloadSampleBtn) {
  downloadSampleBtn.addEventListener('click', () => {
    alert('📥 Sample design files will be sent to your email. Please call 0786633967 or leave your email in chat!');
  });
}

// ========== TEMPLATE MODAL ==========
const templateModal = document.getElementById('templateModal');
const templateContent = document.getElementById('templateContent');
const viewTemplateBtns = document.querySelectorAll('.view-template');
const closeTemplate = document.querySelector('.close-template');

if (viewTemplateBtns.length) {
  viewTemplateBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const template = btn.getAttribute('data-template');
      let content = '';
      
      if (template === 'kra') {
        content = `
          <h3>📄 KRA PIN Certificate Sample</h3>
          <img src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=500&h=300&fit=crop" style="width:100%; border-radius:0.5rem; margin:1rem 0;">
          <p><strong>Sample KRA PIN Certificate includes:</strong></p>
          <ul>
            <li>Your full name and ID number</li>
            <li>Unique KRA PIN (e.g., A001234567Z)</li>
            <li>Certificate issue date</li>
            <li>Official KRA stamp and signature</li>
          </ul>
          <button class="btn-primary" onclick="alert('Download started! Check your email for the sample.')">Download Sample PDF</button>
        `;
      } else if (template === 'passport') {
        content = `
          <h3>📸 Passport Photo Requirements</h3>
          <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&h=300&fit=crop" style="width:100%; border-radius:0.5rem; margin:1rem 0;">
          <p><strong>Official Passport Photo Guidelines:</strong></p>
          <ul>
            <li>White or light grey background</li>
            <li>Size: 2x2 inches (51x51 mm)</li>
            <li>Neutral facial expression, mouth closed</li>
            <li>Both ears must be visible</li>
            <li>No glasses, hats, or head coverings</li>
            <li>Recent photo (within 6 months)</li>
          </ul>
          <button class="btn-primary" onclick="alert('Photo requirements guide sent to your email!')">Download Guide</button>
        `;
      } else if (template === 'business') {
        content = `
          <h3>💳 Business Card Templates</h3>
          <div style="display:grid; grid-template-columns:repeat(2,1fr); gap:1rem; margin:1rem 0;">
            <img src="https://images.unsplash.com/photo-1586788224331-947f68671cf1?w=250&h=150&fit=crop" style="border-radius:0.5rem;">
            <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=250&h=150&fit=crop" style="border-radius:0.5rem;">
            <img src="https://images.unsplash.com/photo-1586333076847-7a8fc9f3a6f4?w=250&h=150&fit=crop" style="border-radius:0.5rem;">
            <img src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=250&h=150&fit=crop" style="border-radius:0.5rem;">
          </div>
          <p><strong>10+ Professional Templates Available:</strong></p>
          <ul>
            <li>Modern Minimalist</li>
            <li>Luxury Gold Foil</li>
            <li>Creative Artistic</li>
            <li>Corporate Professional</li>
          </ul>
          <button class="btn-primary" onclick="alert('Template catalog sent to your email! Call 0786633967 for custom designs.')">Request Template Catalog</button>
        `;
      }
      
      if (templateContent) templateContent.innerHTML = content;
      if (templateModal) templateModal.style.display = 'block';
    });
  });
}

if (closeTemplate) {
  closeTemplate.addEventListener('click', () => {
    if (templateModal) templateModal.style.display = 'none';
  });
}

if (templateModal) {
  templateModal.addEventListener('click', (e) => {
    if (e.target === templateModal) {
      templateModal.style.display = 'none';
    }
  });
}

// ========== BUTTON HANDLERS ==========
const getStartedBtn = document.getElementById('getStartedBtn');
if (getStartedBtn) {
  getStartedBtn.addEventListener('click', (e) => {
    e.preventDefault();
    alert("🚀 Welcome to Favour Tech Service!\n\nHow can we help you today?\n\n✓ KRA PIN & Tax Filing\n✓ Passport & E-Citizen\n✓ NTSA Driving License\n✓ SHA Registration\n✓ Business Cards & Design\n✓ HELB, KUCCPS & TSC\n\nCall or WhatsApp us: 0786633967");
  });
}

const whatsappHeroBtn = document.getElementById('whatsappHeroBtn');
if (whatsappHeroBtn) {
  whatsappHeroBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.open('https://wa.me/254786633967?text=Hi!%20I%20need%20assistance%20with%20KRA/E-Citizen/NTSA/SHA%20services', '_blank');
  });
}

const mpesaBtn = document.getElementById('mpesaBtn');
if (mpesaBtn) {
  mpesaBtn.addEventListener('click', () => {
    alert("💚 M-Pesa Express\n\nPay Bill: 789654\nAccount: Your Phone Number\nAmount: KES 500 - 5000\n\nYou'll receive a confirmation STK push. Thank you for choosing Favour Tech Service!");
  });
}

const callBtn = document.getElementById('callBtn');
if (callBtn) {
  callBtn.addEventListener('click', () => {
    window.location.href = 'tel:0786633967';
  });
}

const chatBtn = document.getElementById('chatBtn');
if (chatBtn) {
  chatBtn.addEventListener('click', () => {
    alert("💬 Live Chat\n\nHi there! 👋\n\nHow can we help you today?\n\n✓ KRA PIN Application & Tax Filing\n✓ Passport & E-Citizen Services\n✓ NTSA Driving License & Logbook\n✓ SHA Registration (Social Health Authority)\n✓ Business Cards, Posters & Flyers Design\n✓ HELB, KUCCPS & TSC Applications\n\nWhatsApp us: 0786633967\n\nWe respond within minutes!");
  });
}

// ========== SCROLL ANIMATIONS ==========
const animateOnScroll = function() {
  const elements = document.querySelectorAll('.service-card, .help-card, .person-card, .team-member, .design-item, .feature, .logo-card, .ntsa-image-container, .sha-image-container, .promo-card, .achievement-card, .portfolio-item, .template-card');
  
  elements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;
    
    if (elementPosition < screenPosition - 50) {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }
  });
};

const animatedElements = document.querySelectorAll('.service-card, .help-card, .person-card, .team-member, .design-item, .feature, .logo-card, .ntsa-image-container, .sha-image-container, .promo-card, .achievement-card, .portfolio-item, .template-card');
animatedElements.forEach(element => {
  element.style.opacity = '0';
  element.style.transform = 'translateY(30px)';
  element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});

window.addEventListener('scroll', animateOnScroll);
animateOnScroll();

// ========== SMOOTH SCROLLING ==========
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    if (href && href !== '#') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});

// ========== IMAGE ERROR HANDLING ==========
const images = document.querySelectorAll('img');
images.forEach(img => {
  img.addEventListener('error', function() {
    console.log('Image failed to load:', this.src);
  });
});

// ========== FOOTER YEAR ==========
const footer = document.querySelector('footer');
if (footer) {
  const yearSpan = document.createElement('span');
  yearSpan.style.display = 'block';
  yearSpan.style.fontSize = '0.7rem';
  yearSpan.style.marginTop = '0.5rem';
  yearSpan.style.opacity = '0.6';
  yearSpan.innerHTML = `© ${new Date().getFullYear()} Favour Tech Service. All rights reserved.`;
  footer.appendChild(yearSpan);
}

console.log('Favour Tech Service website loaded with all features!');