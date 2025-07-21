import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const[ showPrivacyPolicy, setShowPrivacyPolicy ] = React.useState(false);
  const[ showTermsOfService, setShowTermsOfService ] = React.useState(false);
  const[ showCookiePolicy, setShowCookiePolicy ] = React.useState(false);
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-blue-900 text-white pt-16 pb-8 px-6"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Company Overview */}
        <div>
          <h2 className="text-2xl font-bold mb-4">SecureLife Insurance</h2>
          <p className="text-sm text-gray-200">
            Providing peace of mind through dependable insurance services for over 25 years. Protecting lives, assets, and futures — because you matter.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
          <Link to="/About">  <li><a href="#" className="hover:text-blue-300 transition">About Us</a></li> </Link>
        <Link to="Services">   <li><a href="#" className="hover:text-blue-300 transition">Our Services</a></li></Link> 
          <Link to="Staffs">  <li><a href="#" className="hover:text-blue-300 transition">Meet the Team</a></li></Link>
          <Link to="Openings"> <li><a href="#" className="hover:text-blue-300 transition">Careers</a></li></Link> 
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
           <Link to="/Faqs"> <li><a href="#" className="hover:text-blue-300 transition">FAQs</a></li></Link>
          <Link to="contact">  <li><a href="#" className="hover:text-blue-300 transition">Contact Us</a></li></Link>
           <Link to="Quote"> <li><a href="#" className="hover:text-blue-300 transition">Get a Quote</a></li></Link>
           <Link to="Claim"> <li><a href="#" className="hover:text-blue-300 transition">Claim Status</a></li> </Link>
          </ul>
        </div>

        {/* Legal & Social */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Legal</h3>
          <ul className="space-y-2 text-sm mb-4">

<li>
  <a
    href="#"
    className="hover:text-blue-300 transition"
    onClick={(e) => {
      e.preventDefault();
      setShowPrivacyPolicy(!showPrivacyPolicy);
    }}
  >
    Privacy Policy
  </a>
</li>
{showPrivacyPolicy && (
  <div className="bg-white text-blue-900 p-4 rounded shadow mt-2 text-xs">
    <strong>Company</strong>, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, store, and protect your data.<br /><br />
    We collect personal details like name, contact information, and insurance history to provide our services effectively. All information is kept confidential and used strictly for policy management, claims processing, customer service, and legal compliance.<br /><br />
    We do not share your data with third parties without your consent, except where required by law or for necessary service provision through trusted partners.<br /><br />
    Our systems are secured with the latest technology to protect against unauthorized access. You have the right to access, update, or request deletion of your personal data at any time.<br /><br />
    For any questions regarding your privacy, please contact us via email.
  </div>
)}

  <li>
    <a
      href="#"
      className="hover:text-blue-300 transition"
      onClick={(e) => {
        e.preventDefault();
        setShowTermsOfService(!showTermsOfService);
      }}
    >
      Terms of Service
    </a>
  </li>
  <li>
    <a
      href="#"
      className="hover:text-blue-300 transition"
      onClick={(e) => {
        e.preventDefault();
        setShowCookiePolicy(!showCookiePolicy);
      }}
    >
      Cookie Policy
    </a>
  </li>
  
{showTermsOfService && (
  <div className="bg-white text-blue-900 p-4 rounded shadow mt-2 text-xs">
    <strong>Terms of Service</strong><br /><br />
    Welcome to SecureLife Insurance. By accessing or using our services, you agree to be bound by the following Terms of Service. Please read them carefully.<br /><br />
    <strong>1. Eligibility & Acceptance</strong><br />
    Our insurance services are available to individuals and businesses who meet our underwriting criteria. By applying for a policy or using our platform, you confirm that you are legally capable of entering into binding contracts.<br /><br />
    <strong>2. Policy Coverage</strong><br />
    All insurance policies are subject to specific terms, conditions, exclusions, and limitations as outlined in your policy document. It is your responsibility to review your policy and ensure it meets your needs.<br /><br />
    <strong>3. Premiums & Payments</strong><br />
    Premiums must be paid on or before the due dates to maintain continuous coverage. Failure to make timely payments may result in policy cancellation or claim denial.<br /><br />
    <strong>4. Claims & Disputes</strong><br />
    Claims must be submitted in accordance with our claims process. We reserve the right to investigate claims and request supporting documentation. Any disputes will be handled in accordance with applicable laws and may be subject to arbitration.<br /><br />
    <strong>5. User Responsibilities</strong><br />
    You agree to provide accurate, complete, and updated information during the application and claim process. Misrepresentation may lead to denial of coverage or cancellation.<br /><br />
    <strong>6. Privacy</strong><br />
    Your data is protected under our Privacy Policy. We collect and process personal information only as necessary to provide services and comply with regulatory obligations.<br /><br />
    <strong>7. Termination</strong><br />
    We reserve the right to suspend or terminate services for violations of these terms or misuse of our platform.<br /><br />
    <strong>8. Amendments</strong><br />
    We may update these Terms of Service from time to time. Changes will be posted on our website, and continued use of our services constitutes acceptance of those changes.<br /><br />
    For more information, contact us via email.
  </div>
)}

{showCookiePolicy && (
  <div className="bg-white text-blue-900 p-4 rounded shadow mt-2 text-xs">
    <strong>Cookie Policy</strong><br /><br />
    We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. By continuing to use our site, you consent to our use of cookies. You can manage your cookie preferences in your browser settings.<br /><br />
    For more information, contact us via email.
  </div>
)}

          </ul>

          
          </div>
        </div>
      

      {/* Bottom Note */}
      <div className="mt-12 text-center text-sm text-gray-400 border-t border-gray-700 pt-6">
        &copy; {new Date().getFullYear()} SecureLife Insurance. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
