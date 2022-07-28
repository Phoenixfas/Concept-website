import "../styles/Contact.css";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="contact__left">
        <div className="contact__left__title">
          <h1>Contact Us</h1>
        </div>
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              width="500"
              height="300"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=bole%20&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              title="map"
            ></iframe>
            <br />
          </div>
        </div>
      </div>
      <div className="contact__right">
        <div className="contact__form">
          <label>Name</label>
          <input type="text" />
          <label>Email</label>
          <input type="text" />
          <label>Subject</label>
          <input type="text" />
          <label>Message</label>
          <textarea></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  );
}
