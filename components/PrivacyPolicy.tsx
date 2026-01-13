import React, { useState } from 'react';

interface PrivacyPolicyProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ isOpen = false, onClose }) => {
  const [open, setOpen] = useState(isOpen);

  const handleClose = () => {
    setOpen(false);
    onClose?.();
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <button
        onClick={handleOpen}
        className="privacy-policy-trigger"
        aria-label="Open Privacy Policy"
      >
        Privacy Policy
      </button>

      {open && (
        <div className="privacy-policy-modal-overlay" onClick={handleClose}>
          <div
            className="privacy-policy-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="privacy-policy-header">
              <h2>Privacy Policy</h2>
              <button
                className="privacy-policy-close-btn"
                onClick={handleClose}
                aria-label="Close Privacy Policy"
              >
                ×
              </button>
            </div>

            <div className="privacy-policy-content">
              <section>
                <h3>1. Introduction</h3>
                <p>
                  Welcome to Choinki Gizycko. We are committed to protecting your privacy and ensuring you have a positive experience on our website and application.
                </p>
              </section>

              <section>
                <h3>2. Information We Collect</h3>
                <p>
                  We may collect information about you in the following ways:
                </p>
                <ul>
                  <li><strong>Personal Information:</strong> Name, email address, phone number, and other details you provide directly.</li>
                  <li><strong>Usage Data:</strong> Information about how you interact with our services, including IP address, browser type, and pages visited.</li>
                  <li><strong>Cookies:</strong> We use cookies to enhance your experience and analyze site usage.</li>
                </ul>
              </section>

              <section>
                <h3>3. How We Use Your Information</h3>
                <p>
                  We use the information we collect to:
                </p>
                <ul>
                  <li>Provide and improve our services</li>
                  <li>Communicate with you about updates and offers</li>
                  <li>Analyze usage patterns and preferences</li>
                  <li>Ensure security and prevent fraud</li>
                </ul>
              </section>

              <section>
                <h3>4. Data Protection</h3>
                <p>
                  We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </section>

              <section>
                <h3>5. Third-Party Sharing</h3>
                <p>
                  We do not sell or rent your personal information to third parties. We may share information with service providers who assist us in operating our website and conducting our business, all subject to confidentiality obligations.
                </p>
              </section>

              <section>
                <h3>6. Your Rights</h3>
                <p>
                  Depending on your location, you may have the right to:
                </p>
                <ul>
                  <li>Access your personal data</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your data</li>
                  <li>Opt-out of certain communications</li>
                </ul>
              </section>

              <section>
                <h3>7. Contact Us</h3>
                <p>
                  If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
                </p>
                <p>
                  <strong>Email:</strong> privacy@choinki-gizycko.com<br />
                  <strong>Address:</strong> Gizycko, Poland
                </p>
              </section>

              <section>
                <h3>8. Policy Updates</h3>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
                </p>
                <p>
                  <strong>Last Updated:</strong> January 13, 2026
                </p>
              </section>
            </div>

            <div className="privacy-policy-footer">
              <button
                className="privacy-policy-accept-btn"
                onClick={handleClose}
              >
                I Understand
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .privacy-policy-trigger {
          background-color: transparent;
          border: none;
          cursor: pointer;
          text-decoration: underline;
          color: #007bff;
          padding: 0;
          font-size: inherit;
        }

        .privacy-policy-trigger:hover {
          color: #0056b3;
        }

        .privacy-policy-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }

        .privacy-policy-modal {
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          max-width: 800px;
          max-height: 80vh;
          overflow-y: auto;
          width: 90%;
          z-index: 1001;
        }

        .privacy-policy-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
          border-bottom: 1px solid #e0e0e0;
        }

        .privacy-policy-header h2 {
          margin: 0;
          font-size: 24px;
          font-weight: 600;
        }

        .privacy-policy-close-btn {
          background: none;
          border: none;
          font-size: 28px;
          cursor: pointer;
          color: #666;
          padding: 0;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .privacy-policy-close-btn:hover {
          color: #000;
        }

        .privacy-policy-content {
          padding: 20px;
          font-size: 14px;
          line-height: 1.6;
          color: #333;
        }

        .privacy-policy-content section {
          margin-bottom: 20px;
        }

        .privacy-policy-content h3 {
          font-size: 16px;
          font-weight: 600;
          margin: 15px 0 10px 0;
          color: #222;
        }

        .privacy-policy-content p {
          margin: 8px 0;
        }

        .privacy-policy-content ul {
          margin: 10px 0;
          padding-left: 20px;
        }

        .privacy-policy-content li {
          margin: 6px 0;
        }

        .privacy-policy-footer {
          padding: 20px;
          border-top: 1px solid #e0e0e0;
          display: flex;
          justify-content: flex-end;
        }

        .privacy-policy-accept-btn {
          background-color: #007bff;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 4px;
          cursor: pointer;
          font-size: 14px;
          font-weight: 500;
        }

        .privacy-policy-accept-btn:hover {
          background-color: #0056b3;
        }

        @media (max-width: 600px) {
          .privacy-policy-modal {
            width: 95%;
            max-height: 90vh;
          }

          .privacy-policy-header h2 {
            font-size: 20px;
          }

          .privacy-policy-content {
            font-size: 13px;
            padding: 15px;
          }

          .privacy-policy-header {
            padding: 15px;
          }
        }
      `}</style>
    </>
  );
};

export default PrivacyPolicy;
