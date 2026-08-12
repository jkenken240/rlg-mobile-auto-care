const facebookUrl =
  "https://www.facebook.com/profile.php?id=61581161921011";
const messengerUrl = "https://m.me/61581161921011";
const phoneUrl = "tel:+639089815075";

const servicePackages = [
  {
    number: "01",
    title: "Detailer’s Wash",
    price: "₱599",
    tag: "Essential care",
    description: "A paint-safe wash and decontamination reset, inside and out.",
    includes: ["Pre-wash + contact wash", "Chemical and mechanical decontamination", "Basic interior clean + foam sealant/wax"],
  },
  {
    number: "02",
    title: "Wash and Seal",
    price: "₱1,999",
    tag: "Gloss boost",
    description: "A complete wash finished with slick ceramic sealant protection.",
    includes: ["Full Detailer’s Wash", "Basic interior cleaning", "Ceramic sealant protection"],
  },
  {
    number: "03",
    title: "Deluxe Car Care",
    price: "₱3,499",
    tag: "Restore + protect",
    description: "A deeper exterior reset that improves gloss and adds protection.",
    includes: ["Detailer’s Wash + interior clean", "One-step polish / buffing", "Rupes Uno Advanced protection"],
  },
  {
    number: "04",
    title: "Interior Detailing",
    price: "₱2,999",
    tag: "Cabin reset",
    description: "A thorough deep clean for a fresher, more comfortable cabin.",
    includes: ["Interior and headliner steaming", "Seat and carpet extraction", "Interior sanitizing"],
  },
  {
    number: "05",
    title: "Waterless Engine Wash",
    price: "₱1,999",
    tag: "Engine care",
    description: "Controlled low-moisture cleaning for a tidier engine bay.",
    includes: ["Low-moisture process", "Careful component cleaning", "Clean, dressed finish"],
  },
];

const ceramicPrices = [
  { vehicle: "Sedan", oldPrice: "₱10,999", promoPrice: "₱7,999" },
  { vehicle: "Sub-compact & Crossover", oldPrice: "₱11,999", promoPrice: "₱10,999" },
  { vehicle: "SUV & Pick-up", oldPrice: "₱12,999", promoPrice: "₱11,999" },
];

const process = [
  {
    step: "01",
    title: "Send the details",
    text: "Message your vehicle model, location, preferred service, and a few photos.",
  },
  {
    step: "02",
    title: "Confirm the quote",
    text: "RLG recommends the right package, confirms the price, and reserves your schedule.",
  },
  {
    step: "03",
    title: "We come to you",
    text: "The mobile detailing setup arrives ready to clean, restore, and protect your vehicle.",
  },
];

const serviceVisuals = [
  {
    className: "visual-wash",
    image: "/images/rlg-detailers-wash.webp",
    alt: "A dark SUV receiving a professional foam wash in a residential driveway",
    eyebrow: "Exterior care",
    title: "Clean work. Real gloss.",
    copy: "Paint-safe washing, decontamination, sealing, and correction tailored to the car in front of us.",
  },
  {
    className: "visual-interior",
    image: "/images/rlg-interior-detailing.webp",
    alt: "A vehicle cabin receiving professional interior detailing and extraction",
    eyebrow: "Interior detailing",
    title: "A true cabin reset.",
    copy: "Steam, extraction, and careful cleaning across the surfaces you use every day.",
  },
  {
    className: "visual-coating",
    image: "/images/rlg-ceramic-coating.webp",
    alt: "Round water beads on a glossy black ceramic-coated vehicle panel",
    eyebrow: "Ceramic protection",
    title: "Shine that stays easier to maintain.",
    copy: "Hydrophobic protection, deep gloss, and resistance to everyday contamination.",
  },
];

function Brand() {
  return (
    <span className="brand-lockup">
      <img
        className="brand-logo"
        src="/images/rlg-logo.webp"
        alt="RLG Auto Care"
        width="143"
        height="94"
      />
      <span className="brand-words">
        <strong>Mobile Auto Care</strong>
        <small>Tanauan City</small>
      </span>
    </span>
  );
}

export default function Home() {
  return (
    <main id="top">
      <nav className="site-nav" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="RLG Mobile Auto Care home">
          <Brand />
        </a>

        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#why-rlg">Why RLG</a>
          <a href="#booking">How it works</a>
          <a className="nav-cta" href={messengerUrl} target="_blank" rel="noreferrer">
            Get a quote
          </a>
        </div>
      </nav>

      <section className="hero" aria-labelledby="hero-title">
        <img
          className="hero-image"
          src="/images/rlg-mobile-detailing-hero.webp"
          alt="A black SUV receiving professional mobile detailing at a home"
          width="1672"
          height="941"
          loading="eager"
          fetchPriority="high"
        />
        <div className="hero-shade" aria-hidden="true" />
        <div className="hero-grid" aria-hidden="true" />

        <div className="hero-copy">
          <p className="eyebrow"><span /> Mobile detailing · Tanauan City</p>
          <h1 id="hero-title">
            The detailing studio,
            <em>at your doorstep.</em>
          </h1>
          <p className="hero-lede">
            Premium auto detailing and ceramic protection brought to your home—careful work, professional products, and a finish that speaks for itself.
          </p>
          <p className="price-signal">Packages start at <strong>₱599</strong></p>

          <div className="hero-actions">
            <a className="button button-primary" href={messengerUrl} target="_blank" rel="noreferrer">
              Chat on Messenger <span aria-hidden="true">↗</span>
            </a>
            <a className="button button-secondary" href={phoneUrl}>
              Call 0908-981-5075
            </a>
          </div>
        </div>

        <div className="hero-status">
          <span className="live-dot" aria-hidden="true" />
          <div><small>Mobile unit</small><strong>Ready for home service</strong></div>
        </div>

        <div className="hero-foot" aria-label="Service highlights">
          <div><strong>8AM—7PM</strong><span>Open daily</span></div>
          <div><strong>HOME SERVICE</strong><span>We come to you</span></div>
          <div><strong>PREMIUM CARE</strong><span>Paint-safe process</span></div>
        </div>
      </section>

      <section id="services" className="section services-section">
        <div className="section-heading">
          <div>
            <p className="section-kicker">01 / Services</p>
            <h2>Care you can see in every surface.</h2>
          </div>
          <p>
            Choose a starting package or message RLG for a custom recommendation based on your vehicle’s size, condition, and the result you want.
          </p>
        </div>

        <div className="visual-heading-row">
          <span>What we do</span>
          <span>Swipe to explore on mobile →</span>
        </div>
        <div className="service-visuals">
          {serviceVisuals.map((service) => (
            <article className={`service-visual ${service.className}`} key={service.title}>
              <img src={service.image} alt={service.alt} width="1536" height="1024" loading="lazy" />
              <div className="service-visual-shade" aria-hidden="true" />
              <div className="service-visual-copy">
                <p>{service.eyebrow}</p>
                <h3>{service.title}</h3>
                <span>{service.copy}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="package-heading-row">
          <div>
            <span>Premium car wash & detailing</span>
            <h3>Starting packages</h3>
          </div>
          <p>Swipe through packages on mobile →</p>
        </div>

        <div className="package-grid">
          {servicePackages.map((service) => (
            <article className="package-card" key={service.number}>
              <div className="service-meta"><span>{service.number}</span><span>{service.tag}</span></div>
              <div className="package-title-row">
                <h3>{service.title}</h3>
                <div><small>Starts at</small><strong>{service.price}</strong></div>
              </div>
              <p>{service.description}</p>
              <ul>{service.includes.map((item) => <li key={item}>{item}</li>)}</ul>
              <a href={messengerUrl} target="_blank" rel="noreferrer">
                Ask about this service <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>

        <article className="ceramic-band">
          <div className="ceramic-intro">
            <p>GYEON protection system</p>
            <h3>Ceramic Coating Promo</h3>
            <span>Long-lasting protection, high gloss, easier cleaning, and resistance to UV exposure and contamination.</span>
          </div>
          <div className="ceramic-prices">
            {ceramicPrices.map((item) => (
              <div className="vehicle-price" key={item.vehicle}>
                <span>{item.vehicle}</span>
                <div><del>{item.oldPrice}</del><strong>{item.promoPrice}</strong></div>
              </div>
            ))}
          </div>
          <div className="ceramic-action">
            <span className="promo-pill">Promo</span>
            <a className="button button-primary" href={messengerUrl} target="_blank" rel="noreferrer">
              Get an exact quote <span aria-hidden="true">↗</span>
            </a>
          </div>
        </article>

        <p className="pricing-note">
          Prices shown are starting or promotional rates. Final pricing depends on vehicle size, condition, location, and required preparation.
        </p>
      </section>

      <section id="why-rlg" className="quality-section" aria-labelledby="quality-title">
        <div className="quality-copy">
          <p className="section-kicker">02 / Why RLG</p>
          <h2 id="quality-title">Mobile convenience. <em>Studio-level intent.</em></h2>
          <p>
            The setup comes to you, while the standard stays focused on proper technique, proven products, and honest recommendations.
          </p>
          <div className="quality-points">
            <div><span>01</span><p><strong>Professional products</strong>Trusted detailing and coating systems chosen for real protection.</p></div>
            <div><span>02</span><p><strong>Paint-safe process</strong>Careful wash, decontamination, correction, and finishing techniques.</p></div>
            <div><span>03</span><p><strong>Built around your day</strong>Daily hours and home-service convenience near Darasa.</p></div>
          </div>
          <a className="text-link" href={facebookUrl} target="_blank" rel="noreferrer">
            See recent work on Facebook <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="depth-scene" aria-label="Professional exterior and interior detailing">
          <div className="depth-grid" aria-hidden="true" />
          <figure className="depth-frame depth-back">
            <img src="/images/rlg-detailers-wash.webp" alt="A professional mobile wash on a residential driveway" width="1536" height="1024" loading="lazy" />
          </figure>
          <figure className="depth-frame depth-front">
            <img src="/images/rlg-interior-detailing.webp" alt="A freshly detailed black vehicle interior" width="1536" height="1024" loading="lazy" />
          </figure>
          <div className="depth-badge"><small>Home service</small><strong>Care, delivered.</strong></div>
        </div>
      </section>

      <section id="booking" className="section booking-section">
        <div className="booking-process">
          <p className="section-kicker">03 / How it works</p>
          <h2>From message to mirror finish.</h2>
          <div className="process-list">
            {process.map((item) => (
              <article key={item.step}>
                <span>{item.step}</span>
                <div><h3>{item.title}</h3><p>{item.text}</p></div>
              </article>
            ))}
          </div>
        </div>

        <aside className="coverage-card" aria-labelledby="coverage-title">
          <div className="coverage-grid" aria-hidden="true" />
          <div className="coverage-orbit" aria-hidden="true" />
          <span className="coverage-node" aria-hidden="true" />
          <div className="coverage-content">
            <p className="section-kicker">Service coverage</p>
            <h2 id="coverage-title">Based near Darasa. Ready for nearby areas.</h2>
            <p>Mobile service around Tanauan City, with coverage across nearby Batangas and Laguna locations subject to confirmation.</p>
            <div className="coverage-facts">
              <div><small>Base</small><strong>Darasa, Tanauan City</strong></div>
              <div><small>Hours</small><strong>Daily · 8:00 AM—7:00 PM</strong></div>
            </div>
            <a className="button button-secondary" href={messengerUrl} target="_blank" rel="noreferrer">
              Check your location <span aria-hidden="true">↗</span>
            </a>
          </div>
        </aside>
      </section>

      <section className="final-cta">
        <div className="cta-orb" aria-hidden="true" />
        <p className="section-kicker">Custom pricing stays simple</p>
        <h2>Send the car. Send the goal. Get the right detail.</h2>
        <p>Message your vehicle model, location, preferred service, and clear photos for an accurate recommendation.</p>
        <div className="final-actions">
          <a className="button button-primary" href={messengerUrl} target="_blank" rel="noreferrer">
            Start on Messenger <span aria-hidden="true">↗</span>
          </a>
          <a className="button button-secondary" href={phoneUrl}>Call 0908-981-5075</a>
        </div>
      </section>

      <footer>
        <a className="brand" href="#top" aria-label="Back to top"><Brand /></a>
        <p>Premium detailing at your doorstep.</p>
        <div className="footer-links">
          <a href={phoneUrl}>0908-981-5075</a>
          <a href={facebookUrl} target="_blank" rel="noreferrer">Facebook <span aria-hidden="true">↗</span></a>
        </div>
      </footer>

      <div className="mobile-contact-bar" aria-label="Quick contact">
        <a href={phoneUrl}>Call</a>
        <a href={messengerUrl} target="_blank" rel="noreferrer">Get a quote</a>
      </div>
    </main>
  );
}
