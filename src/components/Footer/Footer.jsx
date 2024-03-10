import styled from "./footer.module.css";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa";

function Footer() {
  return (
    <div className={styled.footerWrapper}>
      <div className={styled.footer}>
        <ul>
          <li>
            <FaTelegramPlane />{" "}
          </li>
          <li>
            <FaInstagram />
          </li>
          <li>
            <FaYoutube />
          </li>
          <li>
            <FaPhoneVolume />
          </li>
        </ul>
        <span>Number:09128829499</span>
        <span>Email:farinbina94@gmail.com</span>
      </div>
    </div>
  );
}

export default Footer;
