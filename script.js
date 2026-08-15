/* =========================================================
   LUXESTAY — APPLICATION SCRIPT
   Sections: 1. Data  2. Rendering  3. Search  4. Modals
   5. Hotel Details  6. Booking  7. Auth  8. Contact/Newsletter
   9. Nav / Utilities
========================================================= */

/* ============ 1. SAMPLE HOTEL DATA ============ */
const HOTELS = [
  {
    id: 1,
    name: "The Amberleigh Grand",
    location: "Paris, France",
    rating: 5,
    price: 320,
    tag: "Editor's Pick",
    desc: "A Belle Époque landmark reborn as a modern icon, moments from the Champs-Élysées.",
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1615460549969-36fa19521a4f?q=80&w=900&auto=format&fit=crop"
    ],
    facilities: ["Spa & Wellness", "Rooftop Pool", "Michelin Dining", "Valet Parking", "Free WiFi", "Concierge"],
    rooms: [
      { name: "Deluxe Room", price: 320, capacity: "2 Guests" },
      { name: "Junior Suite", price: 460, capacity: "3 Guests" },
      { name: "Grand Suite", price: 690, capacity: "4 Guests" }
    ]
  },
  {
    id: 2,
    name: "Azure Cliff Resort",
    location: "Santorini, Greece",
    rating: 5,
    price: 410,
    tag: "Sea View",
    desc: "Whitewashed suites carved into the caldera, each with a private infinity plunge pool.",
    images: [
      "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?q=80&w=900&auto=format&fit=crop"
    ],
    facilities: ["Private Pools", "Sunset Terrace", "Spa & Wellness", "Fine Dining", "Airport Transfer", "Free WiFi"],
    rooms: [
      { name: "Caldera View Room", price: 410, capacity: "2 Guests" },
      { name: "Honeymoon Suite w/ Pool", price: 590, capacity: "2 Guests" },
      { name: "Family Villa", price: 780, capacity: "5 Guests" }
    ]
  },
  {
    id: 3,
    name: "Marrakech Riad Noor",
    location: "Marrakech, Morocco",
    rating: 4,
    price: 175,
    tag: "Boutique",
    desc: "A restored 19th-century riad with a citrus courtyard, ten minutes from the souks.",
    images: [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1553603227-2358aabe821e?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=900&auto=format&fit=crop"
    ],
    facilities: ["Courtyard Pool", "Rooftop Lounge", "Hammam Spa", "Free WiFi", "Airport Transfer", "Breakfast Included"],
    rooms: [
      { name: "Courtyard Room", price: 175, capacity: "2 Guests" },
      { name: "Terrace Suite", price: 240, capacity: "3 Guests" }
    ]
  },
  {
    id: 4,
    name: "Kyoto Zen Pavilion",
    location: "Kyoto, Japan",
    rating: 5,
    price: 385,
    tag: "New",
    desc: "Minimalist ryokan-inspired suites overlooking a private maple garden and onsen.",
    images: [
      "https://images.unsplash.com/photo-1545158535-c3f7168c28b6?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517840901100-8179e982acb7?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?q=80&w=900&auto=format&fit=crop"
    ],
    facilities: ["Private Onsen", "Tea Ceremony Room", "Zen Garden", "Fine Dining", "Free WiFi", "Bicycle Rental"],
    rooms: [
      { name: "Garden Room", price: 385, capacity: "2 Guests" },
      { name: "Onsen Suite", price: 520, capacity: "2 Guests" }
    ]
  },
  {
    id: 5,
    name: "Lahore Heritage Manor",
    location: "Lahore, Pakistan",
    rating: 4,
    price: 130,
    tag: "Boutique",
    desc: "A restored colonial-era mansion in Gulberg, blending Mughal detailing with modern comfort.",
    images: [
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=900&auto=format&fit=crop"
    ],
    facilities: ["Garden Courtyard", "Fine Dining", "Free WiFi", "Fitness Studio", "Airport Transfer", "24/7 Room Service"],
    rooms: [
      { name: "Heritage Room", price: 130, capacity: "2 Guests" },
      { name: "Mughal Suite", price: 190, capacity: "3 Guests" },
      { name: "Presidential Suite", price: 320, capacity: "4 Guests" }
    ]
  },
  {
    id: 6,
    name: "Maldives Overwater Escape",
    location: "Malé, Maldives",
    rating: 5,
    price: 650,
    tag: "Luxury",
    desc: "Glass-floor overwater villas above a private reef lagoon, accessible by seaplane.",
    images: [
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1439066615861-d1af74d74000?q=80&w=900&auto=format&fit=crop"
    ],
    facilities: ["Private Deck & Ladder", "Snorkeling", "Spa & Wellness", "Fine Dining", "Free WiFi", "Seaplane Transfer"],
    rooms: [
      { name: "Overwater Villa", price: 650, capacity: "2 Guests" },
      { name: "Two-Bedroom Villa", price: 980, capacity: "4 Guests" }
    ]
  }
];

/* Registered users, kept in memory for this session (no backend) */
const USERS = [];
let bookingCounter = 1000;

/* ============ 2. RENDERING ============ */
function starString(n){ return "★".repeat(n) + "☆".repeat(5 - n); }

function hotelCardHTML(hotel){
  return `
  <article class="hotel-card" data-id="${hotel.id}">
    <div class="hotel-img">
      <img src="${hotel.images[0]}" alt="${hotel.name}">
      <span class="hotel-badge">${hotel.tag}</span>
      <span class="hotel-price-tag">$${hotel.price}<span> /night</span></span>
    </div>
    <div class="hotel-body">
      <div class="hotel-top">
        <div>
          <h3>${hotel.name}</h3>
          <p class="hotel-loc">📍 ${hotel.location}</p>
        </div>
        <div class="hotel-rating">${starString(hotel.rating)}</div>
      </div>
      <p class="hotel-desc">${hotel.desc}</p>
      <div class="hotel-actions">
        <button class="btn btn-outline view-details-btn" data-id="${hotel.id}">View Details</button>
        <button class="btn btn-gold book-now-btn" data-id="${hotel.id}">Book Now</button>
      </div>
    </div>
  </article>`;
}

function renderHotels(list){
  const grid = document.getElementById("hotelGrid");
  if(!list.length){
    grid.innerHTML = `<p style="grid-column:1/-1; text-align:center; color:var(--muted);">No hotels matched your search. Try a different destination.</p>`;
    return;
  }
  grid.innerHTML = list.map(hotelCardHTML).join("");
}

function renderRooms(){
  const grid = document.getElementById("roomGrid");
  let html = "";
  HOTELS.forEach(hotel=>{
    hotel.rooms.forEach(room=>{
      html += `
      <div class="room-card" data-hotel="${hotel.id}">
        <p class="room-hotel">${hotel.name} · ${hotel.location}</p>
        <h4>${room.name}</h4>
        <p style="color:var(--muted); font-size:0.85rem;">Fits ${room.capacity}</p>
        <div class="room-meta">
          <span class="room-price">$${room.price}<span style="font-family:var(--font-body); font-size:0.75rem; color:var(--muted);"> /night</span></span>
          <button class="btn btn-outline book-room-btn" data-id="${hotel.id}" style="padding:8px 16px; font-size:0.76rem;">Book</button>
        </div>
      </div>`;
    });
  });
  grid.innerHTML = html;
}

/* ============ 3. SEARCH ============ */
const searchForm = document.getElementById("searchForm");
const searchStatus = document.getElementById("searchStatus");

searchForm.addEventListener("submit", function(e){
  e.preventDefault();
  const destination = document.getElementById("destination").value.trim().toLowerCase();
  const checkin = document.getElementById("checkin").value;
  const checkout = document.getElementById("checkout").value;
  const guests = document.getElementById("guests").value;

  if(checkin && checkout && new Date(checkout) <= new Date(checkin)){
    showToast("Check-out date must be after check-in date.");
    return;
  }

  let results = HOTELS;
  if(destination){
    results = HOTELS.filter(h =>
      h.name.toLowerCase().includes(destination) ||
      h.location.toLowerCase().includes(destination)
    );
  }

  renderHotels(results);

  searchStatus.classList.add("show");
  if(destination && results.length){
    searchStatus.textContent = `Found ${results.length} hotel${results.length>1?"s":""} matching "${document.getElementById("destination").value}" for ${guests} guest${guests>1?"s":""}.`;
  }else if(destination && !results.length){
    searchStatus.textContent = `No hotels found for "${document.getElementById("destination").value}". Showing tips: try searching by city, e.g. "Paris" or "Kyoto".`;
  }else{
    searchStatus.textContent = `Showing all ${results.length} available hotels.`;
  }

  document.getElementById("hotels").scrollIntoView({ behavior: "smooth" });
});

/* ============ 4. MODAL UTILITIES ============ */
function openModal(id){
  document.getElementById(id).classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeModal(id){
  document.getElementById(id).classList.remove("open");
  document.body.style.overflow = "";
}
document.querySelectorAll("[data-close]").forEach(btn=>{
  btn.addEventListener("click", ()=> closeModal(btn.dataset.close));
});
document.querySelectorAll(".modal-overlay").forEach(overlay=>{
  overlay.addEventListener("click", (e)=>{
    if(e.target === overlay) closeModal(overlay.id);
  });
});
document.addEventListener("keydown", (e)=>{
  if(e.key === "Escape"){
    document.querySelectorAll(".modal-overlay.open").forEach(m=> closeModal(m.id));
  }
});

/* ============ 5. HOTEL DETAILS ============ */
function openDetails(hotelId){
  const hotel = HOTELS.find(h => h.id === Number(hotelId));
  if(!hotel) return;

  const content = document.getElementById("detailsContent");
  content.innerHTML = `
    <div class="details-hero">
      <img src="${hotel.images[0]}" alt="${hotel.name}">
      <div class="details-hero-veil"></div>
      <div class="details-hero-info">
        <h2>${hotel.name}</h2>
        <p>📍 ${hotel.location} &nbsp;·&nbsp; ${starString(hotel.rating)}</p>
      </div>
    </div>
    <div class="details-thumbs">
      ${hotel.images.map(img => `<img src="${img}" alt="${hotel.name} photo">`).join("")}
    </div>
    <div class="details-body">
      <p class="desc">${hotel.desc} Guests consistently highlight the attentive staff, immaculate rooms, and prime location as reasons to return.</p>
      <div class="details-cols">
        <div>
          <h4>Facilities</h4>
          <ul>${hotel.facilities.map(f => `<li>${f} <span>✓</span></li>`).join("")}</ul>
        </div>
        <div>
          <h4>Room Types</h4>
          <ul>${hotel.rooms.map(r => `<li>${r.name} (${r.capacity}) <span>$${r.price}/night</span></li>`).join("")}</ul>
        </div>
      </div>
      <div class="details-footer">
        <div class="details-price">$${hotel.price}<span> / night, starting from</span></div>
        <button class="btn btn-gold book-now-btn" data-id="${hotel.id}">Book Now</button>
      </div>
    </div>
  `;
  openModal("detailsModal");
}

/* ============ 6. BOOKING SYSTEM ============ */
function openBooking(hotelId){
  const hotel = HOTELS.find(h => h.id === Number(hotelId));
  if(!hotel) return;

  document.getElementById("bookingHotelId").value = hotel.id;
  document.getElementById("bookingHotelName").textContent = `${hotel.name} — ${hotel.location} · from $${hotel.price}/night`;
  document.getElementById("bookingForm").reset();
  document.getElementById("bookingHotelId").value = hotel.id;
  clearErrors("bookingForm");
  updateBookingSummary();
  closeModal("detailsModal");
  openModal("bookingModal");
}

function updateBookingSummary(){
  const hotelId = Number(document.getElementById("bookingHotelId").value);
  const hotel = HOTELS.find(h => h.id === hotelId);
  const checkin = document.getElementById("bCheckin").value;
  const checkout = document.getElementById("bCheckout").value;
  const rooms = Number(document.getElementById("bRooms").value) || 1;
  const summary = document.getElementById("bookingSummary");

  if(!hotel || !checkin || !checkout || new Date(checkout) <= new Date(checkin)){
    summary.innerHTML = `<span>Select valid check-in and check-out dates to see your total.</span>`;
    return;
  }

  const nights = Math.round((new Date(checkout) - new Date(checkin)) / 86400000);
  const total = nights * rooms * hotel.price;

  summary.innerHTML = `
    <span>${nights} night${nights>1?"s":""} × ${rooms} room${rooms>1?"s":""} × $${hotel.price}/night</span>
    <span class="total">Total: $${total.toLocaleString()}</span>
  `;
}
["bCheckin","bCheckout","bRooms"].forEach(id=>{
  document.getElementById(id).addEventListener("change", updateBookingSummary);
});

const bookingForm = document.getElementById("bookingForm");
bookingForm.addEventListener("submit", function(e){
  e.preventDefault();
  clearErrors("bookingForm");

  const hotelId = Number(document.getElementById("bookingHotelId").value);
  const hotel = HOTELS.find(h => h.id === hotelId);
  const name = document.getElementById("bName").value.trim();
  const email = document.getElementById("bEmail").value.trim();
  const phone = document.getElementById("bPhone").value.trim();
  const checkin = document.getElementById("bCheckin").value;
  const checkout = document.getElementById("bCheckout").value;
  const guests = document.getElementById("bGuests").value;
  const rooms = Number(document.getElementById("bRooms").value);

  let valid = true;

  if(name.length < 2){ setError("bName", "Please enter your full name."); valid = false; }
  if(!validateEmail(email)){ setError("bEmail", "Please enter a valid email address."); valid = false; }
  if(!validatePhone(phone)){ setError("bPhone", "Please enter a valid phone number."); valid = false; }
  if(!checkin){ setError("bCheckin", "Check-in date is required."); valid = false; }
  if(!checkout){ setError("bCheckout", "Check-out date is required."); valid = false; }
  if(checkin && checkout && new Date(checkout) <= new Date(checkin)){
    setError("bCheckout", "Must be after check-in date.");
    valid = false;
  }

  if(!valid) return;

  const nights = Math.round((new Date(checkout) - new Date(checkin)) / 86400000);
  const total = nights * rooms * hotel.price;
  bookingCounter++;
  const bookingId = "LX-" + bookingCounter;

  const confirmContent = document.getElementById("confirmContent");
  confirmContent.innerHTML = `
    <div class="confirm-icon">✓</div>
    <h3>Booking Confirmed</h3>
    <p class="sub">A confirmation has been sent to ${email}.</p>
    <div class="confirm-details">
      <div class="row"><span>Hotel</span><strong>${hotel.name}</strong></div>
      <div class="row"><span>Guest Name</span><strong>${name}</strong></div>
      <div class="row"><span>Check-in</span><strong>${formatDate(checkin)}</strong></div>
      <div class="row"><span>Check-out</span><strong>${formatDate(checkout)}</strong></div>
      <div class="row"><span>Guests / Rooms</span><strong>${guests} guests, ${rooms} room${rooms>1?"s":""}</strong></div>
      <div class="row"><span>Nights</span><strong>${nights}</strong></div>
      <div class="row total"><span>Total Price</span><strong>$${total.toLocaleString()}</strong></div>
    </div>
    <p class="confirm-id">Booking Reference: ${bookingId}</p>
  `;

  closeModal("bookingModal");
  openModal("confirmModal");
  showToast("Booking confirmed successfully!");
});

/* ============ 7. AUTH: LOGIN / SIGNUP ============ */
const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", function(e){
  e.preventDefault();
  clearErrors("loginForm");

  const email = document.getElementById("lEmail").value.trim();
  const password = document.getElementById("lPassword").value;
  let valid = true;

  if(!validateEmail(email)){ setError("lEmail", "Enter a valid email address."); valid = false; }
  if(password.length < 6){ setError("lPassword", "Password must be at least 6 characters."); valid = false; }
  if(!valid) return;

  const user = USERS.find(u => u.email === email);
  if(!user){
    setError("lEmail", "No account found with this email. Please sign up.");
    return;
  }
  if(user.password !== password){
    setError("lPassword", "Incorrect password. Please try again.");
    return;
  }

  const successEl = document.getElementById("loginSuccess");
  successEl.textContent = `Welcome back, ${user.name}!`;
  successEl.classList.add("show");
  setTimeout(()=>{
    closeModal("loginModal");
    successEl.classList.remove("show");
    loginForm.reset();
    showToast(`Logged in as ${user.name}`);
  }, 1100);
});

const signupForm = document.getElementById("signupForm");
signupForm.addEventListener("submit", function(e){
  e.preventDefault();
  clearErrors("signupForm");

  const name = document.getElementById("sName").value.trim();
  const email = document.getElementById("sEmail").value.trim();
  const password = document.getElementById("sPassword").value;
  const confirm = document.getElementById("sConfirm").value;
  let valid = true;

  if(name.length < 2){ setError("sName", "Please enter your full name."); valid = false; }
  if(!validateEmail(email)){ setError("sEmail", "Enter a valid email address."); valid = false; }
  if(password.length < 6){ setError("sPassword", "Password must be at least 6 characters."); valid = false; }
  if(confirm !== password || !confirm){ setError("sConfirm", "Passwords do not match."); valid = false; }
  if(valid && USERS.some(u => u.email === email)){
    setError("sEmail", "An account with this email already exists.");
    valid = false;
  }
  if(!valid) return;

  USERS.push({ name, email, password });

  const successEl = document.getElementById("signupSuccess");
  successEl.textContent = `Account created! Welcome to LuxeStay, ${name}.`;
  successEl.classList.add("show");
  setTimeout(()=>{
    closeModal("signupModal");
    successEl.classList.remove("show");
    signupForm.reset();
    showToast("Account created successfully!");
  }, 1100);
});

document.getElementById("switchToSignup").addEventListener("click", (e)=>{
  e.preventDefault();
  closeModal("loginModal");
  openModal("signupModal");
});
document.getElementById("switchToLogin").addEventListener("click", (e)=>{
  e.preventDefault();
  closeModal("signupModal");
  openModal("loginModal");
});

/* ============ 8. CONTACT FORM & NEWSLETTER ============ */
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function(e){
  e.preventDefault();
  clearErrors("contactForm");

  const name = document.getElementById("cName").value.trim();
  const email = document.getElementById("cEmail").value.trim();
  const subject = document.getElementById("cSubject").value.trim();
  const message = document.getElementById("cMessage").value.trim();
  let valid = true;

  if(name.length < 2){ setError("cName", "Please enter your name."); valid = false; }
  if(!validateEmail(email)){ setError("cEmail", "Enter a valid email address."); valid = false; }
  if(subject.length < 3){ setError("cSubject", "Please enter a subject."); valid = false; }
  if(message.length < 10){ setError("cMessage", "Message should be at least 10 characters."); valid = false; }
  if(!valid) return;

  const successEl = document.getElementById("contactSuccess");
  successEl.textContent = `Thanks, ${name}! Your message has been sent — we'll reply to ${email} within 24 hours.`;
  successEl.classList.add("show");
  contactForm.reset();
  setTimeout(()=> successEl.classList.remove("show"), 6000);
});

const newsletterForm = document.getElementById("newsletterForm");
newsletterForm.addEventListener("submit", function(e){
  e.preventDefault();
  const email = document.getElementById("newsletterEmail").value.trim();
  const successEl = document.getElementById("newsletterSuccess");
  if(!validateEmail(email)){
    showToast("Please enter a valid email address.");
    return;
  }
  successEl.textContent = "You're subscribed! Watch your inbox.";
  successEl.classList.add("show");
  newsletterForm.reset();
  setTimeout(()=> successEl.classList.remove("show"), 5000);
});

/* ============ 9. NAV, SMOOTH SCROLL, HELPERS ============ */

/* Open Login/Signup from navbar + footer */
document.getElementById("loginBtn").addEventListener("click", ()=> openModal("loginModal"));
document.getElementById("signupBtn").addEventListener("click", ()=> openModal("signupModal"));
document.getElementById("footerLogin").addEventListener("click", (e)=>{ e.preventDefault(); openModal("loginModal"); });
document.getElementById("footerSignup").addEventListener("click", (e)=>{ e.preventDefault(); openModal("signupModal"); });

/* Mobile nav toggle */
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
navToggle.addEventListener("click", ()=> navLinks.classList.toggle("open"));

/* Smooth scroll for all data-nav links + active state */
document.querySelectorAll("[data-nav]").forEach(link=>{
  link.addEventListener("click", function(e){
    const href = this.getAttribute("href");
    if(href && href.startsWith("#")){
      e.preventDefault();
      const target = document.querySelector(href);
      if(target){
        target.scrollIntoView({ behavior: "smooth" });
      }
      navLinks.classList.remove("open");
    }
  });
});

/* Highlight active nav link on scroll */
const sections = ["home","hotels","rooms","about","contact"].map(id => document.getElementById(id)).filter(Boolean);
window.addEventListener("scroll", ()=>{
  let current = "home";
  sections.forEach(sec=>{
    if(window.scrollY >= sec.offsetTop - 140) current = sec.id;
  });
  document.querySelectorAll(".nav-links a").forEach(a=>{
    a.classList.toggle("active", a.getAttribute("href") === "#" + current);
  });
});

/* Event delegation: View Details / Book Now buttons across the page */
document.addEventListener("click", function(e){
  const detailsBtn = e.target.closest(".view-details-btn");
  if(detailsBtn){ openDetails(detailsBtn.dataset.id); return; }

  const bookBtn = e.target.closest(".book-now-btn, .book-room-btn");
  if(bookBtn){ openBooking(bookBtn.dataset.id); return; }
});

/* Validation helpers */
function validateEmail(email){
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function validatePhone(phone){
  return /^[0-9+\-\s()]{7,}$/.test(phone);
}
function setError(fieldId, message){
  const err = document.getElementById(fieldId + "Err");
  const input = document.getElementById(fieldId);
  if(err) err.textContent = message;
  if(input) input.classList.add("invalid");
}
function clearErrors(formId){
  const form = document.getElementById(formId);
  form.querySelectorAll(".err").forEach(el => el.textContent = "");
  form.querySelectorAll(".invalid").forEach(el => el.classList.remove("invalid"));
}
function formatDate(dateStr){
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", { year:"numeric", month:"short", day:"numeric" });
}
function showToast(message){
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(()=> toast.classList.remove("show"), 3200);
}

/* Set sensible default dates on load (today / tomorrow) */
function setDefaultDates(){
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const toISO = d => d.toISOString().split("T")[0];

  const checkin = document.getElementById("checkin");
  const checkout = document.getElementById("checkout");
  checkin.min = toISO(today);
  checkout.min = toISO(tomorrow);
  checkin.value = toISO(today);
  checkout.value = toISO(tomorrow);

  checkin.addEventListener("change", ()=>{
    const next = new Date(checkin.value);
    next.setDate(next.getDate() + 1);
    checkout.min = toISO(next);
    if(new Date(checkout.value) <= new Date(checkin.value)){
      checkout.value = toISO(next);
    }
  });

  const bCheckin = document.getElementById("bCheckin");
  const bCheckout = document.getElementById("bCheckout");
  bCheckin.min = toISO(today);
  bCheckout.min = toISO(tomorrow);
}

/* ============ INIT ============ */
document.addEventListener("DOMContentLoaded", function(){
  renderHotels(HOTELS);
  renderRooms();
  setDefaultDates();
});
