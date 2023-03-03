import { Button, Container, Header, Segment, Grid } from "semantic-ui-react"; //https://github.com/nygardk/react-share

import {
  FacebookShareButton,
  FacebookMessengerShareButton,
  WhatsappShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share";

import {
  FacebookIcon,
  FacebookMessengerIcon,
  WhatsappIcon,
  TwitterIcon,
  LinkedinIcon,
} from "react-share";

let iconSize = 40;
let radius = 25;

function Socials() {
  return (
    <Container>
      <Segment className="socials">
        <FacebookShareButton url="https://www.facebook.com/sharer.php?u=[post-url]">
          <FacebookIcon
            className="icon"
            logoFillColor="white"
            size={iconSize}
            borderRadius={radius}
          ></FacebookIcon>
        </FacebookShareButton>
        <FacebookMessengerShareButton url="http://m.me/USERNAME">
          <FacebookMessengerIcon
            className="icon"
            logoFillColor="white"
            size={iconSize}
            borderRadius={radius}
          ></FacebookMessengerIcon>
        </FacebookMessengerShareButton>
        <WhatsappShareButton url="https://api.whatsapp.com/send?text=[post-title] [post-url]">
          <WhatsappIcon
            className="icon"
            logoFillColor="white"
            size={iconSize}
            borderRadius={radius}
          ></WhatsappIcon>
        </WhatsappShareButton>
        <TwitterShareButton url="https://twitter.com/share?url=[post-url]&text=[post-title]&via=[via]&hashtags=[hashtags]">
          <TwitterIcon
            className="icon"
            logoFillColor="white"
            size={iconSize}
            borderRadius={radius}
          ></TwitterIcon>
        </TwitterShareButton>
        <LinkedinShareButton url="https://www.linkedin.com/shareArticle?url=[post-url]&title=[post-title]">
          <LinkedinIcon
            className="icon"
            logoFillColor="white"
            size={iconSize}
            borderRadius={radius}
          ></LinkedinIcon>
        </LinkedinShareButton>
      </Segment>
    </Container>
  );
}

export default Socials;
