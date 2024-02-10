import styled from "styled-components";

const FullWidthImage = styled.img`
  width: 100vw;
  height: auto;
  display: block; // Ensures there's no extra space around the image
`;

const Body = () => {
  return (
    <FullWidthImage
      src="https://media2.giphy.com/media/tm0GlA0gw3wvm/giphy.gif?cid=6c09b95208ctw25sv5xfped9zm8pcqbybb41ma8hvocrhzmc&ep=v1_gifs_search&rid=giphy.gif&ct=g"
      //   https://media1.giphy.com/media/lKXEBR8m1jWso/giphy.gif?cid=6c09b9529cwaatwct7oisypjt8fcrpy30tp45xeiuo3ke7kv&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g
      alt="Descriptive Text"
    />
  );
};
export default Body;
