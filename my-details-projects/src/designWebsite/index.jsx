import React from "react";
import "./style.css";
import Image1 from "../Assets/image/content-gabby-bernstein-1.png"
import Image2 from "../Assets/image/content-gabor-mate-2.png"
import Image3 from "../Assets/image/content-leader-as-healer.png"
import Image4 from "../Assets/image/content-meditate-become-unstoppable.png"
import Image5 from "../Assets/image/content-power-of-intuition.png"
import Image6 from "../Assets/image/content-the-parenting-map.png"
import Image7 from "../Assets/image/content-two-doors-to-resilience.png"
import Image8 from "../Assets/image/content-unlocking-your-purpose.png"
import ImageBg from "../Assets/image/bg.png"
import AmirGlogau from"../Assets/image/Amir_Glogau.b1e2fffa38bf660dcd513eba8ef612b2.jpg";
import logoWhite from"../Assets/image/logo-white.svg";
import FooterBg from "../Assets/image/footer-bg.png";

const DesignWebSite = () => {
  return (
    <>
          <div class="main-container">
            <div id="header">
              <header>
                <div class="header-img">
                  <img src="https://guidely.com/wp-content/uploads/2021/02/guidely-logo-3.png" />
                </div>
                <div class="header-section header-center-btn">
                  <a class="anchor-home" href="#">
                    <button class="btn btn-0">For individuals</button>
                  </a>
                  <a class="anchor-coaches" href="#">
                    {" "}
                    <button class="btn btn-1">For coaches</button>
                  </a>
                </div>
                <div class="header-section header-last-btn">
                  <a class="anchor-get-Start" href="#">
                    {" "}
                    <button class="btn btn-2">get Started</button>
                  </a>
                  <a class="anchor-Login" href="#">
                    <button class="btn btn-2">Login</button>
                  </a>
                </div>
              </header>
            </div>
            <main>
              <div id="main-section">
                <div class="main-first-section">
                  <h1>Join Guidely Community</h1>
                  <p>
                    Guidely Community is a safe space for exploring your path of
                    personal growth – anytime, anywhere.
                  </p>
                  <p>
                    Join our free Community for access to live events, Guide-led
                    group discussions, discover Guides, connect with like minded
                    peers, access articles and video workshops from global
                    thought leaders.
                  </p>
                  <div class="main-first-section-btn">
                    {" "}
                    <a href="#">
                      {" "}
                      <button class="anchor-btn-get">
                        Get Started{" "}
                        <span className="SpanBtn" >&#8594;</span>
                      </button>
                    </a>
                    <a href="#">
                      {" "}
                      <button class="anchor-btn-login">
                        Login <span className="SpanBtn">&#8594;</span>
                      </button>
                    </a>
                  </div>
                </div>
                <div class="main-second-section">
                  {/* <img class="main-img-2" src={Image1} alt="image" />
                  <img class="main-img-1" src={Image3} alt="image" />
                  <img class="main-img-3" src={Image4} alt="image" />
                  <img class="main-img-5" src={Image8} alt="image" />
                  <img class="main-img-6" src={Image5} alt="image" />
                  <img class="main-img-8" src={Image7} alt="image" />
                  <img class="main-img-9" src={Image9} alt="image" />
                  <img
                    class="main-img-10"
                    src={Image10}
                    alt="image"
                  /> */}
                  <img src={ImageBg} alt="bg" />
                </div>
              </div>
              <div class="center-div">
                <p class="qoute">&#10077;</p>
                <p class="para">
                  Guidely Community is an accelerator for transformation. The
                  powerful connections members make with Guides and with each
                  other are catalysts to great leaps forward in their personal
                  journey. The Community is an inspiration to all.
                </p>
                <div class="inner-section">
                  <img
                    src={AmirGlogau}
                    alt="amir"
                  />
                  <div class="img-description-para">
                    <p class="amir">Amir Glogau</p>
                    <p class="Co-Founder">Co-Founder & CEO</p>
                  </div>
                </div>
              </div>
              <div class="box-center-elements">
                <div class="third-para">
                  <h1>Free Membership Benefits</h1>
                  <ul>
                    <li>
                      Real-time connections and peer support with other members
                      in our private community​
                    </li>
                    <li>
                      Complimentary Guide matching with Guidely co-founder​
                    </li>
                    <li>Access to Guide-led groups​</li>
                    <li>Live monthly event</li>
                    <li>
                      Unlimited access to on-demand video workshops, trainings,
                      and meditations
                    </li>
                    <li>
                      Premium content from our Guides, including books and
                      special sessions
                    </li>
                    <li>Lifetime discounts on private coaching and courses</li>
                    <li>
                      Unlimited access to our premium 21-Day Reclaim Your Self
                      virtual retreat
                    </li>
                    <li>
                      Insider access to key-note workshops with thought leaders
                      like: Gabor Maté, Harville & Helen, Julia Cameron and more
                    </li>
                  </ul>
                </div>
                <div className="btn-section">
                  <a href="#">
                    {" "}
                    <button className="button btn-4">
                      Get Started <span classNameName="SpanBtn" >&#8594;</span>
                    </button>
                  </a>
                </div>
                <div className="div-forth">
                  <h1 className="">Watch free event replays like...</h1>
                </div>
                <div id="imgSectionBtm">
                  <img
                    className="imgSectionBottom imgSection"
                    src={Image1}
                    alt="content-gabby-bernstein-1"
                  />
                  <img
                    className="imgSectionBottom imgSection"
                    src={Image2}
                    alt="content-gabor-mate-2"
                  />
                  <img
                    className="imgSectionBottom imgSectionBtm"
                    src={Image3}
                    alt="content-leader-as-healer"
                  />
                  <img
                    className="imgSectionBottom imgSectionBtm"
                    src={Image4}
                    alt="content-meditate-become-unstoppable"
                  />
                  <img
                    className="imgSectionBottom imgSectionBtm"
                    src={Image5}
                    alt="content-power-of-intuition"
                  />
                  <img
                    className="imgSectionBottom imgSectionBtm"
                    src={Image6}
                    alt="content-the-parenting-map"
                  />
                  <img
                    className="imgSectionBottom imgSectionBtm"
                    src={Image7}
                    alt="content-two-doors-to-resilience"
                  />
                  <img
                    className="imgSectionBottom imgSectionBtm"
                    src={Image8}
                    alt="content-unlocking-your-purpose"
                  />
                </div>
              </div>
            </main>
            <footer>
              <div className="footer-section-posi">
                <div className="footer-section">
                  <img src={logoWhite} alt="logo-white" />
                  <div className="para-footer">
                    <p className="footer-sec-para-span">
                      <span>© 2023 Guidly. All Right Reserved</span>
                      <span>Terms of Use</span>
                      <span>Privacy policy</span>
                    </p>
                    <p className="footer-sec-para">
                      2801 E. Camelback Rd. Suite 200 Phoneix, AZ 85016
                    </p>
                  </div>
                  <div className="icon">
                    <a href="https://www.facebook.com/helloguidely">
                      {" "}
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="https://www.instagram.com/helloguidely/">
                      {" "}
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                    <a href="https://www.tiktok.com/@helloguidely">
                      <i className="fa-brands fa-tiktok"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="footer">
                <img src={FooterBg} alt="footer-bg" className="wave" />
              </div>
              <div className="bg-footer"></div>
            </footer>
          </div>
    
    </>
  );
};
export default DesignWebSite;
