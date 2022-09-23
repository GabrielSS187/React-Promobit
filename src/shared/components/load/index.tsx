import { useLottieCustom } from "../../hooks/useLottieCustom";

import loadAnimation from "../../assets/animations/load.json";

import { Container_Styles } from "./styles";

export function Load () {

  const settingsPlay = {
    loop: true,
    autoplay: true,
  };

  const styles = {
    width: "40%"
  };

  const loading = useLottieCustom(loadAnimation, styles, settingsPlay);

  return (
    <Container_Styles>
      {loading.View}
    </Container_Styles>
  );
};