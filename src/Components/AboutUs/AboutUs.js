import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-main">
      <div className="about-header">
        <h2>About Fact-V Tech Lounge</h2>
        <h3>
          Welcome to Fact-V Tech Lounge, the ultimate destination for tech
          enthusiasts and web developers to come together, network, and enjoy a
          delightful blend of technology, food, and camaraderie.
        </h3>
      </div>
      <div className="ourStory">
        <h4>Our Story</h4>
        <p>
          At Fact-V Tech Lounge, we believe in the power of connections. Our
          journey began with a simple idea: to create a unique space where tech
          professionals can unwind, share knowledge, and build meaningful
          relationships in a relaxed and inviting atmosphere.
        </p>
      </div>
      <h4 className="aboutTitle">What We Offer</h4>
      <div className="aboutOffer">
        <div className="sm-card">
          <h5>Tech-Inspired Gatherings</h5>
          <p>
            We curate a series of tech-inspired events, meetups, and networking
            opportunities for developers, designers, and technology enthusiasts.
            Whether you're a front-end guru, a back-end wizard, or somewhere in
            between, our events cater to a diverse range of tech interests.
          </p>
        </div>
        <div className="sm-card">
          <h5>A Gastronomic Experience</h5>
          <p>
            Indulge in a culinary journey like no other. Our lounge and bar &
            grill serve up a delectable array of dishes, from mouthwatering
            burgers to gourmet vegetarian options. Pair your meal with a craft
            beer or a signature cocktail while engaging in tech conversations.
          </p>
        </div>
        <div className="sm-card">
          <h5> Networking and Collaboration</h5>
          <p>
            Fact-V Tech Lounge provides the ideal backdrop for networking and
            collaboration. Meet like-minded professionals, exchange ideas, and
            discover potential collaborators for your next tech project. Our
            events foster an environment where innovation thrives.
          </p>
        </div>
        <div className="sm-card">
          <h5>Expert Talks and Workshops</h5>
          <p>
            Stay updated with the latest industry trends and technologies
            through expert talks and hands-on workshops. Learn from seasoned
            professionals and gain insights that will propel your tech career
            forward.
          </p>
        </div>
      </div>
      <div className="joinUs">
        <h4>Join Us Today</h4>
        <p>
          Whether you're a seasoned developer, a tech enthusiast, or simply
          curious about the world of technology, Fact-V Tech Lounge welcomes you
          to join our vibrant community. Be part of the conversation, forge
          valuable connections, and elevate your tech journey.
        </p>
      </div>
      <div className="about-foot">
        <p>
          For event bookings, reservations, or inquiries, contact us today!
          Let's code, dine, and network together at Fact-V Tech Lounge!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
