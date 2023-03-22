import React from "react";
import styled from "styled-components";
import fbLogo from "../assets/icons/fb.png";
import instaLogo from "../assets/icons/insta.png";
import pinterestLogo from "../assets/icons/pinterest.png";
import twitterLogo from "../assets/icons/twitter.png";

const SocialStackWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  & > * {
    width: 20px;
  }
`;

const icons = [
  { name: "facebook", url: fbLogo },
  { name: "insta", url: instaLogo },
  { name: "pinterest", url: pinterestLogo },
  { name: "twitter", url: twitterLogo },
];
function SocialStack() {
  return (
    <SocialStackWrapper>
      {icons.map((icon) => (
        <a href="/">
          <img src={icon.url} alt={icon.name} />
        </a>
      ))}
    </SocialStackWrapper>
  );
}

export default SocialStack;
