import { useEffect, useState } from 'react';
import { Link, NavLink, Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom';
import { ArrowDownRight, ArrowLeft, ArrowRight, Check, ChevronDown, Menu, MessageCircle, MoveUpRight, ShieldCheck, Sprout, Truck, X } from 'lucide-react';

const WHATSAPP_NUMBER = ''; // Add the business WhatsApp number with country code, digits only.
const image = (id, width = 1000) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

const categories = [
  { id: 'tamarind', name: 'Tamarind', eyebrow: 'A traditional essential', description: 'Naturally tangy, carefully selected and prepared for everyday cooking.', image: image('photo-1596040033229-a9821ebd058d') },
  { id: 'cold-pressed-oil', name: 'Cold-pressed Oil', eyebrow: 'Coming soon', description: 'Traditional oils, thoughtfully sourced for your kitchen.', image: image('photo-1474979266404-7eaacbcd87c5'), comingSoon: true },
  { id: 'pure-ghee', name: 'Pure Ghee', eyebrow: 'Coming soon', description: 'A timeless kitchen staple, made for traditional flavour.', image: image('photo-1630409346824-4f0e7b080087'), comingSoon: true },
  { id: 'natural-honey', name: 'Natural Honey / Comb', eyebrow: 'Coming soon', description: 'Nature-inspired sweetness, with simplicity at its heart.', image: image('photo-1587049352851-8d4e89133924'), comingSoon: true },
];

const products = [
  { id: 'raw-tamarind', name: 'Raw Tamarind', image: image('photo-1601050690597-df0568f70950'), intro: 'Traditional tamarind with its characteristic tang and rich flavour.', details: ['Selected tamarind pods', 'Traditional, versatile ingredient', 'Suitable for everyday cooking'], uses: 'Sambar, rasam, kuzhambu, chutneys and other traditional recipes.' },
  { id: 'seedless-tamarind', name: 'Seedless Tamarind', image: image('photo-1596040033229-a9821ebd058d'), intro: 'Convenient seedless tamarind for a smoother preparation experience.', details: ['Convenient to use', 'A dependable pantry ingredient', 'Easy to portion for recipes'], uses: 'Curries, gravies, marinades and everyday South Indian cooking.' },
  { id: 'round-seedless-tamarind', name: 'Round Seedless Tamarind', image: image('photo-1604908176997-125f25cc6f3d'), intro: 'A practical seedless format designed to make kitchen preparation simple.', details: ['Easy-to-handle format', 'Traditional tangy flavour', 'Useful for home and food-service kitchens'], uses: 'Daily cooking, gravies and traditional dishes.' },
  { id: 'seedless-bar-tamarind', name: 'Seedless Bar Tamarind', image: image('photo-1547592180-85f173990554'), intro: 'A compact bar format that makes storing and portioning straightforward.', details: ['Compact format', 'Convenient storage', 'Easy to portion'], uses: 'Cooking at home, restaurants and bulk food preparation.' },
  { id: 'seedless-flower-tamarind', name: 'Seedless Flower Tamarind', image: image('photo-1518843875459-f738682238a6'), intro: 'A distinctive tamarind selection for cooks who value traditional ingredients.', details: ['Distinctive product format', 'Traditional culinary ingredient', 'Versatile kitchen use'], uses: 'Traditional recipes, sauces and regional preparations.' },
  { id: 'tamarind-paste', name: 'Tamarind Paste', image: image('photo-1601050690117-94f5f6fa8bd7'), intro: 'Tamarind in a convenient paste format for quick, consistent preparation.', details: ['Convenient paste format', 'Simple recipe preparation', 'Easy to incorporate into dishes'], uses: 'Sauces, chutneys, marinades, gravies and ready-to-cook recipes.' },
  { id: 'karipuli', name: 'Karipuli', image: image('photo-1604908177522-040d6f9e8f17'), intro: 'A traditional ingredient selection from the Mugil Foods range.', details: ['Traditional product offering', 'Versatile kitchen ingredient', 'Enquiry-led availability'], uses: 'Ask our team about suitable uses, pack sizes and availability.' },
];

const services = [
  { number: '01', title: 'Thoughtful sourcing', text: 'We value dependable sourcing and ingredients chosen with care.', icon: Sprout },
  { number: '02', title: 'Quality-led selection', text: 'A considered approach to product selection, handling and presentation.', icon: ShieldCheck },
  { number: '03', title: 'Enquiry-led support', text: 'Tell us what you need and our team can help with product and supply enquiries.', icon: MessageCircle },
  { number: '04', title: 'Supply conversations', text: 'Connect with us to discuss your requirements and potential order quantities.', icon: Truck },
];

function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useEffect(() => setOpen(false), [location.pathname]);
  return <header className="site-header">
    <div className="header-inner">
      <Link className="brand" to="/" aria-label="Mugil Foods home">
        <img className="brand-logo" src="/mugil-foods-logo.svg" alt="Mugil Foods — Pure, Fresh, Traditional" />
      </Link>
      <button className="menu-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      <nav className={open ? 'main-nav is-open' : 'main-nav'}>
        <NavLink to="/" end>Home</NavLink><NavLink to="/products">Products</NavLink><NavLink to="/services">Services</NavLink><NavLink to="/about">About Us</NavLink><NavLink to="/contact">Contact</NavLink>
        <Link className="nav-cta" to="/contact">Make an enquiry <ArrowRight size={15} /></Link>
      </nav>
    </div>
  </header>;
}

function Footer() {
  return <footer className="footer">
    <div className="footer-main">
      <div className="footer-brand"><Link className="brand brand-light" to="/"><img className="brand-logo" src="/mugil-foods-logo.svg" alt="Mugil Foods — Pure, Fresh, Traditional" /></Link><p>Build with trust, Assured with —<br /><em>Pure Fresh Traditional.</em></p></div>
      <div><span className="footer-label">Explore</span><Link to="/products">Our products</Link><Link to="/services">Our services</Link><Link to="/about">About Mugil Foods</Link><Link to="/contact">Contact us</Link></div>
      <div><span className="footer-label">Product range</span><Link to="/products">Tamarind</Link><Link to="/products">Cold-pressed Oil</Link><Link to="/products">Pure Ghee</Link><Link to="/products">Natural Honey / Comb</Link></div>
      <div><span className="footer-label">Start a conversation</span><p>Looking for product details or supply information? We would be glad to hear from you.</p><Link className="footer-link" to="/contact">Send an enquiry <MoveUpRight size={15} /></Link></div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} Mugil Foods. All rights reserved.</span><span>Rooted in tradition. Made for today.</span></div>
  </footer>;
}

function PageShell({ children }) {
  const location = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, [location.pathname]);
  return <><Header />{children}<Footer /></>;
}

function Eyebrow({ children, light = false }) { return <span className={light ? 'eyebrow eyebrow-light' : 'eyebrow'}><span />{children}</span>; }

function CategoryCard({ category, index }) {
  return <Link to={category.comingSoon ? '/contact' : '/products'} className={category.comingSoon ? 'category-card coming-card' : 'category-card'} onClick={() => { if (!category.comingSoon) sessionStorage.setItem('mugil-category', category.id); }}>
    <div className="category-image"><img src={category.image} alt={category.name} loading="lazy" /><span className="category-index">0{index + 1}</span>{category.comingSoon && <span className="soon-tag">Coming soon</span>}<span className="circle-arrow"><ArrowDownRight size={20} /></span></div>
    <div className="category-info"><div><span className="mini-label">{category.eyebrow}</span><h3>{category.name}</h3></div><ArrowRight className="category-arrow" size={19} /></div>
  </Link>;
}

function Home() {
  const [slide, setSlide] = useState(0);
  const slides = [
    { label: 'THE TASTE OF TRADITION', title: <>Good food begins<br />with <em>good ingredients.</em></>, copy: 'Discover a thoughtful range of traditional food essentials, selected with care and made for everyday kitchens.', image: image('photo-1547592180-85f173990554', 1800), action: 'Explore our products' },
    { label: 'ROOTED IN EVERYDAY COOKING', title: <>Tradition you trust.<br /><em>Quality you value.</em></>, copy: 'From familiar kitchen staples to new favourites, Mugil Foods brings tradition and thoughtful selection together.', image: image('photo-1505576633757-0ac1084af824', 1800), action: 'Get to know us' },
    { label: 'SIMPLE INGREDIENTS, MEANINGFUL FOOD', title: <>A little more care<br />in <em>every choice.</em></>, copy: 'Explore our current range and talk to our team about product details, pack sizes and supply enquiries.', image: image('photo-1490645935967-10de6ba17061', 1800), action: 'Talk to our team' },
  ];
  useEffect(() => { const timer = window.setInterval(() => setSlide(s => (s + 1) % slides.length), 6000); return () => window.clearInterval(timer); }, []);
  const current = slides[slide];
  return <PageShell><main>
    <section className="hero">
      {slides.map((s, i) => <div key={s.label} className={i === slide ? 'hero-slide active' : 'hero-slide'} style={{ backgroundImage: `linear-gradient(90deg, rgba(13,38,29,.84) 0%, rgba(13,38,29,.58) 47%, rgba(13,38,29,.12) 100%), url("${s.image}")` }} aria-hidden={i !== slide} />)}
      <div className="hero-content page-width"><Eyebrow light>{current.label}</Eyebrow><h1 key={slide}>{current.title}</h1><p>{current.copy}</p><div className="hero-actions"><Link className="button button-gold" to={slide === 1 ? '/about' : slide === 2 ? '/contact' : '/products'}>{current.action}<ArrowRight size={17} /></Link><Link className="text-link text-link-light" to="/about">Our story <MoveUpRight size={15} /></Link></div></div>
      <div className="hero-bottom page-width"><span className="hero-caption">MUGIL FOODS <i>—</i> PURE, FRESH, TRADITIONAL</span><div className="slide-controls"><span>0{slide + 1} <i>/</i> 0{slides.length}</span>{slides.map((s, i) => <button key={s.label} className={i === slide ? 'slide-dot selected' : 'slide-dot'} onClick={() => setSlide(i)} aria-label={`Show slide ${i + 1}`} />)}</div></div>
      <div className="hero-side-note">A TRADITION OF GOODNESS</div>
    </section>
    <section className="categories-section section-pad"><div className="page-width"><div className="section-heading"><div><Eyebrow>OUR PRODUCT RANGE</Eyebrow><h2>Goodness for your <em>kitchen.</em></h2></div><Link className="text-link" to="/products">View all products <ArrowRight size={16} /></Link></div><div className="category-grid">{categories.map((c, i) => <CategoryCard key={c.id} category={c} index={i} />)}</div></div></section>
    <section className="intro-section section-pad"><div className="page-width intro-grid"><div><Eyebrow>WELCOME TO MUGIL FOODS</Eyebrow><h2>Honest ingredients.<br /><em>Everyday goodness.</em></h2></div><div className="intro-copy"><p className="lead">Food is more than what we eat. It is the recipes we inherit, the people we gather around, and the ingredients we trust.</p><p>At Mugil Foods, we celebrate familiar flavours and traditional food essentials with a thoughtful approach to selection and service.</p><Link className="text-link" to="/about">A little about us <ArrowRight size={16} /></Link></div></div></section>
    <section className="services-preview section-pad"><div className="page-width"><div className="section-heading"><div><Eyebrow>WHAT WE DO</Eyebrow><h2>Care in every <em>step.</em></h2></div><p className="heading-aside">Good partnerships begin with care, clear communication and a shared focus on quality.</p></div><div className="service-grid">{services.slice(0, 3).map(s => <div className="service-card" key={s.number}><span className="service-number">{s.number}</span><s.icon size={25} strokeWidth={1.4} /><h3>{s.title}</h3><p>{s.text}</p></div>)}</div><Link className="text-link services-link" to="/services">Discover our services <ArrowRight size={16} /></Link></div></section>
    <section className="why-section"><div className="why-image" role="img" aria-label="Fresh ingredients prepared for a traditional meal" style={{ backgroundImage: `url("${image('photo-1505576633757-0ac1084af824', 1200)}")` }} /><div className="why-content"><Eyebrow light>WHY MUGIL FOODS?</Eyebrow><h2>Tradition at heart.<br /><em>Care in every choice.</em></h2><p>We believe in the value of familiar ingredients, dependable conversations and a relationship built on trust.</p><ul><li><Check size={16} /> A thoughtful, tradition-led product range</li><li><Check size={16} /> Clear communication and enquiry support</li><li><Check size={16} /> A commitment to building lasting trust</li></ul><Link className="button button-outline-light" to="/about">Our approach <ArrowRight size={16} /></Link></div></section>
    <EnquiryBand />
  </main></PageShell>;
}

function ProductsPage() {
  const [active, setActive] = useState(() => sessionStorage.getItem('mugil-category') || 'tamarind');
  const category = categories.find(c => c.id === active) || categories[0];
  const navigate = useNavigate();
  return <PageShell><main><PageHero eyebrow="FROM OUR KITCHEN TO YOURS" title={<>Our <em>products.</em></>} text="Explore our range of traditional food essentials, selected with care." image={image('photo-1547592180-85f173990554', 1600)} />
    <section className="products-section section-pad"><div className="page-width"><div className="category-tabs" role="tablist" aria-label="Product categories">{categories.map(c => <button key={c.id} role="tab" aria-selected={active === c.id} className={active === c.id ? 'category-tab active' : 'category-tab'} onClick={() => { setActive(c.id); sessionStorage.setItem('mugil-category', c.id); }}>{c.name}{c.comingSoon && <span className="tab-soon">Soon</span>}</button>)}</div>
      <div className="products-heading"><div><Eyebrow>{category.eyebrow}</Eyebrow><h2>{category.name}</h2><p>{category.description}</p></div>{!category.comingSoon && <span className="product-count">0{products.length} products</span>}</div>
      {category.comingSoon ? <div className="coming-soon-panel"><img src={category.image} alt="" /><div><span className="soon-tag">COMING SOON</span><h3>Something good is on its way.</h3><p>We're working on this part of our range. Contact us to share your interest or ask about availability.</p><Link className="button button-dark" to="/contact">Register your interest <ArrowRight size={16} /></Link></div></div> :
      <div className="products-grid">{products.map((p, i) => <button className="product-card" key={p.id} onClick={() => navigate(`/products/${p.id}`)}><div className="product-image"><img src={p.image} alt={p.name} loading="lazy" /><span className="product-card-arrow"><ArrowUpRightIcon /></span></div><div className="product-card-name"><span>{p.name}</span><span className="product-index">0{i + 1}</span></div></button>)}</div>}
    </div></section><EnquiryBand /></main></PageShell>;
}

function ArrowUpRightIcon() { return <MoveUpRight size={18} />; }

function ProductDetail() {
  const { slug } = useParams();
  const product = products.find(p => p.id === slug);
  const navigate = useNavigate();
  if (!product) return <PageShell><main className="not-found page-width"><Eyebrow>PRODUCT NOT FOUND</Eyebrow><h1>Let's find what you need.</h1><Link className="button button-dark" to="/products">Back to products <ArrowRight size={16} /></Link></main></PageShell>;
  return <PageShell><main><div className="detail-top page-width"><Link to="/products" className="back-link"><ArrowLeft size={16} /> Back to all products</Link><span>PRODUCT RANGE / TAMARIND</span></div><section className="product-detail page-width"><div className="detail-image"><img src={product.image} alt={product.name} /><span className="detail-image-note">MUGIL FOODS · TRADITIONAL RANGE</span></div><div className="detail-copy"><Eyebrow>OUR TAMARIND RANGE</Eyebrow><h1>{product.name}</h1><p className="detail-lead">{product.intro}</p><div className="detail-rule" /><h3>Product highlights</h3><ul className="detail-list">{product.details.map(d => <li key={d}><Check size={16} />{d}</li>)}</ul><h3>Suggested uses</h3><p>{product.uses}</p><div className="detail-note">Interested in pack sizes, specifications or availability? Send us an enquiry and tell us what you need.</div><button className="button button-dark" onClick={() => navigate('/contact', { state: { product: product.name } })}>Enquire about this product <ArrowRight size={17} /></button><span className="detail-footnote">Specifications and availability can be confirmed by our team.</span></div></section><section className="related-section section-pad"><div className="page-width"><div className="section-heading"><div><Eyebrow>KEEP EXPLORING</Eyebrow><h2>More from <em>our range.</em></h2></div><Link className="text-link" to="/products">All products <ArrowRight size={16} /></Link></div><div className="related-grid">{products.filter(p => p.id !== product.id).slice(0, 3).map(p => <Link className="related-card" to={`/products/${p.id}`} key={p.id}><img src={p.image} alt={p.name} loading="lazy" /><span>{p.name}<ArrowRight size={16} /></span></Link>)}</div></div></section></main></PageShell>;
}

function PageHero({ eyebrow, title, text, image: heroImage }) {
  return <section className="page-hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(15,43,32,.82), rgba(15,43,32,.22)), url("${heroImage}")` }}><div className="page-width page-hero-content"><Eyebrow light>{eyebrow}</Eyebrow><h1>{title}</h1><p>{text}</p></div><span className="page-hero-caption">MUGIL FOODS — PURE, FRESH, TRADITIONAL</span></section>;
}

function ServicesPage() {
  return <PageShell><main><PageHero eyebrow="HOW WE WORK" title={<>Our <em>services.</em></>} text="Thoughtful sourcing, clear conversations and support shaped around your requirements." image={image('photo-1547592180-85f173990554', 1600)} /><section className="section-pad"><div className="page-width"><div className="section-heading"><div><Eyebrow>OUR COMMITMENT</Eyebrow><h2>Built around <em>what matters.</em></h2></div><p className="heading-aside">We want every conversation to feel straightforward, considered and useful.</p></div><div className="services-full-grid">{services.map(s => <div className="service-full-card" key={s.number}><div className="service-full-top"><span>{s.number}</span><s.icon size={28} strokeWidth={1.4} /></div><h3>{s.title}</h3><p>{s.text}</p></div>)}</div></div></section><EnquiryBand /></main></PageShell>;
}

function AboutPage() {
  return <PageShell><main><PageHero eyebrow="THE MUGIL FOODS STORY" title={<>Rooted in tradition.<br /><em>Looking ahead.</em></>} text="A food brand shaped by the value of familiar flavours, thoughtful choices and trust." image={image('photo-1490645935967-10de6ba17061', 1600)} /><section className="section-pad about-story"><div className="page-width about-grid"><div><Eyebrow>WHO WE ARE</Eyebrow><h2>Good food has a way of <em>bringing us together.</em></h2></div><div><p className="lead">Mugil Foods is built around a simple belief: the ingredients we bring into our kitchens deserve care and consideration.</p><p>Our range begins with traditional tamarind products and is growing to include more everyday food essentials. We aim to make product discovery and enquiries clear, approachable and helpful.</p><p>As we grow, our guiding thought stays the same — build with trust and stay assured with pure, fresh, traditional values.</p></div></div></section><section className="values-section section-pad"><div className="page-width"><Eyebrow>WHAT GUIDES US</Eyebrow><h2>Our values, <em>in practice.</em></h2><div className="values-grid"><article><span>01</span><h3>Trust</h3><p>Building relationships through open, dependable communication.</p></article><article><span>02</span><h3>Tradition</h3><p>Respecting the ingredients and food habits that connect generations.</p></article><article><span>03</span><h3>Care</h3><p>Taking a thoughtful approach to our products and the people we serve.</p></article></div></div></section><EnquiryBand /></main></PageShell>;
}

function ContactPage() {
  const location = useLocation();
  const [form, setForm] = useState({ name: '', phone: '', email: '', product: location.state?.product || '', quantity: '', message: '' });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  useEffect(() => { if (location.state?.product) setForm(f => ({ ...f, product: location.state.product })); }, [location.state]);
  const update = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const submit = e => {
    e.preventDefault(); setError(''); setSent(false);
    const message = [
      'Hello Mugil Foods, I would like to make an enquiry.',
      `Name: ${form.name}`, `Phone: ${form.phone}`, form.email && `Email: ${form.email}`,
      form.product && `Product: ${form.product}`, form.quantity && `Quantity / requirement: ${form.quantity}`,
      `Message: ${form.message || 'Please contact me to discuss details.'}`
    ].filter(Boolean).join('\n');
    if (WHATSAPP_NUMBER) { window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer'); setSent(true); }
    else { setError('The enquiry form is ready, but the business WhatsApp number has not been configured yet. Please contact the site administrator to connect submissions.'); }
  };
  return <PageShell><main><PageHero eyebrow="LET'S TALK" title={<>Start a <em>conversation.</em></>} text="Product question, supply requirement or simply want to know more? Send us a note." image={image('photo-1556911220-e15b29be8c8f', 1600)} /><section className="contact-section section-pad"><div className="page-width contact-grid"><div className="contact-aside"><Eyebrow>CONTACT MUGIL FOODS</Eyebrow><h2>Tell us what you're <em>looking for.</em></h2><p className="lead">Share a few details and we'll have the context we need to help with your enquiry.</p><div className="contact-promise"><MessageCircle size={22} /><div><strong>A straightforward conversation</strong><span>Product details, availability and supply enquiries are welcome.</span></div></div><div className="contact-promise"><ShieldCheck size={22} /><div><strong>Your requirements matter</strong><span>Tell us what you need and what you would like to know.</span></div></div></div><form className="enquiry-form" onSubmit={submit}><div className="form-heading"><span>ENQUIRY FORM</span><small>Fields marked * are required</small></div><div className="form-row"><label>Full name *<input required name="name" value={form.name} onChange={update} placeholder="Your name" /></label><label>Phone number *<input required name="phone" type="tel" value={form.phone} onChange={update} placeholder="Your contact number" /></label></div><label>Email address<input name="email" type="email" value={form.email} onChange={update} placeholder="you@example.com" /></label><div className="form-row"><label>Product of interest<select name="product" value={form.product} onChange={update}><option value="">Select a product</option>{categories.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}{products.map(p => <option key={p.id} value={p.name}>{p.name}</option>)}</select></label><label>Quantity / requirement<input name="quantity" value={form.quantity} onChange={update} placeholder="e.g. retail, bulk, pack size" /></label></div><label>How can we help?<textarea name="message" rows="4" value={form.message} onChange={update} placeholder="Tell us a little about your requirement..." /></label>{error && <p className="form-error" role="alert">{error}</p>}{sent && <p className="form-success" role="status">Your enquiry has been prepared in WhatsApp. Please review and send it there.</p>}<button className="button button-dark form-submit" type="submit">Send your enquiry <ArrowRight size={17} /></button><p className="form-privacy">Your details are used to respond to this enquiry.</p></form></div></section></main></PageShell>;
}

function EnquiryBand() {
  return <section className="enquiry-band"><div className="page-width enquiry-band-inner"><div><Eyebrow light>HAVE A REQUIREMENT?</Eyebrow><h2>Let's find the right <em>ingredients.</em></h2><p>Tell us what you're looking for. We're here to help you take the next step.</p></div><Link className="button button-gold" to="/contact">Make an enquiry <ArrowRight size={17} /></Link></div><span className="enquiry-decoration">M</span></section>;
}

function NotFound() {
  return <PageShell><main className="not-found page-width"><Eyebrow>PAGE NOT FOUND</Eyebrow><h1>Looks like this page took a different path.</h1><Link className="button button-dark" to="/">Return home <ArrowRight size={16} /></Link></main></PageShell>;
}

export default function App() {
  return <Routes><Route path="/" element={<Home />} /><Route path="/products" element={<ProductsPage />} /><Route path="/products/:slug" element={<ProductDetail />} /><Route path="/services" element={<ServicesPage />} /><Route path="/about" element={<AboutPage />} /><Route path="/contact" element={<ContactPage />} /><Route path="*" element={<NotFound />} /></Routes>;
}