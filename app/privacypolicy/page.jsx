import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className='w-full bg-white text-black'>
    <div style={{ padding: '20px', maxWidth: '900px', margin: '0 auto' }}>
      <h1 className='text-2xl font-bold text-center'>Privacy Policy for FreeProject</h1>

      <p className='mt-2'>
        Welcome to <strong>FreeProject</strong>. This privacy policy explains how we collect, use, and protect your personal information when you use our website, https://www.freeproject.in. Your privacy is important to us, and we are committed to safeguarding your personal data.
      </p>

      <h2 className='text-xl font-bold mt-5'>1. Information We Collect</h2>
      <p>We collect various types of information from our users, including:</p>
      <ul>
        <li><strong>Personal Information:</strong> We collect your name, email address, and phone number when you create an account or make a purchase.</li>
        <li><strong>Payment Information:</strong> We store transaction ID and order ID for processing your purchases, both free and paid projects, via our payment gateway, <strong>Cashfree</strong>. We do not store sensitive payment details like credit card information.</li>
        <li><strong>Cookies and Tracking Technologies:</strong> We use cookies provided by <strong>Clerk</strong> for authentication and other technologies like Google AdSense for advertising. Cookies help us improve your experience and deliver personalized content.</li>
        <li><strong>IP Address:</strong> For security and monitoring purposes, we may collect your IP address when you use our site.</li>
      </ul>

      <h2 className='text-xl font-bold mt-5'>2. How We Use Your Information</h2>
      <p>We use the information we collect for several purposes:</p>
      <ul>
        <li>To process orders for both free and paid projects.</li>
        <li>To provide authentication and secure login through Clerk.</li>
        <li>To display personalized ads through Google AdSense.</li>
        <li>To communicate with you regarding updates, orders, and customer support.</li>
        <li>To analyze website usage and improve our services based on feedback and user interactions.</li>
      </ul>

      <h2 className='text-xl font-bold mt-5'>3. Cookies and Tracking Technologies</h2>
      <p>We use cookies and similar tracking technologies to improve your experience on FreeProject. These cookies are used for:</p>
      <ul>
        <li><strong>Authentication:</strong> Clerk uses cookies to authenticate users securely and store session data.</li>
        <li><strong>Advertising:</strong> Google AdSense uses cookies to serve personalized ads based on your interests and browsing history. You can opt-out of personalized ads by visiting <a href="https://www.google.com/settings/ads">Google Ads Settings</a> or use the <a href="https://www.aboutads.info/">AdChoices</a> opt-out page.</li>
      </ul>
      <p>Users can manage their cookie preferences through browser settings or by adjusting settings on third-party platforms such as Google.</p>

      <h2 className='text-xl font-bold mt-5' >4. Third-Party Services</h2>
      <p>We use the following third-party services that may collect or process your information on our behalf:</p>
      <ul>
        <li><strong>Clerk Authentication:</strong> Clerk handles user authentication and securely stores user information such as email and phone number. For more details, you can view their <a href="https://clerk.dev/legal/privacy">Clerk Privacy Policy</a>.</li>
        <li><strong>Cashfree Payments:</strong> We use Cashfree to process all payment transactions, but we do not store sensitive financial information like credit card details. Cashfree may collect certain transaction-related data. Read the <a href="https://www.cashfree.com/privacypolicy">Cashfree Privacy Policy</a>.</li>
        <li><strong>Google AdSense:</strong> We use Google AdSense to display ads on our website. For more information on how Google uses your data, refer to the <a href="https://policies.google.com/privacy">Google Privacy Policy</a>.</li>
      </ul>

      <h2 className='text-xl font-bold mt-5'>5. User Rights</h2>
      <p>As a user of FreeProject, you have the following rights concerning your personal data:</p>
      <ul>
        <li><strong>Access:</strong> You can request access to the data we store about you at any time.</li>
        <li><strong>Correction:</strong> You have the right to request correction of inaccurate data.</li>
        <li><strong>Deletion:</strong> You can request the deletion of your account and associated data, except for transaction records that we are required to retain for legal purposes.</li>
      </ul>
      <p>To exercise any of these rights, please contact us at <a href="mailto:support@freeproject.in">support@freeproject.in</a>.</p>

      <h2 className='text-xl font-bold mt-5'>6. Data Security</h2>
      <p>We take the security of your personal data seriously. We use industry-standard encryption methods and secure servers to protect your data from unauthorized access or disclosure. While no online service can guarantee 100% security, we are committed to keeping your data safe.</p>

      <h2 className='text-xl font-bold mt-5'>7. No Refund Policy</h2>
      <p>FreeProject operates a strict <strong>No Refund Policy</strong> for digital goods (projects). Once a purchase is made, it is non-refundable. Please review the project details carefully before purchasing.</p>

      <h2 className='text-xl font-bold mt-5'>8. Changes to This Privacy Policy</h2>
      <p>We may update this privacy policy periodically to reflect changes in our practices or legal requirements. Any updates will be posted on this page, and we will notify you by email if the changes are significant.</p>

      <h2 className='text-xl font-bold mt-5'>9. Contact Us</h2>
      <p>If you have any questions or concerns regarding this privacy policy, please reach out to us at:</p>
      <ul>
        <li>Email: <a href="mailto:support@freeproject.in">support@freeproject.in</a></li>
        <li>Phone: +123456789</li>
      </ul>
    </div>
    </div>
  );
}
