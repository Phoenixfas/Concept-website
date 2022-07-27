import "../styles/Home.css";

export default function Home() {
  return (
    <div className="container" id="home">
      <div className="nav">
        <div className="nav__left">
          <span>AFRIOPIA</span>
        </div>
        <div className="nav__right">
          <div className="nav__right__items">
            <a href="#home" className="active">
              Home
            </a>
            <a href="#explore">Explore</a>
            <a href="#tranding">Trending</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="nav__right__btn">Download</div>
        </div>
      </div>
      <div className="home__left"></div>
      <div className="home__right"></div>
    </div>
  );
}
