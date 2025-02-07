import React, { useState } from 'react';
import '../Styles/Home.css';
import communityData from '../json_community.json';
import membersData from '../json_members_clubs_eventbookings_payments.json';
import caringData from '../json_caring.json';

function Home() {
  const [activeDot, setActiveDot] = useState(0);

  const handleDotClick = (index) => {
    setActiveDot(index);
  };

  const metrics = membersData;

  return (
    <>
      <section className="hero-section">
        <div className="hero-content">
          <div className="text-content">
            <h1>Lessons and insights <span>from 8 years</span></h1>
            <p>Where to grow your business as a photographer: site or social media?</p>
            <button className="register-btn">Register</button>
          </div>
          <div className="image-content">
            <img src="/Images/illustration_home.png" alt="Hero Illustration" />
          </div>
        </div>
        <div className="dot-navigation">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              className={`dot ${index === activeDot ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      <section className="clients-section">
        <div className="clients-content">
          <h2>Our Clients</h2>
          <p>We have been working with some Fortune 500+ clients</p>
        </div>
        <div className="clients-logos">
          {[1, 2, 3, 4, 5, 6, 7].map((num) => (
            <div key={num} className="logo-container">
              <img 
                src={`/Images/Clients_Home/logo${num}.png`} 
                alt={`Client Logo ${num}`} 
                className="client-logo"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="community-section">
        <h2 className="section-title">Manage your entire community<br></br> in a single system</h2>
        <p className="description">Who is Nextcent suitable for?</p>
      </section>

      <section className="community-cards">
        {communityData.items.map((item, index) => (
          <div key={index} className="community-card">
            <div className="card-content">
              <div className="card-icon">
                <img src={item.image} alt={item.name} />
              </div>
              <h3 className="card-title">{item.name}</h3>
              <p className="card-description">{item.description}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="unlock-section">
        <div className="unlock-image">
          <img src="/Images/rafiki.png" alt="Unlock Illustration" />
        </div>
        <div className="unlock-content">
          <div className="unlock-text">
            <h2 className="unlock-title">The unseen of spending three<br></br> years at Pixelgrade</h2>
            <p className="unlock-description">
              When joining the JustGo Community, your success becomes our success. In other words, 
              our Customer Success team will be on hand from day one to ensure we understand your 
              requirements, share your goals and work with you for a smooth adoption of our software.
            </p>
          </div>
          <button className="learn-more-btn2">Learn More</button>
        </div>
      </section>

      <div className="background-container">
        <section className="section-heading">
          <div className="heading-content">
            <h2 className="section-title">Helping a local<br></br> <span>business reinvent itself</span></h2>
            <p className="heading-description">We reached here with our hard work and dedication</p>
          </div>
        </section>

        <section className="metrics-section">
          <div className="metrics-grid">
            {metrics.map((metric, index) => (
              <div key={index} className="metric-item">
                <img src={`/Images/Helping_a_local_bussiness/${metric.type.replace(' ', '_')}.png`} alt={metric.type} />
                <div className="text-container">
                  <h3>{metric.number}</h3>
                  <p>{metric.type}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>


      <section className="calendar-section">
        <div className="calendar-image">
          <img src="/Images/mobile-login.png" alt="Mobile Login" />
        </div>
        <div className="calendar-content">
          <div className="calendar-text">
            <h2 className="calendar-title">How to design your site footer like we did</h2>
            <p className="calendar-description">
              One event calendar shared across National, Regional and Club events to simplify your event experience. 
              Allowing you to create waiting lists, share data capture, issue credential for course completion, 
              apply smart purchasing rules and much more.
            </p>
          </div>
          <button className="learn-more-btn">Learn More</button>
        </div>
      </section>

      <div className="customer-background">
        <section className="customers-section">
          <div className="customer-image">
            <img src="/Images/Customers_images/customers_image.png" alt="Customer" />
          </div>
          <div className="customer-content">
            <div className="content">
              <p className="customer-quote">
                "We have enjoyed working with the JustGo system to setup and go live with our new membership platform. 
                The initial effort to organise it along the lines of how our sport currently works was quick and relatively easy. 
                The new system has already massively improved the time and effort it takes to setup and process member and club applications. 
                It will help us to communicate with people in our sport in a much more effective way, and collect data to help us improve how our sport is governed."
              </p>
              <div className="customer-info">
                <h4 className="customer-name">Tim Smith</h4>
                <p className="customer-title">British Dragon Boat Racing Association</p>
              </div>
            </div>
            <div className="customer-footer">
              <div className="logo-container">
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <div key={num} className="logo">
                    <img src={`/Images/Customers_images/logo${num}.png`} alt={`Logo ${num}`} />
                  </div>
                ))}
              </div>
              <div className="meet-customers">
                <span>Meet all customers</span>
                <img src="/Images/Customers_images/arrow_right_green.png" alt="Arrow right" />
              </div>
            </div>
          </div>
        </section>
      </div>


      <section className="community-updates">
  <div className="caring-section">
    <h2 className="section-title">Caring is the new marketing</h2>
    <p className="description">
      The Nexcent blog is the best place to read about the latest membership insights,<br></br>
      trends and more. See who's joining the community,
       read about how our community <br></br>
      members are increasing their membership income and lot's more.
    </p>
  </div>
  <div className="caring-cards">
    {caringData.cards.map((card, index) => (
      <div key={index} className="caring-card">
        <div className="card-image">
          <img src={`/Images/caring/image${index + 18}.png`} alt={card.description} />
        </div>
        <div className="cards-content">
          <p className="card-text">{card.description}</p>
          <div className="read-more">
            <span>{card.read_more}</span>
            <img src="/Images/Customers_images/arrow_right_green.png" alt="Read more" />
          </div>
        </div>
      </div>
    ))}
  </div>
</section>
    </>
  );
}

export default Home;