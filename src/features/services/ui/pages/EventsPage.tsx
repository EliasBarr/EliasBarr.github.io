import React from 'react';
import { TitlePageCard } from '../../../../core/common/ui/components';
import EventContact from '../components/EventContact';
import eventsBanner from '../../../../assets/events_banner_page.png';
import eventsBannerContact from '../../../../assets/events_banner_contact.png';
import { SOCIAL_LINKS } from '../../../../core/constants/contactInfo';
import '../css/EventsPage.css';

const EventsPage: React.FC = () => {
  const handleContactClick = () => {
    window.open(SOCIAL_LINKS.whatsapp, '_blank');
  };

  return (
    <div className="events-page">
      <div className="events-banner">
        <TitlePageCard 
          assetPath={eventsBanner}
          title="EVENTS"
          alt="Events banner"
        />
      </div>
      
      <div className="events-content">
        <div className="events-description">
          <h2 className="events-subtitle font-heading">
            Every event has its own energy, rhythm, and story.
            <br />
            I document real moments as they happen — from intimate gatherings to large-scale celebrations.
          </h2>
        </div>

        <div className="events-coverage-box">
          <h3 className="coverage-title font-body">Events I cover include:</h3>
          <ul className="coverage-list font-body">
            <li>Corporate events & brand activations</li>
            <li>Concerts & nightlife</li>
            <li>Private parties & birthdays</li>
            <li>Weddings & engagements</li>
            <li>Cultural & community events</li>
            <li>Launch events & pop-ups</li>
          </ul>
        </div>

        <div className="how-it-works">
          <h2 className="how-it-works-title font-heading">How event coverage works</h2>
          
          <div className="work-steps">
            <div className="work-step">
              <div className="step-number font-heading">1.</div>
              <div className="step-content">
                <h3 className="step-title font-body">We talk first</h3>
                <p className="step-description font-body">We discuss the type of event, duration, location, and expectations.</p>
              </div>
            </div>

            <div className="work-step">
              <div className="step-number font-heading">2.</div>
              <div className="step-content">
                <h3 className="step-title font-body">Tailored coverage</h3>
                <p className="step-description font-body">Each event is quoted based on its real needs — hours, deliverables, complexity, and usage.</p>
              </div>
            </div>

            <div className="work-step">
              <div className="step-number font-heading">3.</div>
              <div className="step-content">
                <h3 className="step-title font-body">Professional execution</h3>
                <p className="step-description font-body">Discreet presence, adaptability to changing environments, and focus on real moments.</p>
              </div>
            </div>

            <div className="work-step">
              <div className="step-number font-heading">4.</div>
              <div className="step-content">
                <h3 className="step-title font-body">Delivery</h3>
                <p className="step-description font-body">Digital high-resolution gallery, delivered within an agreed timeframe.</p>
              </div>
            </div>

            <div className="work-step">
              <div className="step-number font-heading">5.</div>
              <div className="step-content">
                <h3 className="step-title font-body">What the coverage includes</h3>
                <p className="step-description font-body">Event coverage includes professional photography, high-resolution edited images, and an online gallery for easy access and download. Image selection is adapted to the client's intended use, whether for social media, press, internal use, or personal memories.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <EventContact 
        title="Let's Talk About Your Event"
        buttonText="Contact Me"
        onButtonClick={handleContactClick}
        imageUrl={eventsBannerContact}
        imageAlt="Event photography background"
      />

      {/* <ContactSection /> */}
    </div>
  );
};

export default EventsPage;

