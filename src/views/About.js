import React from "react";

const newFeatures = [
  "Register/Sign in with Google account: create an account to save your stuff.",
  "Save Statblocks: Save your statblocks to your account to access later.",
  "Open Statblocks: Open any statblock you've saved before and edit to you're hearts content."
];

const upcoming = [
  "UX improvements to 'Save' and 'Open' for the Statblock Generator",
  "BETA: Pathfinder Second Edition Character Builder. This will eventually be a full-featured builder but I hopw to release a smaller beta version with the basics very soon for use and testing!"
];

const About = props => {
  return (
    <div className="page-container general-content">
      <h1>TableTopTools: Digital tools for better gaming!</h1>
      <p>
        TableTopTools is built and maintained in the free time of a professional
        web developer who happens to be a huge fan of table top gaming. It's
        entirely a labor of love and I'm happy to make my tools available to the
        community. I plan to release new feature updates on an ongoing basis.
      </p>
      <h2>Newly Released!</h2>
      <ul>
        {newFeatures.map(feature => (
          <li>{feature}</li>
        ))}
      </ul>
      <h2>In the Works...</h2>
      <ul>
        {upcoming.map(feature => (
          <li>{feature}</li>
        ))}
      </ul>
      <h2>Contact & Support</h2>
      <p>
        If you have thoughts on how to improve these tools, ideas for new ones,
        or find a bug please let me know by, I'm always happy to hear feedback
        from others!
        <br />
        Send a message to{" "}
        <a href="mailto:joeziemba.dev@gmail.com?subject=[TableTopTools Support]">
          joeziemba.dev@gmail.com
        </a>{" "}
        with [TableTopTools] in the subject line.
      </p>
    </div>
  );
};

export default About;
