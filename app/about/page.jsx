import React from 'react'


export default function About() {
  return (
    <div className='text-black bg-white'>
    <div className="max-w-3xl mx-auto py-10 px-5">
      <h1 className="text-3xl text-center font-bold mb-4">About Us</h1>
      <p className="mb-6">
        Welcome to <strong>FreeProject</strong>, a small but dedicated company with a passion for providing digital projects that make a difference. We believe in empowering individuals and businesses by offering both free and paid project solutions, catering to various needs across the digital landscape.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Our Team</h2>
      <p className="mb-6">
        We are a two-member team, each bringing unique skills and expertise to ensure the success of FreeProject.
      </p>
      <ul className="list-disc list-inside mb-6">
        <li><strong>Faizan</strong> - CEO & Full-Stack Developer</li>
        <li><strong>Muzammil</strong> - COO, ML/AI Developer, and Tester</li>
      </ul>
      <p className="mb-6">
        Both of us are graduates with a deep interest in technology and innovation. We aim to deliver projects that meet the needs of modern users, combining quality with affordability.
      </p>
      <h2 className="text-2xl font-semibold mb-2">What We Do</h2>
      <p className="mb-6">
        At FreeProject, we offer a wide range of digital projects, both free and paid, tailored for individuals and businesses. Whether you are looking for ready-made solutions or seeking customized projects, we have got you covered.
      </p>
      <p className="mb-6">
        Our mission is to make digital solutions accessible to everyone while maintaining high standards of quality and support.
      </p>
    </div>
    </div>
  );
}
