import React from "react";
import PropTypes from "prop-types";

ButtonLink.defaultProps = {
  href: "/",
  className: "",
};

ButtonLink.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
};

function ButtonLink({ className, href, children }) {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}

export default ButtonLink;
