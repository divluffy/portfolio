import { useState } from "react";
import "./App.css";
import "./components/animat.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
function App() {
  const [page, setPage] = useState("Skills");
  return (
    <div className="App">
      <nav>
        <div className="line_last"></div>
        <div className="line_main">
          <div className="logo_portfolio">
            <span>J</span>
          </div>
          <div className="icons_socail_media">
            <div className="bowl_Svg_icon_soc" style={{ "--i": 1 }}>
              <svg
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.4999 0C7.83622 0 0 8.03289 0 17.9431C0 25.8711 5.01424 32.5966 11.9675 34.9695C12.8418 35.1358 13.1629 34.5802 13.1629 34.1063C13.1629 33.6784 13.1466 32.265 13.1391 30.7657C8.27061 31.8511 7.24331 28.6486 7.24331 28.6486C6.44725 26.5747 5.30026 26.0232 5.30026 26.0232C3.71221 24.9095 5.41995 24.9327 5.41995 24.9327C7.17695 25.059 8.10254 26.7818 8.10254 26.7818C9.66335 29.5243 12.1964 28.7315 13.195 28.2734C13.3521 27.1137 13.8056 26.3218 14.3061 25.8737C10.4191 25.4206 6.33279 23.8818 6.33279 17.0065C6.33279 15.0475 7.01669 13.4469 8.13615 12.19C7.95416 11.7384 7.35517 9.91343 8.30539 7.4419C8.30539 7.4419 9.77463 6.95966 13.1188 9.28113C14.515 8.88328 16.0124 8.68331 17.4999 8.67648C18.9865 8.68331 20.4847 8.88268 21.8835 9.28054C25.2236 6.95907 26.6911 7.44131 26.6911 7.44131C27.6437 9.91253 27.0447 11.7378 26.863 12.1894C27.985 13.4463 28.664 15.0469 28.664 17.0059C28.664 23.8975 24.5702 25.4147 20.6733 25.8592C21.3013 26.416 21.8606 27.5082 21.8606 29.182C21.8606 31.5828 21.8403 33.515 21.8403 34.106C21.8403 34.5835 22.1556 35.143 23.0424 34.9668C29.9916 32.5915 35 25.8681 35 17.9431C34.9997 8.03349 27.1644 0 17.4999 0Z"
                  fill="#FFFEFE"
                />
              </svg>
            </div>
            <div className="bowl_Svg_icon_soc" style={{ "--i": 2 }}>
              <svg
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_44_341)">
                  <path
                    d="M17.5 0C7.83494 0 0 7.83495 0 17.5C0 27.165 7.83494 35 17.5 35C27.165 35 35 27.165 35 17.5C34.9999 7.83495 27.1649 0 17.5 0ZM12.8309 25.9604H8.98864V13.5471H12.8309V25.9604ZM10.8915 11.9214C9.63663 11.9214 8.61935 10.8959 8.61935 9.63096C8.61935 8.36591 9.63677 7.34041 10.8915 7.34041C12.1462 7.34041 13.1635 8.36591 13.1635 9.63096C13.1635 10.8959 12.1463 11.9214 10.8915 11.9214ZM27.2299 25.9604H23.4063V19.4445C23.4063 17.6573 22.7274 16.6597 21.3143 16.6597C19.7763 16.6597 18.9728 17.6987 18.9728 19.4445V25.9604H15.2876V13.5471H18.9728V15.2189C18.9728 15.2189 20.0814 13.1684 22.7135 13.1684C25.3457 13.1684 27.23 14.7756 27.23 18.1005L27.2299 25.9604Z"
                    fill="#FBFEFF"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_44_341"
                    x="0"
                    y="0"
                    width="35"
                    height="35"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_44_341"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_44_341"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
            <div className="bowl_Svg_icon_soc" style={{ "--i": 3 }}>
              <svg
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.625 0H9.375C6.8886 0 4.50403 0.98772 2.74587 2.74587C0.98772 4.50403 0 6.8886 0 9.375L0 20.625C0 23.1114 0.98772 25.496 2.74587 27.2541C4.50403 29.0123 6.8886 30 9.375 30H20.625C23.1114 30 25.496 29.0123 27.2541 27.2541C29.0123 25.496 30 23.1114 30 20.625V9.375C30 6.8886 29.0123 4.50403 27.2541 2.74587C25.496 0.98772 23.1114 0 20.625 0V0ZM27.1875 20.625C27.1875 24.2437 24.2437 27.1875 20.625 27.1875H9.375C5.75625 27.1875 2.8125 24.2437 2.8125 20.625V9.375C2.8125 5.75625 5.75625 2.8125 9.375 2.8125H20.625C24.2437 2.8125 27.1875 5.75625 27.1875 9.375V20.625Z"
                  fill="white"
                />
                <path
                  d="M15 7.5C13.0109 7.5 11.1032 8.29018 9.6967 9.6967C8.29018 11.1032 7.5 13.0109 7.5 15C7.5 16.9891 8.29018 18.8968 9.6967 20.3033C11.1032 21.7098 13.0109 22.5 15 22.5C16.9891 22.5 18.8968 21.7098 20.3033 20.3033C21.7098 18.8968 22.5 16.9891 22.5 15C22.5 13.0109 21.7098 11.1032 20.3033 9.6967C18.8968 8.29018 16.9891 7.5 15 7.5ZM15 19.6875C13.7573 19.686 12.5658 19.1917 11.6871 18.3129C10.8083 17.4342 10.314 16.2427 10.3125 15C10.3125 12.4144 12.4162 10.3125 15 10.3125C17.5837 10.3125 19.6875 12.4144 19.6875 15C19.6875 17.5837 17.5837 19.6875 15 19.6875Z"
                  fill="#FFFEFA"
                />
                <path
                  d="M23.0625 7.93692C23.6144 7.93692 24.0619 7.48949 24.0619 6.93755C24.0619 6.38561 23.6144 5.93817 23.0625 5.93817C22.5105 5.93817 22.0631 6.38561 22.0631 6.93755C22.0631 7.48949 22.5105 7.93692 23.0625 7.93692Z"
                  fill="#FFFEFC"
                />
              </svg>
            </div>
            <div className="bowl_Svg_icon_soc" style={{ "--i": 4 }}>
              <svg
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_44_346)">
                  <path
                    d="M0 17.5C0 7.83656 7.83656 0 17.5 0C27.1634 0 35 7.83656 35 17.5C35 27.1634 27.1634 35 17.5 35C7.83656 35 0 27.1634 0 17.5Z"
                    fill="#FFFDFD"
                  />
                  <path
                    d="M29.872 5.12793C36.7069 11.9629 36.7069 23.0441 29.872 29.872C23.037 36.7069 11.9558 36.7069 5.12793 29.872L29.872 5.12793Z"
                    fill="white"
                  />
                  <path
                    d="M34.6473 21.0056L25.9855 12.3438L15.7719 13.5076L9.5929 23.0723L21.1397 34.619C27.9252 33.1801 33.2648 27.8123 34.6473 21.0056Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M26.6555 14.1214C26.6555 12.6542 25.4705 11.4692 24.0034 11.4692H11.5467C10.0795 11.4692 8.89453 12.6613 8.89453 14.1214V21.2455C8.89453 22.7127 10.0795 23.9047 11.5467 23.9047H23.9963C25.4635 23.9047 26.6485 22.7127 26.6485 21.2455V14.1214H26.6555ZM15.9975 20.6883V14.0015L21.0691 17.3449L15.9975 20.6883Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_44_346"
                    x="0"
                    y="0"
                    width="35"
                    height="35"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_44_346"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_44_346"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <div className="bowl_items">
          <div className="circle_top"></div>
          <div className="circle_outline_top"></div>
          <div className="circle_outline_bottom"></div>
        </div>

        {page === "Skills" || page === "Projects" ? null : (
          <div className="theam2">
            <div className="ch1"></div>
            <div className="ch2"></div>
            <div className="ch3"></div>
            <div className="ch4"></div>
          </div>
        )}

        <div className="menu_list">
          <div
            className="line_bottom_menu"
            style={{
              left:
                page === "About"
                  ? "50px"
                  : page === "Skills"
                  ? "150px"
                  : page === "Projects"
                  ? "255px"
                  : page === "Contact"
                  ? "380px"
                  : null,
              width:
                page === "Projects"
                  ? "73px"
                  : page === "Contact"
                  ? "71px"
                  : null,
            }}
          ></div>
          <div
            onClick={() => setPage("About")}
            className={`bowl_menu_lin ${page === "About" ? "active" : null}`}
          >
            <span>About</span>
          </div>
          <div
            onClick={() => setPage("Skills")}
            className={`bowl_menu_lin ${page === "Skills" ? "active" : null}`}
          >
            <span>Skills</span>
          </div>
          <div
            onClick={() => setPage("Projects")}
            className={`bowl_menu_lin ${page === "Projects" ? "active" : null}`}
          >
            <span>Projects</span>
          </div>
          <div
            onClick={() => setPage("Contact")}
            className={`bowl_menu_lin ${page === "Contact" ? "active" : null}`}
          >
            <span>Contact</span>
          </div>
        </div>

        {page === "About" ? (
          <About />
        ) : page === "Skills" ? (
          <Skills />
        ) : page === "Projects" ? (
          <Projects />
        ) : page === "Contact" ? (
          <Contact />
        ) : null}
      </main>
    </div>
  );
}

export default App;
