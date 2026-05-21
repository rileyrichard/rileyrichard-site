import React from "react";

const Contact: React.FC = () => {
  return (
    <div>
      <p>
        If you wish to contact me, my email is{" "}
        <a className="email" href="mailto:me@rileyrichard.com">
          me@rileyrichard.com
        </a> and my business number is{" "}
        <a className="email" href="tel:5087743994">508-774-3994</a>
      </p>
      <p>
        My timezone is Eastern Standard Time. I usually respond to emails during
        normal working hours, but I occasionally code late at night and can
        respond then.
      </p>
      <p>
        You can also find me on GitHub{" "}
        <a
          className="email"
          href="https://github.com/rileyrichard"
          target="_blank">
          @rileyrichard
        </a>
      </p>
    </div>
  );
};

export default Contact;
