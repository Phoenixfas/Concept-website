import "../styles/Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__top">
        <div className="footer__content">
          <div className="holder">
            <p className="footer__text">Office Address: </p>
            <p>Addis Ababa, Bole, around Medanialem</p>
          </div>
        </div>
        <div className="footer__content">
          <div className="holder">
            <p className="footer__text">Email Address: </p>
            <p>abc123@gmail.com</p>
          </div>
          <div className="holder">
            <p className="footer__text">Telephone: </p>
            <p>+251 911 1213 14</p>
          </div>
        </div>
        <div className="footer__content">
          <div className="holder">
            <p className="footer__text">Social Media: </p>
            <p>Instagram, Facebook, Tiktok, Telegram</p>
          </div>
        </div>
      </div>
      <div className="footer__bottom">Made By Fasika Dagnachew</div>
    </div>
  );
}
