import photo from "./images/hero-desktop.jpg";
import bgsvg from "./images/bg-pattern-desktop.svg";

import Main from "./components/Main";

function App() {
  return (
    <div
      className="flex"
      style={{
        backgroundImage: `url(${bgsvg})`,
        width: "100vw",
        height: "100vh",
      }}
    >
      <div className="flex flex-col container w-100 mt-24 ml-72">
        <div className="flex items-center gap-5 mb-24">
          <div className="flex w-12 h-12 rounded-full bg-gradient-to-r from-light_linear to-dark_linear">
            <div className="w-10 h-10 bg-white mx-auto my-auto rounded-full"></div>
          </div>
          <h2 className="uppercase text-dark font-semibold text-lg tracking-wide">
            base <br /> apparel
          </h2>
        </div>
        <Main />
      </div>
      <img className="h-screen object-cover" src={photo} alt="hero-desktop" />
    </div>
  );
}

export default App;
