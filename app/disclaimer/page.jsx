import React from 'react';

export default function Disclaimer() {
  return (
    <div className='text-black bg-white'>
    <div className="max-w-3xl mx-auto py-10 px-5">
      <h1 className="text-3xl text-center font-bold mb-1">Disclaimer</h1>
      <p className="mb-5 text-center">Last updated: September 12, 2024</p>

      <h2 className="text-2xl font-semibold mb-4">Interpretation and Definitions</h2>

      <h4 className="text-xl font-semibold mb-2">Interpretation</h4>
      <p className="mb-4">
        The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or plural.
      </p>

      <h4 className="text-xl font-semibold mb-2">Definitions</h4>
      <p className="mb-4">For the purposes of this Disclaimer:</p>
      <ul className="list-disc ml-6 mb-5">
        <li>
          <strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Disclaimer) refers to Free Project.
        </li>
        <li>
          <strong>Service</strong> refers to the Website.
        </li>
        <li>
          <strong>You</strong> means the individual accessing the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.
        </li>
        <li>
          <strong>Website</strong> refers to Free Project, accessible from{' '}
          <a
            href="https://www.freeproject.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            www.freeproject.in
          </a>
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Disclaimer</h2>
      <p className="mb-4">
        The information contained on the Service is for general information purposes only. The Company assumes no responsibility for errors or omissions in the contents of the Service.
      </p>
      <p className="mb-4">
        In no event shall the Company be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence, or other tort, arising out of or in connection with the use of the Service or the contents of the Service. The Company reserves the right to make additions, deletions, or modifications to the contents on the Service at any time without prior notice.
      </p>
      <p className="mb-4">
        The Company does not warrant that the Service is free of viruses or other harmful components.
      </p>

      <h2 className="text-2xl font-semibold mb-4">External Links Disclaimer</h2>
      <p className="mb-4">
        The Service may contain links to external websites that are not provided or maintained by or in any way affiliated with the Company.
      </p>
      <p className="mb-4">
        Please note that the Company does not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Errors and Omissions Disclaimer</h2>
      <p className="mb-4">
        The information given by the Service is for general guidance on matters of interest only. Even if the Company takes every precaution to ensure that the content of the Service is both current and accurate, errors can occur. The Company is not responsible for any errors or omissions or for the results obtained from the use of this information.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Fair Use Disclaimer</h2>
      <p className="mb-4">
        The Company may use copyrighted material which has not always been specifically authorized by the copyright owner. The Company believes this constitutes "fair use" as provided for in section 107 of the United States Copyright law.
      </p>
      <p className="mb-4">
        If You wish to use copyrighted material from the Service for your own purposes that go beyond fair use, You must obtain permission from the copyright owner.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Views Expressed Disclaimer</h2>
      <p className="mb-4">
        The Service may contain views and opinions which are those of the authors and do not necessarily reflect the official policy or position of any other author, agency, organization, employer, or company, including the Company.
      </p>
      <p className="mb-4">
        Comments published by users are their sole responsibility, and the users will take full responsibility for any libel or litigation that results from something written in a comment. The Company is not liable for any comment published by users and reserves the right to delete any comment for any reason.
      </p>

      <h2 className="text-2xl font-semibold mb-4">No Responsibility Disclaimer</h2>
      <p className="mb-4">
        The information on the Service is provided with the understanding that the Company is not engaged in rendering legal, accounting, tax, or other professional advice and services. As such, it should not be used as a substitute for consultation with professional advisers.
      </p>
      <p className="mb-4">
        In no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages arising out of or in connection with your use of the Service.
      </p>

      <h2 className="text-2xl font-semibold mb-4">"Use at Your Own Risk" Disclaimer</h2>
      <p className="mb-4">
        All information in the Service is provided "as is", with no guarantee of completeness, accuracy, timeliness, or the results obtained from the use of this information. The Company makes no warranty of any kind, express or implied.
      </p>
      <p className="mb-4">
        The Company will not be liable for any decision made or action taken in reliance on the information provided by the Service or for any consequential, special, or similar damages.
      </p>

      {/* New sections added as per your request */}
      <h2 className="text-2xl font-semibold mb-4">Digital Product Sales Disclaimer</h2>
      <p className="mb-4">
        ProjectBuy sells both paid and free digital products (projects). All sales of paid digital products are final, and no refunds will be provided once a purchase is completed. Free digital products are provided as-is, with no warranty or guarantee of any kind.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Google Ads Disclaimer</h2>
      <p className="mb-4">
        ProjectBuy displays ads provided by Google AdSense. We do not control the content of these ads and do not endorse any products or services advertised. Ads are served based on user behavior, and cookies may be used by Google to provide personalized advertising.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
      <p className="mb-4">
        If you have any questions about this Disclaimer, You can contact Us:
      </p>
      <ul className="list-disc ml-6">
        <li>Email: <a href="mailto:syedfaizan443@gmail.com" className="text-blue-600 hover:underline">syedfaizan443@gmail.com</a></li>
        <li>By visiting this page on our website: <a href="https://freeproject.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://freeproject.in</a></li>
      </ul>
    </div>
    </div>
  );
}
