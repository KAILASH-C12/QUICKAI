import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <>
      <footer className="custom-footer">
        <div className="footer-top">
          <div className="footer-left">
            <img className="footer-logo" src={assets.logo} alt="logo" />
            <p className="footer-text">
              Experience the power of AI with QuickAI. <br />
              Transform your content creation with our suite of premium AI
              tools. Write articles, generate images, and enhance your workflow.
            </p>
          </div>
          <div className="footer-right">
            <div className="footer-company">
              <h2>Company</h2>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Contact us</a>
                </li>
                <li>
                  <a href="#">Privacy policy</a>
                </li>
              </ul>
            </div>
            <div className="footer-newsletter">
              <h2>Subscribe to our newsletter</h2>
              <p>
                The latest news, articles, and resources, sent to your inbox
                weekly.
              </p>
              <div className="newsletter-form">
                <input type="email" placeholder="Enter your email" />
                <button id="subscribe">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
        <p className="footer-bottom">
          Copyright 2025 © Great All Stack. All Right Reserved.{" "}
          <span id="name">Kailash Choudhary</span>
        </p>
      </footer>

      <style>{`
        #name{
          color: #2563eb;
          cursor: pointer;
        }
        #subscribe{
          background-color: #5044E5;
          cursor: pointer;
          }
        .custom-footer {
          margin-top: 2.5rem;
          padding: 5rem 1.5rem 0 1.5rem;
          width: 100%;
          color: #6b7280;
          box-sizing: border-box;
          font-family: system-ui, sans-serif;
          box-shadow: 0 0px 20px rgba(0,0,0,0.12), 0 12px 12px rgba(0, 0, 0, 0.14);
        }
        @media (min-width: 768px) {
          .custom-footer {
            padding-left: 4rem;
            padding-right: 4rem;
          }
        }
        @media (min-width: 1024px) {
          .custom-footer {
            padding-left: 6rem;
            padding-right: 6rem;
          }
        }
        @media (min-width: 1280px) {
          .custom-footer {
            padding-left: 8rem;
            padding-right: 8rem;
          }
        }

        .footer-top {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 100%;
          gap: 2.5rem;
          border-bottom: 1px solid rgba(107, 114, 128, 0.3);
          padding-bottom: 1.5rem;
          box-sizing: border-box;
        }
        @media (min-width: 768px) {
          .footer-top {
            flex-direction: row;
          }
        }

        .footer-left {
          max-width: 24rem;
        }

        .footer-logo {
          height: 2.25rem;
        }

        .footer-text {
          margin-top: 1.5rem;
          font-size: 0.875rem;
          line-height: 1.25rem;
          color: #6b7280;
        }

        .footer-right {
          flex: 1 1 auto;
          display: flex;
          align-items: flex-start;
          justify-content: flex-end;
          gap: 5rem;
        }
        @media (max-width: 767px) {
          .footer-right {
            justify-content: flex-start;
          }
        }

        .footer-company h2,
        .footer-newsletter h2 {
          font-weight: 600;
          margin-bottom: 1.25rem;
          color: #1f2937;
          font-size: 1rem;
        }

        .footer-company ul {
          font-size: 0.875rem;
          color: #6b7280;
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .footer-company ul li a {
          color: inherit;
          text-decoration: none;
        }
        .footer-company ul li a:hover {
          text-decoration: underline;
        }

        .footer-newsletter p {
          font-size: 0.875rem;
          margin-bottom: 0.5rem;
          color: #6b7280;
        }

        .newsletter-form {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding-top: 1rem;
        }

        .newsletter-form input[type="email"] {
          border: 1px solid rgba(107, 114, 128, 0.3);
          outline: none;
          width: 100%;
          max-width: 16rem;
          height: 2.25rem;
          border-radius: 0.375rem;
          padding: 0 0.5rem;
          color: #6b7280;
          font-size: 0.875rem;
          box-sizing: border-box;
          transition: box-shadow 0.2s ease;
        }

        .newsletter-form input[type="email"]::placeholder {
          color: #9ca3af;
        }

        .newsletter-form input[type="email"]:focus {
          box-shadow: 0 0 0 2px #4f46e5;
          border-color: transparent;
        }

        .newsletter-form button {
          background-color: #2563eb;
          width: 6rem;
          height: 2.25rem;
          color: white;
          border: none;
          border-radius: 0.375rem;
          cursor: pointer;
          font-size: 0.875rem;
          font-weight: 500;
          transition: background-color 0.2s ease;
        }
        .newsletter-form button:hover {
          background-color: #1e40af;
        }

        .footer-bottom {
          padding-top: 1rem;
          padding-bottom: 1.25rem;
          text-align: center;
          font-size: 0.75rem;
          color: #6b7280;
        }
        @media (min-width: 768px) {
          .footer-bottom {
            font-size: 0.875rem;
          }
        }

        .footer-bottom a {
          color: #2563eb;
          text-decoration: none;
        }
        .footer-bottom a:hover {
          text-decoration: underline;
        }
      `}</style>
    </>
  );
};

export default Footer;
