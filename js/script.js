
// ========== CONFIG ==========
const WHATSAPP_NUMBER = '919043672462';
const CURRENCY = '₹';

// ========== DEMO PLANS (24 samples) ==========
const PLANS = [
  {
    id: 'MHP-101',
    name: 'North Villa',
    city: 'Chennai',
    bhk: '2BHK',
    facing: 'North',
    area: 800,
    price: 2850000,
    img: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1200&auto=format&fit=crop',
    tags: ['villa','north'],
    desc: 'Comfortable villa with garden space and bright interiors. Ideal for compact family living.'
  },
  {
    id: 'MHP-102',
    name: 'East Villa',
    city: 'Bengaluru',
    bhk: '3BHK',
    facing: 'East',
    area: 1200,
    price: 4200000,
    img: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1200&auto=format&fit=crop',
    tags: ['villa','east'],
    desc: 'Family villa with open terrace and modern kitchen layout.'
  },
  {
    id: 'MHP-103',
    name: 'South Duplex',
    city: 'Hyderabad',
    bhk: '3BHK',
    facing: 'South',
    area: 1650,
    price: 3990000,
    img: 'https://images.unsplash.com/photo-1505692966767-3a2736de412f?q=80&w=1200&auto=format&fit=crop',
    tags: ['duplex','south'],
    desc: 'Duplex plan with double-height living and private balcony.'
  },
  {
    id: 'MHP-104',
    name: 'West Residence',
    city: 'Coimbatore',
    bhk: '2BHK',
    facing: 'West',
    area: 950,
    price: 2490000,
    img: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1200&auto=format&fit=crop',
    tags: ['2bhk','west'],
    desc: 'Compact modern home suitable for narrow plots.'
  },
  {
    id: 'MHP-105',
    name: 'Urban Row 2BHK',
    city: 'Chennai',
    bhk: '2BHK',
    facing: 'North',
    area: 980,
    price: 2390000,
    img: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=1200&auto=format&fit=crop',
    tags: ['row','urban'],
    desc: 'Efficient row-house plan with bright rooms and good ventilation.'
  },
  {
    id: 'MHP-106',
    name: 'Elegant 3BHK with Study',
    city: 'Bengaluru',
    bhk: '3BHK',
    facing: 'East',
    area: 1500,
    price: 3690000,
    img: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c52f?q=80&w=1200&auto=format&fit=crop',
    tags: ['3bhk','study'],
    desc: 'Balanced layout with flexible study / guest room.'
  },
  {
    id: 'MHP-107',
    name: 'Premium Villa 4BHK',
    city: 'Mysore',
    bhk: '4BHK',
    facing: 'South',
    area: 2850,
    price: 7990000,
    img: 'https://images.unsplash.com/photo-1616596850752-4e1ccbd04fd2?q=80&w=1200&auto=format&fit=crop',
    tags: ['villa','luxury'],
    desc: 'Luxury villa with courtyard and home office.'
  },
  {
    id: 'MHP-108',
    name: 'Starter 1BHK',
    city: 'Trichy',
    bhk: '1BHK',
    facing: 'West',
    area: 600,
    price: 1490000,
    img: 'https://images.unsplash.com/photo-1500048993953-d23a436266cf?q=80&w=1200&auto=format&fit=crop',
    tags: ['1bhk','starter'],
    desc: 'Minimal 1BHK perfect for rentals or compact living.'
  },
  {
    id: 'MHP-109',
    name: 'Compact Duplex',
    city: 'Madurai',
    bhk: '2BHK',
    facing: 'East',
    area: 1100,
    price: 3100000,
    img: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1200&auto=format&fit=crop',
    tags: ['duplex','compact'],
    desc: 'Smart duplex layout for small families with backyard space.'
  },
  {
    id: 'MHP-110',
    name: 'Luxury Bungalow',
    city: 'Chennai',
    bhk: '4BHK',
    facing: 'North',
    area: 3200,
    price: 9200000,
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    tags: ['bungalow','luxury'],
    desc: 'Spacious bungalow with premium interiors and garden.'
  },
  {
    id: 'MHP-111',
    name: 'Budget Apartment 2BHK',
    city: 'Bengaluru',
    bhk: '2BHK',
    facing: 'South',
    area: 850,
    price: 1900000,
    img: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1200&auto=format&fit=crop',
    tags: ['apartment','budget'],
    desc: 'Affordable apartment plan designed for city living.'
  },
  {
    id: 'MHP-112',
    name: 'Villa with Courtyard',
    city: 'Hyderabad',
    bhk: '3BHK',
    facing: 'West',
    area: 2100,
    price: 5100000,
    img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1200&auto=format&fit=crop',
    tags: ['villa','courtyard'],
    desc: 'Villa with spacious courtyard and open terrace.'
  },
  {
    id: 'MHP-113',
    name: 'Modern Duplex',
    city: 'Pune',
    bhk: '3BHK',
    facing: 'North',
    area: 1800,
    price: 4600000,
    img: 'https://images.unsplash.com/photo-1560184897-67f4c8c25d4e?q=80&w=1200&auto=format&fit=crop',
    tags: ['duplex','modern'],
    desc: 'Modern duplex with terrace garden and balcony.'
  },
  {
    id: 'MHP-114',
    name: 'Economy 1BHK',
    city: 'Coimbatore',
    bhk: '1BHK',
    facing: 'South',
    area: 550,
    price: 1250000,
    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop',
    tags: ['1bhk','budget'],
    desc: 'Low-cost 1BHK perfect for students and bachelors.'
  },
  {
    id: 'MHP-115',
    name: 'Row House 3BHK',
    city: 'Trivandrum',
    bhk: '3BHK',
    facing: 'East',
    area: 1400,
    price: 3500000,
    img: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=1200&auto=format&fit=crop',
    tags: ['rowhouse','family'],
    desc: '3BHK row house ideal for mid-sized families.'
  },
  {
    id: 'MHP-116',
    name: 'Lake View Villa',
    city: 'Udaipur',
    bhk: '4BHK',
    facing: 'West',
    area: 3000,
    price: 8800000,
    img: 'https://images.unsplash.com/photo-1600585154350-09c9e4a39aea?q=80&w=1200&auto=format&fit=crop',
    tags: ['villa','lake'],
    desc: 'Premium villa with stunning lake view and outdoor deck.'
  },
  {
    id: 'MHP-117',
    name: 'Studio Apartment',
    city: 'Bengaluru',
    bhk: '1BHK',
    facing: 'North',
    area: 450,
    price: 950000,
    img: 'https://images.unsplash.com/photo-1580587771521-7d1f8c5e7c3c?q=80&w=1200&auto=format&fit=crop',
    tags: ['studio','apartment'],
    desc: 'Compact studio apartment plan for young professionals.'
  },
  {
    id: 'MHP-118',
    name: 'Smart 2BHK',
    city: 'Hyderabad',
    bhk: '2BHK',
    facing: 'East',
    area: 1000,
    price: 2100000,
    img: 'https://images.unsplash.com/photo-1599423300746-b62533397364?q=80&w=1200&auto=format&fit=crop',
    tags: ['2bhk','smart'],
    desc: 'Smart home enabled 2BHK with efficient layout.'
  },
  {
    id: 'MHP-119',
    name: 'Family Duplex',
    city: 'Chennai',
    bhk: '4BHK',
    facing: 'South',
    area: 2500,
    price: 7200000,
    img: 'https://images.unsplash.com/photo-1560448075-bb4bfcf0d9b0?q=80&w=1200&auto=format&fit=crop',
    tags: ['duplex','family'],
    desc: 'Large duplex home for extended families.'
  },
  {
    id: 'MHP-120',
    name: 'Eco-Friendly Villa',
    city: 'Goa',
    bhk: '3BHK',
    facing: 'West',
    area: 2000,
    price: 5600000,
    img: 'https://images.unsplash.com/photo-1600585154356-5963f01fd985?q=80&w=1200&auto=format&fit=crop',
    tags: ['villa','eco'],
    desc: 'Villa with solar panels and rainwater harvesting.'
  },
  {
    id: 'MHP-121',
    name: 'City Center Apartment',
    city: 'Mumbai',
    bhk: '2BHK',
    facing: 'North',
    area: 900,
    price: 3100000,
    img: 'https://images.unsplash.com/photo-1560185008-5c5a0f6a7f2e?q=80&w=1200&auto=format&fit=crop',
    tags: ['apartment','city'],
    desc: 'Modern 2BHK apartment in city center.'
  },
  {
    id: 'MHP-122',
    name: 'Luxury Penthouse',
    city: 'Delhi',
    bhk: '4BHK',
    facing: 'East',
    area: 3500,
    price: 12000000,
    img: 'https://images.unsplash.com/photo-1580587771520-7a97a4a9ca3b?q=80&w=1200&auto=format&fit=crop',
    tags: ['penthouse','luxury'],
    desc: 'Exclusive 4BHK penthouse with rooftop pool.'
  },
  {
    id: 'MHP-123',
    name: 'Heritage Bungalow',
    city: 'Pondicherry',
    bhk: '3BHK',
    facing: 'West',
    area: 2200,
    price: 6400000,
    img: 'https://images.unsplash.com/photo-1600585154370-d57bc70b9d40?q=80&w=1200&auto=format&fit=crop',
    tags: ['bungalow','heritage'],
    desc: 'Colonial-style bungalow with modern interiors.'
  },
  {
    id: 'MHP-124',
    name: 'Seaside Villa',
    city: 'Chennai (ECR)',
    bhk: '4BHK',
    facing: 'South',
    area: 3100,
    price: 9500000,
    img: 'https://images.unsplash.com/photo-1600585154359-1a4fbbfd9e5a?q=80&w=1200&auto=format&fit=crop',
    tags: ['villa','seaside'],
    desc: 'Luxury seaside villa with infinity pool.'
  }
];

// ========== STATE ==========
let cart = JSON.parse(localStorage.getItem('mhpcart') || '[]');
let currentPage = 1;
const PLANS_PER_PAGE = 12;

// ========== HELPERS ==========
const el = (s,scope=document) => scope.querySelector(s);
const els = (s,scope=document) => Array.from(scope.querySelectorAll(s));
const fmt = n => CURRENCY + new Intl.NumberFormat('en-IN').format(n);

function setWhatsLinks(){
  const url = `https://wa.me/${WHATSAPP_NUMBER}`;
  el('#waBubble') && (el('#waBubble').href = url);
  el('#whatsContact') && (el('#whatsContact').href = url);
}

// ========== RENDER PLANS ==========
function renderPlans(limit = true, containerSelector = '#plansGrid'){
  const grid = el(containerSelector);
  if(!grid) return;
  grid.innerHTML = '';

  const q = (el('#searchInput')?.value || '').toLowerCase();
  const activeChip = els('.chip').find(c=>c.classList.contains('active'))?.dataset.chip || 'all';
  const bed = el('#filterBedrooms')?.value || '';
  const facing = el('#filterFacing')?.value || '';
  const minArea = parseInt(el('#filterArea')?.value || '0',10) || 0;
  const maxPrice = parseInt(el('#filterPrice')?.value || '0',10) || 0;

  const shown = PLANS.filter(p => {
    const txt = [p.name, p.city, p.id, ...(p.tags||[])].join(' ').toLowerCase();
    if(q && !txt.includes(q)) return false;
    if(activeChip !== 'all' && !(p.bhk === activeChip || p.tags.includes(activeChip.toLowerCase()) || p.bhk.includes(activeChip))) {
      if(!(activeChip==='all')) return false;
    }
    if(bed && p.bhk !== bed) return false;
    if(facing && p.facing !== facing) return false;
    if(minArea && p.area < minArea) return false;
    if(maxPrice && p.price > maxPrice) return false;
    return true;
  });

  el('#countTotal') && (el('#countTotal').textContent = PLANS.length);
  el('#countShown') && (el('#countShown').textContent = shown.length);

  let list = shown;
  if(limit){
    list = shown.slice(0,6);
  } else {
    const start = (currentPage-1) * PLANS_PER_PAGE;
    list = shown.slice(start, start + PLANS_PER_PAGE);
    renderPagination(shown.length);
  }

  list.forEach(p=>{
    const col = document.createElement('div');
    col.className = 'col-md-6 col-lg-4';
    col.innerHTML = `
      <div class="card card-plan h-100">
        <img src="${p.img}" class="card-img-top" alt="${p.name}">
        <div class="card-body">
          <div>
           
            <div class="d-flex justify-content-between align-items-start mb-2">
            <div>
           <div class="small text-muted">Code: ${p.id}</div>   <!-- ✅ show code -->
           <h5 class="card-title mb-0">${p.name}</h5>
           </div>
          <span class="badge badge-soft">${p.facing}</span>
          </div>

            <div class="plan-location small muted mb-2">${p.city} • ${p.bhk} • ${p.area} sqft</div>
            <div class="plan-price mb-2">
              <div class="rupee"><i class="bi bi-currency-rupee"></i></div>
              <div><small class="muted">Price</small><div><strong>${fmt(p.price)}</strong></div></div>
            </div>
          </div>
          <div class="d-flex gap-2 mt-2">
            <button class="btn btn-outline-dark btn-sm flex-grow-1" data-view="${p.id}"><i class="bi bi-eye me-1"></i>Details</button>
            <button class="btn btn-brand btn-sm" data-add="${p.id}"><i class="bi bi-bag-plus me-1"></i>Add</button>
            <button class="btn btn-success btn-sm" data-buy="${p.id}"><i class="bi bi-whatsapp me-1"></i>Buy</button>
          </div>
        </div>
      </div>
    `;
    grid.appendChild(col);
  });

  grid.querySelectorAll('[data-view]').forEach(btn => btn.onclick = ()=> openModal(btn.dataset.view));
  grid.querySelectorAll('[data-add]').forEach(btn => btn.onclick = ()=> addToCart(btn.dataset.add));
  grid.querySelectorAll('[data-buy]').forEach(btn => btn.onclick = ()=> buyNow(btn.dataset.buy));
}

function renderPagination(totalPlans){
  const totalPages = Math.ceil(totalPlans / PLANS_PER_PAGE);
  const pag = el('#pagination');
  if(!pag) return;
  pag.innerHTML = '';
  if(totalPages <= 1) return;

  const addBtn = (label, page, disabled=false, active=false)=>{
    const li = document.createElement('li');
    li.className = `page-item ${disabled?'disabled':''} ${active?'active':''}`;
    li.innerHTML = `<a class="page-link" href="#">${label}</a>`;
    li.onclick = e=>{ e.preventDefault(); if(!disabled){ currentPage=page; renderPlans(false); } };
    pag.appendChild(li);
  };

  addBtn('Prev', currentPage-1, currentPage===1);
  for(let i=1;i<=totalPages;i++) addBtn(i, i, false, currentPage===i);
  addBtn('Next', currentPage+1, currentPage===totalPages);
}

// ========== MODAL ==========
function openModal(id){
  const p = PLANS.find(x=>x.id===id);
  if(!p) return;

  el('#modalTitle').textContent = `${p.name} • ${p.city}`;
  el('#modalImg').src = p.img;
  el('#modalBadge').textContent = p.facing;
  el('#modalCode').textContent = p.id;
  el('#modalBhk').textContent = p.bhk;
  el('#modalFacing').textContent = p.facing;
  el('#modalArea').textContent = p.area;
  el('#modalDesc').textContent = p.desc;
  el('#modalPrice').textContent = fmt(p.price);

  el('#modalAddBtn').onclick = ()=> addToCart(p.id);
  el('#modalWhatsBtn').onclick = ()=> {
    const msg = `Hi, I'm interested in "${p.name}" (Code: ${p.id}) — ${p.city}, ${p.bhk}, ${p.area} sqft. Price: ${fmt(p.price)}.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=` + encodeURIComponent(msg), '_blank');
  };

  new bootstrap.Modal('#planModal').show();
}

// ========== CART ==========
// function addToCart(id){
//   const p = PLANS.find(x=>x.id===id); if(!p) return;
//   const existing = cart.find(x=>x.id === id);
//   if(existing) existing.qty += 1;
//   else cart.push({ id: p.id, name: p.name, price: p.price, qty: 1 });
//   localStorage.setItem('mhpcart', JSON.stringify(cart));
//   renderCart();
// }

function addToCart(id){
  const p = PLANS.find(x=>x.id===id); if(!p) return;
  const existing = cart.find(x=>x.id === id);
  if(existing) existing.qty += 1;
  else cart.push({ id: p.id, code: p.id, name: p.name, price: p.price, qty: 1 });  // ✅ added code
  localStorage.setItem('mhpcart', JSON.stringify(cart));
  renderCart();
}


function removeFromCart(id){
  cart = cart.filter(x=>x.id !== id);
  localStorage.setItem('mhpcart', JSON.stringify(cart));
  renderCart();
}

// function renderCart(){
//   const list = el('#cartList');
//   if(!list) return;
//   list.innerHTML = '';
//   let total = 0;
//   cart.forEach(item=>{
//     total += item.price * item.qty;
//     const li = document.createElement('li');
//     li.className = 'list-group-item d-flex justify-content-between align-items-center';
//     li.innerHTML = `
//       <div>
//         <div class="fw-semibold">${item.name}</div>
//         <div class="small muted">${item.qty} × ${fmt(item.price)}</div>
//       </div>
//       <div class="d-flex align-items-center gap-2">
//         <div class="fw-semibold">${fmt(item.price * item.qty)}</div>
//         <button class="btn btn-sm btn-outline-danger" title="Remove"><i class="bi bi-x"></i></button>
//       </div>
//     `;
//     li.querySelector('button').addEventListener('click', ()=> removeFromCart(item.id));
//     list.appendChild(li);
//   });

//   el('#cartTotal').textContent = fmt(total);
//   el('#cartCount') && (el('#cartCount').textContent = cart.length);

//   // ✅ ensure checkout button works always
//   el('#checkoutBtn')?.addEventListener('click', checkoutWhatsApp);
// }
function renderCart(){
  const list = el('#cartList');
  if(!list) return;
  list.innerHTML = '';
  let total = 0;
  cart.forEach(item=>{
    total += item.price * item.qty;
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center';
    li.innerHTML = `
      <div>
        <div class="fw-semibold">${item.name} / <span class="text-muted small">Code: ${item.code}</span></div>
        <div class="small muted">${item.qty} × ${fmt(item.price)} = <strong>${fmt(item.price * item.qty)}</strong></div>
      </div>
      <button class="btn btn-sm btn-outline-danger" title="Remove"><i class="bi bi-x"></i></button>
    `;
    li.querySelector('button').addEventListener('click', ()=> removeFromCart(item.id));
    list.appendChild(li);
  });

  el('#cartTotal').textContent = fmt(total);
  el('#cartCount') && (el('#cartCount').textContent = cart.length);

  el('#checkoutBtn')?.addEventListener('click', checkoutWhatsApp);
}


function checkoutWhatsApp(){
  if(!cart.length){ alert('Your cart is empty.'); return; }
  let lines = ['Hello, I want to buy these plans:', ''];
  let total = 0;
  cart.forEach((i,idx)=>{ total += i.price * i.qty; lines.push(`${idx+1}. ${i.name} (x${i.qty}) – ${fmt(i.price * i.qty)}`); });
  lines.push('');
  lines.push(`Total: ${fmt(total)}`);
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=` + encodeURIComponent(lines.join('\n'));
  window.open(url, '_blank');
}

function buyNow(id){
  const p = PLANS.find(x=>x.id===id); if(!p) return;
  const msg = `Hi, I'm interested in "${p.name}" (Code: ${p.id}) — ${p.city}, ${p.bhk}, ${p.area} sqft. Price: ${fmt(p.price)}.`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=` + encodeURIComponent(msg), '_blank');
}

// ========== CUSTOM PLAN ==========
function sendCustomPlanWhats(){
  const data = collectCustomPlan();
  if(!data) return;
  const text = `Custom Plan Request\n\n${data}`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=` + encodeURIComponent(text), '_blank');
}
function sendCustomPlanEmail(){
  const data = collectCustomPlan();
  if(!data) return;
  window.location.href = `mailto:kadambangroup@gmail.com?subject=Custom Plan Request&body=${encodeURIComponent(data)}`;
}
function collectCustomPlan(){
  const name = el('#cp_name')?.value.trim();
  const mobile = el('#cp_mobile')?.value.trim();
  if(!name || !mobile){ alert("Name & Mobile required"); return null; }
  const files = el('#cp_files')?.files;
  let fileList = '';
  if(files && files.length){
    fileList = '\nFiles to attach:\n' + Array.from(files).map(f=> '- ' + f.name).join('\n');
  }
  return `
Name: ${name}
Mobile: ${mobile}
Plot Area: ${el('#cp_plotArea')?.value}
Facing: ${el('#cp_facing')?.value}
Sides: N-${el('#cp_north')?.value}, E-${el('#cp_east')?.value}, S-${el('#cp_south')?.value}, W-${el('#cp_west')?.value}
Building Type: ${el('#cp_buildingType')?.value}
State/City: ${el('#cp_statecity')?.value}
Description: ${el('#cp_description')?.value}
${fileList}
`.trim();
}

// ========== EVENTS ==========
// window.addEventListener('DOMContentLoaded', ()=>{
//   setWhatsLinks();
//   renderPlans(true, '#plansGrid');
//   renderCart();

  window.addEventListener('DOMContentLoaded', ()=>{
  setWhatsLinks();
  renderPlans(false, '#plansGrid');  // ✅ always 12 per page with pagination
  renderCart();
 


  el('#year') && (el('#year').textContent = new Date().getFullYear());

  el('#searchInput')?.addEventListener('input', ()=> renderPlans(false, '#plansGrid'));
  els('.chip').forEach(c => c.addEventListener('click', ()=> {
    els('.chip').forEach(x=>x.classList.remove('active'));
    c.classList.add('active');
    renderPlans(false, '#plansGrid');
  }));
  el('#applyHeroFilters')?.addEventListener('click', ()=> renderPlans(true, '#plansGrid'));
  el('#applyFiltersMain')?.addEventListener('click', ()=> renderPlans(false, '#plansGrid'));

  el('#cpSendWhats')?.addEventListener('click', sendCustomPlanWhats);
  el('#cpSendEmail')?.addEventListener('click', sendCustomPlanEmail);
});

// ✅ refresh cart whenever sidebar opens
const cartOffcanvas = el('#cartOffcanvas');
if(cartOffcanvas){
  cartOffcanvas.addEventListener('show.bs.offcanvas', ()=> {
    console.log("Cart offcanvas opened → rendering cart", cart);
    renderCart();
  });
}
