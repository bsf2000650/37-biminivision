'use client'
import Image from "next/image";
import "../../stylesComponents/about.css";
import Link from "next/link";
import BiminivisionLogo from "../../../public/images/biminivision-logo.png";
import Icl from "../../../public/images/ICLs@300x.png";
import { FaPhoneAlt } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import ReactPlayer from "react-player/youtube";


const page = () => {
    // window.onload = function() {
    //     document.getElementById('autoplay').play()
    // }
  return (
    <>
      {/* Header starts here */}
      <header>
        <nav>
          <ul className="links">
            <li className="about">
              <span>
                <Link href="/about">About</Link>
              </span>
              <span>
                <MdKeyboardArrowDown className="arrowDown" />
              </span>
            </li>
            <li className="procedures">
              <span>
                <Link href="/procedures">Procedures</Link>
              </span>
              <span>
                <MdKeyboardArrowDown className="arrowDown" />
              </span>
            </li>
            <li>
              <Link href="/pricing">Pricing</Link>
            </li>
            <li>
              <Link href="/testimonials">Testimonials</Link>
            </li>
            <li>
              <Link href="espanol">español</Link>
            </li>
          </ul>
          <ul className="logo">
            <li>
              <Link href="/">
                <Image
                  src={BiminivisionLogo}
                  width={100}
                  height={100}
                  quality={100}
                  alt="biminivision"
                  className="imgLogo"
                />
              </Link>
            </li>
          </ul>
          <ul className="contact">
            <li>
              <span className="phone">
                <FaPhoneAlt />
              </span>
              <span>(201) 221-2020</span>
            </li>
            <li className="scheduleNowBtn">
              <Link href="/schedule-now">SCHEDULE NOW</Link>
            </li>
          </ul>
        </nav>
      </header>
      {/* Header ends here */}

      {/* Free starts here */}
      <section className="free">
        <h1>BE FREE FROM READERS</h1>
        <h3>SCHEDULE COMPLETELY ONLINE, NO PHONE CALLS NECESSARY</h3>
        <div className="free-innerDiv">
          <span>
            <Link href="download-app">DOWNLOAD OUR APP</Link>
          </span>
          <span>
            <Link href="vision-correction-assessment">
              TAKE THE VISION CORRECTION ASSESSMENT
            </Link>
          </span>
          <span>
            <Link href="schedule-consultant">SCHEDULE A CONSULTANT</Link>
          </span>
        </div>
      </section>
      {/* Free ends here */}

      {/* Search for vision correction starts here */}
      <section className="visionCorrectionSearch">
        <h1>
          Your Search for Vision Correction & Eye Surgery in South Florida Ends
          Here.
        </h1>
        <div className="firstDiv">
          <p>
            Dr. Hirabayashi and Dr. Virdi share a passion for vision correction
            surgery and started Bimini Vision in sunny Fort Myers to free
            patients from glasses.
          </p>
          <p>Vision Correction is all we do! </p>
          <p>We offer every modern vision correction solution including:</p>
        </div>
        <div className="proceduresList">
          <ul>
            <li>
              <Link href="/icl">
                <div>
                  <Image
                    src={Icl}
                    width={40}
                    height={40}
                    quality={100}
                    className="img"
                  />
                </div>
                <div className="proceduresListDetails">
                  <p className="p1">ICL</p>
                  <p className="p2">Implantable Contact Lens</p>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/icl">
                <div>
                  <Image src={Icl} width={40} height={40} quality={100} />
                </div>
                <div className="proceduresListDetails">
                  <p className="p1">ICL</p>
                  <p className="p2">Implantable Contact Lens</p>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/icl">
                <div>
                  <Image src={Icl} width={40} height={40} quality={100} />
                </div>
                <div className="proceduresListDetails">
                  <p className="p1">ICL</p>
                  <p className="p2">Implantable Contact Lens</p>
                </div>
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link href="/icl">
                <div>
                  <Image src={Icl} width={40} height={40} quality={100} />
                </div>
                <div className="proceduresListDetails">
                  <p className="p1">ICL</p>
                  <p className="p2">Implantable Contact Lens</p>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/icl">
                <div>
                  <Image src={Icl} width={40} height={40} quality={100} />
                </div>
                <div className="proceduresListDetails">
                  <p className="p1">ICL</p>
                  <p className="p2">Implantable Contact Lens</p>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/icl">
                <div>
                  <Image src={Icl} width={40} height={40} quality={100} />
                </div>
                <div className="proceduresListDetails">
                  <p className="p1">ICL</p>
                  <p className="p2">Implantable Contact Lens</p>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </section>
      {/* Search for vision correction ends here */}
    </>
  );
};

export default page;
