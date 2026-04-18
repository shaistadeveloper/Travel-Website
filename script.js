// ============ 18 DESTINATIONS DATA ============
const destinations = [
  { name: "Paris, France", desc: "City of lights with Eiffel Tower and Louvre Museum.", info: "Best: Apr-Jun, Sep-Oct. Cost: PKR 185,000/5 days", img: "images/The Eiffel Tower in Paris is one of the world’s….jpg" },
  { name: "Dubai, UAE", desc: "Burj Khalifa, luxury shopping, desert safaris.", info: "Best: Nov-Mar. Cost: PKR 139,000/4 days", img: "images/Check out Makhzan Limited - Retail Shopping in Not….jpg" },
  { name: "Istanbul, Turkey", desc: "Hagia Sophia, Grand Bazaar, Turkish cuisine.", info: "Best: Apr-May, Sep-Nov. Cost: PKR 124,000/5 days", img: "images/Kız kulesi-İstanbul 🗼.jpg" },
  { name: "Swiss Alps, Switzerland", desc: "Mountain scenery, scenic train rides.", info: "Best: Jun-Sep. Cost: PKR 229,000/6 days", img: "images/download (6).jpg" },
  { name: "Bali, Indonesia", desc: "Rice terraces, beaches, spiritual retreats.", info: "Best: Apr-Oct. Cost: PKR 112,000/5 days", img: "images/30 Most Beautiful Places in Bali, Indonesia.jpg" },
  { name: "Bangkok, Thailand", desc: "Vibrant city, temples, street food.", info: "Best: Nov-Feb. Cost: PKR 89,000/4 days", img: "images/download (7).jpg" },
  { name: "New York, USA", desc: "Times Square, Central Park, Broadway.", info: "Best: Apr-Jun, Sep-Oct. Cost: PKR 215,000/5 days", img: "images/download (8).jpg" },
  { name: "Rome, Italy", desc: "Colosseum, Vatican City, Italian cuisine.", info: "Best: Apr-Jun, Sep-Oct. Cost: PKR 168,000/5 days", img: "images/Rome_ The Eternal City.jpg" },
  { name: "Tokyo, Japan", desc: "Futuristic city, temples, sushi paradise.", info: "Best: Mar-May, Sep-Nov. Cost: PKR 195,000/6 days", img: "images/Tokyo, Japan 🇯🇵.jpg" },
  { name: "Cape Town, South Africa", desc: "Table Mountain, beaches, wildlife.", info: "Best: Nov-Mar. Cost: PKR 142,000/5 days", img: "images/Cape Town South Africa.jpg" },
  { name: "Santorini, Greece", desc: "Blue domes, caldera views, sunsets.", info: "Best: Apr-Oct. Cost: PKR 174,500/5 days", img: "images/Santorini, Greece.jpg" },
  { name: "Marrakech, Morocco", desc: "Souks, palaces, Atlas mountains.", info: "Best: Mar-May, Sep-Nov. Cost: PKR 102,500/4 days", img: "images/🇲🇦 Discover the magic of Morocco – from the….jpg" },
  { name: "Sydney, Australia", desc: "Opera House, Bondi Beach, harbor.", info: "Best: Sep-Nov, Mar-May. Cost: PKR 225,000/5 days", img: "images/Australian roadtrip anyone_🐨🦘🇦🇺  Many of you….jpg" },
  { name: "Kuala Lumpur, Malaysia", desc: "Petronas Towers, street food paradise.", info: "Best: May-Jul. Cost: PKR 98,000/4 days", img: "images/Saloma Bridge, Kuala Lumpur, Malásia.jpg" },
  { name: "Lisbon, Portugal", desc: "Tram 28, pastel de nata, fado music.", info: "Best: Mar-May, Sep-Oct. Cost: PKR 121,000/4 days", img: "images/Belem Tower, Lisbon, Portugal 😍.jpg" },
  { name: "Banff, Canada", desc: "Lake Louise, Rocky Mountains, wildlife.", info: "Best: Jun-Sep. Cost: PKR 198,000/5 days", img: "images/Banff National Park, Canada_.jpg" },
  { name: "Cappadocia, Turkey", desc: "Hot air balloons, cave hotels, fairy chimneys.", info: "Best: Apr-Oct. Cost: PKR 124,000/4 days", img: "images/Explore the magical landscapes of Cappadocia….jpg" },
  { name: "Maldives", desc: "Overwater bungalows, turquoise lagoons.", info: "Best: Nov-Apr. Cost: PKR 289,000/5 days", img: "images/In Maldives_.jpg" }
];

// ============ TOUR PACKAGES DATA ============
const packages = [
  { name: "Dubai Luxury Tour", days: "5 Days", includes: "Hotel + Desert Safari + Burj Khalifa", price: "PKR 139,000", img: "images/Discover Dubai 🌆✨ Escape to Dubai, where modern….jpg" },
  { name: "Swiss Alps Adventure", days: "6 Days", includes: "Hotel + Train Pass + Glacier Tour", price: "PKR 229,000", img: "images/From stunning alpine trains to magical mountain….jpg" },
  { name: "Paris", days: "5 Days", includes: "Hotel + Eiffel Tower + Seine Cruise", price: "PKR 185,000", img: "images/The Best Time of the Year to Visit Paris….jpg" },
  { name: "Bali Escape", days: "5 Days", includes: "Hotel + Spa + Temple Tour", price: "PKR 112,000", img: "images/Bali Bucket List_ Top Places to Visit in Bali, Indonesia.jpg" }
];

// ============ TRAVEL TIPS DATA ============
const travelTips = [
  { icon: "fas fa-suitcase-rolling", title: "Packing Smart", tip: "Roll clothes to save space. Pack power bank, universal adapter, medications in carry-on." },
  { icon: "fas fa-wallet", title: "Budget Planning", tip: "Book flights 2-3 months early. Use local transport and eat at markets to save 40%." },
  { icon: "fas fa-shield-alt", title: "Safety First", tip: "Keep digital copies of documents. Share itinerary with family. Stay aware of surroundings." },
  { icon: "fas fa-calendar-alt", title: "Best Time to Travel", tip: "Europe: May-Sep. Southeast Asia: Nov-Feb. Middle East: Oct-Mar. Plan accordingly." }
];

// ============ GALLERY IMAGES ============
const galleryImages = [
  "images/beautiful-architecture-building-venetian-other-hotel-resort-casino.jpg",
  "images/vertical-shot-bridge-river-surrounded-by-mountains-scotland.jpg",
  "images/beautiful-rainbow-nature.jpg",
  "images/famous-view-big-ben-houses-parliament-london-uk.jpg",
  "images/empty-square-lake-city-park.jpg",
  "images/aerial-shot-beautiful-lake-forest-with-small-residency-middle.jpg"
];


// ============ PREVIEW DESTINATIONS FOR HOME PAGE ============
const previewDestinationsData = [
  { name: "Paris, France", desc: "City of lights with Eiffel Tower.", img: "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "Dubai, UAE", desc: "Burj Khalifa, luxury shopping.", img: "https://images.pexels.com/photos/2113807/pexels-photo-2113807.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "Swiss Alps", desc: "Mountain scenery, scenic rides.", img: "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "Bali, Indonesia", desc: "Rice terraces, beaches.", img: "https://images.pexels.com/photos/1114284/pexels-photo-1114284.jpeg?auto=compress&cs=tinysrgb&w=600" }
];

// ============ RENDER FUNCTIONS ============

// Render 18 Destinations
function renderDestinations() {
  const container = document.getElementById('destinationsContainer');
  if (container) {
    container.innerHTML = destinations.map(d => `
      <div class="col-md-6 col-lg-4">
        <div class="destination-card" style="background-image: url('${d.img}');" onclick="showDestination('${d.name.replace(/'/g, "\\'")}', '${d.desc.replace(/'/g, "\\'")}', '${d.info.replace(/'/g, "\\'")}', '${d.img}')">
          <div class="card-content">
            <h5>${d.name}</h5>
            <p>${d.desc.substring(0, 60)}...</p>
          </div>
        </div>
      </div>
    `).join('');
  }
}

// Show Destination Modal
function showDestination(name, desc, info, img) {
  const modalTitle = document.getElementById('destModalTitle');
  const modalDesc = document.getElementById('destModalDesc');
  const modalInfo = document.getElementById('destModalInfo');
  const modalImg = document.getElementById('destModalImg');
  if (modalTitle) modalTitle.innerHTML = name;
  if (modalDesc) modalDesc.innerHTML = desc;
  if (modalInfo) modalInfo.innerHTML = info;
  if (modalImg) modalImg.src = img;
  const modal = new bootstrap.Modal(document.getElementById('destModal'));
  if (modal) modal.show();
}

// Render Tour Packages
function renderPackages() {
  const container = document.getElementById('packagesContainer');
  if (container) {
    container.innerHTML = packages.map(p => `
      <div class="col-md-6 col-lg-3">
        <div class="package-card">
          <img src="${p.img}" class="img-fluid rounded-3 mb-3" style="height:180px; width:100%; object-fit:cover;">
          <h5 class="fw-bold">${p.name}</h5>
          <p><small>${p.days} | ${p.includes}</small></p>
          <p class="text-primary fw-bold">${p.price}</p>
          <button class="btn btn-primary-custom btn-sm w-100" onclick="openBooking('${p.name}')">Book Now</button>
        </div>
      </div>
    `).join('');
  }
}

// Open Booking Modal
function openBooking(packageName) {
  const modalTitle = document.getElementById('bookingModalTitle');
  const packageInput = document.getElementById('bookPackageName');
  if (modalTitle) modalTitle.innerHTML = `Book ${packageName}`;
  if (packageInput) packageInput.value = packageName;
  const form = document.getElementById('bookingForm');
  if (form) form.reset();
  const successMsg = document.getElementById('bookSuccessMsg');
  if (successMsg) successMsg.classList.add('d-none');
  const modal = new bootstrap.Modal(document.getElementById('bookingModal'));
  if (modal) modal.show();
}

// Render Travel Tips
function renderTips() {
  const container = document.getElementById('tipsContainer');
  if (container) {
    container.innerHTML = travelTips.map(t => `
      <div class="col-md-6 col-lg-3">
        <div class="tip-card">
          <i class="${t.icon}" style="font-size:2rem;color:#2c5f8a;"></i>
          <h5 class="fw-bold mt-2">${t.title}</h5>
          <p class="text-muted">${t.tip}</p>
        </div>
      </div>
    `).join('');
  }
}

// Render Gallery
function renderGallery() {
  const container = document.getElementById('galleryContainer');
  if (container) {
    container.innerHTML = galleryImages.map(img => `
      <div class="col-md-4 col-sm-6">
        <img src="${img}" class="gallery-img" onclick="showImage('${img}')">
      </div>
    `).join('');
  }
}

// Show Image Modal
function showImage(src) {
  const modalImage = document.getElementById('modalImage');
  if (modalImage) modalImage.src = src;
  const modal = new bootstrap.Modal(document.getElementById('imageModal'));
  if (modal) modal.show();
}

// Render Preview Destinations for Home Page
function renderPreviewDestinations() {
  const container = document.getElementById('previewDestinations');
  if (container) {
    container.innerHTML = previewDestinationsData.map(d => `
      <div class="col-md-6 col-lg-3">
        <div class="destination-card" style="background-image: url('${d.img}');">
          <div class="card-content">
            <h5>${d.name}</h5>
            <p>${d.desc}</p>
          </div>
        </div>
      </div>
    `).join('');
  }
}

// ============ BOOKINGS FUNCTIONS ============
function searchFlights() {
  const from = document.getElementById('flightFrom')?.value;
  const to = document.getElementById('flightTo')?.value;
  const resultDiv = document.getElementById('flightResult');
  if (from && to) {
    if (resultDiv) {
      resultDiv.innerHTML = `<i class="fas fa-check-circle"></i> Flights from ${from} to ${to} found! Starting PKR 45,000. Contact us for booking.`;
      resultDiv.classList.remove('d-none');
    }
  } else {
    alert("Please enter cities");
  }
}

function searchHotels() {
  const dest = document.getElementById('hotelDest')?.value;
  const resultDiv = document.getElementById('hotelResult');
  if (dest) {
    if (resultDiv) {
      resultDiv.innerHTML = `<i class="fas fa-check-circle"></i> Hotels in ${dest} starting PKR 8,000/night. Contact for best deals.`;
      resultDiv.classList.remove('d-none');
    }
  } else {
    alert("Enter destination");
  }
}

function calculateCost() {
  const flight = parseFloat(document.getElementById('costFlight')?.value) || 0;
  const hotel = parseFloat(document.getElementById('costHotel')?.value) || 0;
  const food = parseFloat(document.getElementById('costFood')?.value) || 0;
  const other = parseFloat(document.getElementById('costOther')?.value) || 0;
  const total = flight + hotel + food + other;
  const resultDiv = document.getElementById('costResult');
  if (resultDiv) {
    resultDiv.innerHTML = `<strong>Total Estimated Cost: PKR ${total.toLocaleString()}</strong>`;
    resultDiv.classList.remove('d-none');
  }
}

// ============ FORM SUBMITS ============
function setupBookingForm() {
  const bookingForm = document.getElementById('bookingForm');
  if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
      e.preventDefault();
      let valid = true;
      const name = document.getElementById('bookName').value;
      const email = document.getElementById('bookEmail').value;
      const phone = document.getElementById('bookPhone').value;
      const date = document.getElementById('bookDate').value;
      const travelers = document.getElementById('bookTravelers').value;

      if (!name.trim() || /[0-9@!#$%^&*]/.test(name)) {
        document.getElementById('bookNameError').innerHTML = "Valid name required";
        valid = false;
      } else {
        document.getElementById('bookNameError').innerHTML = "";
      }

      if (!email.trim() || !/^[^\s@]+@([^\s@]+\.)+[^\s@]+$/.test(email)) {
        document.getElementById('bookEmailError').innerHTML = "Valid email required";
        valid = false;
      } else {
        document.getElementById('bookEmailError').innerHTML = "";
      }

      const digits = phone.replace(/\D/g, '');
      if (digits.length !== 11 || !/^03\d{9}$/.test(digits)) {
        document.getElementById('bookPhoneError').innerHTML = "11 digits starting with 03";
        valid = false;
      } else {
        document.getElementById('bookPhoneError').innerHTML = "";
      }

      if (!date) {
        document.getElementById('bookDateError').innerHTML = "Travel date required";
        valid = false;
      } else {
        document.getElementById('bookDateError').innerHTML = "";
      }

      if (travelers < 1) {
        document.getElementById('bookTravelersError').innerHTML = "At least 1 traveler";
        valid = false;
      } else {
        document.getElementById('bookTravelersError').innerHTML = "";
      }

      if (valid) {
        document.getElementById('bookSuccessMsg').classList.remove('d-none');
        document.getElementById('bookSuccessMsg').innerHTML = `<i class="fas fa-check-circle"></i> Booking confirmed for ${name}! We'll contact you soon.`;
        setTimeout(() => {
          const modal = bootstrap.Modal.getInstance(document.getElementById('bookingModal'));
          if (modal) modal.hide();
        }, 3000);
      }
    });
  }
}

function setupFeedbackForm() {
  const feedbackForm = document.getElementById('feedbackForm');
  if (feedbackForm) {
    feedbackForm.addEventListener('submit', function(e) {
      e.preventDefault();
      let valid = true;
      const name = document.getElementById('fbName').value;
      const email = document.getElementById('fbEmail').value;
      const contact = document.getElementById('fbContact').value;
      const msg = document.getElementById('fbMessage').value;

      if (!name.trim() || /[0-9@!#$%^&*]/.test(name)) {
        document.getElementById('fbNameError').innerHTML = "Only alphabets allowed";
        valid = false;
      } else {
        document.getElementById('fbNameError').innerHTML = "";
      }

      if (!email.trim() || !/^[^\s@]+@([^\s@]+\.)+[^\s@]+$/.test(email)) {
        document.getElementById('fbEmailError').innerHTML = "Valid email required";
        valid = false;
      } else {
        document.getElementById('fbEmailError').innerHTML = "";
      }

      const digits = contact.replace(/\D/g, '');
      if (digits.length !== 11 || !/^03\d{9}$/.test(digits)) {
        document.getElementById('fbContactError').innerHTML = "11 digits starting with 03";
        valid = false;
      } else {
        document.getElementById('fbContactError').innerHTML = "";
      }

      if (!msg.trim()) {
        document.getElementById('fbMessageError').innerHTML = "Message required";
        valid = false;
      } else {
        document.getElementById('fbMessageError').innerHTML = "";
      }

      if (valid) {
        document.getElementById('fbSuccessMsg').classList.remove('d-none');
        document.getElementById('fbSuccessMsg').innerHTML = "Thank you for your valuable feedback!";
        feedbackForm.reset();
        setTimeout(() => document.getElementById('fbSuccessMsg').classList.add('d-none'), 4000);
      }
    });
  }
}

// ============ INITIALIZE ALL ============
document.addEventListener('DOMContentLoaded', function() {
  // Destinations Page
  if (document.getElementById('destinationsContainer')) {
    renderDestinations();
  }
  
  // Packages Page
  if (document.getElementById('packagesContainer')) {
    renderPackages();
  }
  
  // Travel Tips Page
  if (document.getElementById('tipsContainer')) {
    renderTips();
  }
  
  // Gallery Page
  if (document.getElementById('galleryContainer')) {
    renderGallery();
  }
  
  // Home Page Preview
  if (document.getElementById('previewDestinations')) {
    renderPreviewDestinations();
  }
  
  // Setup Forms
  setupBookingForm();
  setupFeedbackForm();
});