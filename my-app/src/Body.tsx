import styled from "styled-components";

const FullWidthImage = styled.img`
  width: 100vw;
  height: auto;
  display: block; // Ensures there's no extra space around the image
`;

const Body = () => {
  return (
    <FullWidthImage
      src="https://w0.peakpx.com/wallpaper/888/368/HD-wallpaper-riley-reid-heels-laying-on-mattress-jewelry-bdrunette.jpg"
      //   https://media1.giphy.com/media/lKXEBR8m1jWso/giphy.gif?cid=6c09b9529cwaatwct7oisypjt8fcrpy30tp45xeiuo3ke7kv&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g
      alt="Descriptive Text"
    />
  );
};
export default Body;
