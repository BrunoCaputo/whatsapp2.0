import { Circle } from "better-react-spinkit";
import Image from "next/image";
import styled from "styled-components";

function Loading() {
  const whatsappLogo =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2042px-WhatsApp.svg.png";

  return (
    <center style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <div>
        <Image
          src={whatsappLogo}
          alt="Whatsapp Logo"
          width={200}
          height={200}
        />
        <Spacer />
        <Circle color="#3CBC28" size={60} />
      </div>
    </center>
  );
}

export default Loading;

const Spacer = styled.div`
  width: 100%;
  height: 10px;
`;
