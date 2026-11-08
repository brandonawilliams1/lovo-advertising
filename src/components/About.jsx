import { Icon } from './Icon';
import { IMAGES } from '../data/content';
import '../styles/about.css';

export default function About({ onNavigateHome, onOpenModal }) {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero-bg">
          <img src={IMAGES.hero} alt="" className="about-hero-img" />
          <div className="about-hero-overlay"></div>
        </div>
        <div className="container about-hero-content">
          <button className="about-back" onClick={onNavigateHome}>
            <Icon name="arrow" size={16} className="about-back-arrow" />
            Back to Home
          </button>
          <span className="section-label">Our Story</span>
          <h1 className="about-hero-title animate-fade-up">
            Born in Chicago.<br />
            <span className="about-hero-accent">Built for the Block.</span>
          </h1>
          <p className="about-hero-tagline animate-fade-up" style={{ animationDelay: '0.1s' }}>
            LoVo Advertising was founded on a simple idea: the best ad is the one
            people can't look away from. So we put it on a truck and drove it
            through the neighborhoods where your customers already are.
          </p>
        </div>
      </section>

      <section className="section about-story">
        <div className="container">
          <div className="about-story-grid">
            <div className="reveal about-story-text">
              <span className="section-label">How It Started</span>
              <h2 className="section-title">From a Side Street to the Whole City</h2>
              <div className="about-story-body">
                <p>
                  It started with a single LED truck and a conviction that Chicago
                  businesses deserved better than a billboard nobody remembers. Static
                  panels fade into the skyline. Digital ads get scrolled past. But a
                  glowing screen rolling down Clark Street at rush hour — that stops
                  people in their tracks.
                </p>
                <p>
                  We saw how hard it was for local businesses to get noticed. Big-budget
                  campaigns and corporate ad buys were out of reach, and the affordable
                  options were forgettable. So we built something in between — high-impact,
                  mobile, and built around the neighborhoods that make Chicago work.
                </p>
                <p>
                  Today, LoVo operates a fleet of LED trucks across the city, running
                  campaigns for grand openings, product launches, community festivals,
                  and everything in between. Every route is planned with intention.
                  Every campaign is measured with real data. And every client gets the
                  kind of attention that a neighborhood business deserves.
                </p>
              </div>
            </div>
            <div className="reveal about-story-image">
              <div className="about-story-image-frame">
                <img src={IMAGES.collage.truck1} alt="LoVo LED truck on a Chicago street" />
              </div>
              <div className="about-story-image-badge">
                <span className="about-story-badge-num">100%</span>
                <span className="about-story-badge-label">Chicago-Owned</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-values">
        <div className="container">
          <div className="reveal about-values-header">
            <span className="section-label">What Drives Us</span>
            <h2 className="section-title">Three Principles, No Exceptions</h2>
            <p className="section-subtitle">
              We don't just rent trucks. We build campaigns that earn attention and
              deliver measurable results for the businesses we serve.
            </p>
          </div>

          <div className="about-values-grid">
            <div className="reveal about-value-card" style={{ transitionDelay: '0s' }}>
              <div className="about-value-icon">
                <Icon name="target" size={28} strokeWidth={1.8} />
              </div>
              <h3 className="about-value-title">Precision Over Spraying</h3>
              <p className="about-value-desc">
                We don't drive in circles hoping for impressions. Every route is
                mapped against traffic patterns, event schedules, and audience
                density so your message reaches the right people at the right time.
              </p>
            </div>

            <div className="reveal about-value-card" style={{ transitionDelay: '0.12s' }}>
              <div className="about-value-icon">
                <Icon name="analytics" size={28} strokeWidth={1.8} />
              </div>
              <h3 className="about-value-title">Proof, Not Promises</h3>
              <p className="about-value-desc">
                GPS tracking, AI-powered impression reports, and photo verification
                on every campaign. You'll know exactly where your truck went, when it
                was there, and how many people saw it — no guessing.
              </p>
            </div>

            <div className="reveal about-value-card" style={{ transitionDelay: '0.24s' }}>
              <div className="about-value-icon">
                <Icon name="creative" size={28} strokeWidth={1.8} />
              </div>
              <h3 className="about-value-title">Creative Included</h3>
              <p className="about-value-desc">
                Our in-house design team builds your ad creative from concept to final
                render — included with every campaign. You bring the vision, we bring
                the screens, the strategy, and the artistry to make it unforgettable.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-chicago">
        <div className="container">
          <div className="about-chicago-grid">
            <div className="reveal about-chicago-content">
              <span className="section-label">Our Commitment to Chicago</span>
              <h2 className="section-title">This City Is Our Headquarters</h2>
              <div className="about-chicago-body">
                <p>
                  We didn't set up shop here because it was convenient. We're here
                  because Chicago is a city of neighborhoods — each with its own
                  personality, its own traffic, its own audience. That's not a
                  challenge for mobile advertising. It's the whole point.
                </p>
                <p>
                  From the Loop to Logan Square, Wicker Park to Bronzeville, we know
                  which streets move at which hours, where the foot traffic clusters
                  after work, and which festivals draw the crowds that become
                  customers. That local knowledge is baked into every route we plan.
                </p>
                <p>
                  We also believe Chicago businesses deserve a partner that shows up.
                  That means showing up on time, showing up with data, and showing up
                  with creative that actually fits the block. When you run a campaign
                  with LoVo, you're not buying airtime — you're working with a team
                  that's invested in your neighborhood's success.
                </p>
              </div>
              <div className="about-chicago-stats">
                <div className="about-chicago-stat">
                  <span className="about-chicago-stat-num">50+</span>
                  <span className="about-chicago-stat-label">Neighborhoods Served</span>
                </div>
                <div className="about-chicago-stat">
                  <span className="about-chicago-stat-num">24/7</span>
                  <span className="about-chicago-stat-label">Route Availability</span>
                </div>
                <div className="about-chicago-stat">
                  <span className="about-chicago-stat-num">100%</span>
                  <span className="about-chicago-stat-label">GPS Verified</span>
                </div>
              </div>
            </div>
            <div className="reveal about-chicago-image">
              <div className="about-chicago-image-frame">
                <img src={IMAGES.collage.truck2} alt="LoVo LED truck at a community event" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-cta">
        <div className="container">
          <div className="reveal about-cta-content">
            <h2 className="about-cta-title">Let's Build Something the City Sees</h2>
            <p className="about-cta-text">
              Whether you're launching a new business, promoting an event, or just
              want to be the brand everyone's talking about — we'll put your message
              in motion. Request a free quote and we'll map out a route strategy
              tailored to your goals.
            </p>
            <div className="about-cta-actions">
              <button className="btn btn-primary btn-lg" onClick={onOpenModal}>
                Get a Free Quote
                <Icon name="arrow" size={18} />
              </button>
              <button className="btn btn-outline btn-lg" onClick={onNavigateHome}>
                Explore Our Services
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
