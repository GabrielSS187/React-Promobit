import { useLocation } from "react-router-dom";
import { useLottieCustom } from "../../hooks/useLottieCustom";

import { Link } from "react-router-dom";

import goBackAnimation from "../../assets/animations/goBackAnimation.json";

import tmdbImage from "../../assets/imgs/Vector@2x.png"

import { Header_Styles, Img_Styles } from "./styles"

export function Header () {

  const { pathname } = useLocation();
  const pathDetailsIsValid = pathname.includes("details");

  const play = {
    autoplay: true,
    loop: true,
  };

  const styles = {
    height: "75px",
    width: "100%",
  };

  const { View } = useLottieCustom(goBackAnimation, styles, play);

  return (
    <Header_Styles pathDetailsIsValid={pathDetailsIsValid}>
      <Img_Styles src={tmdbImage} alt="tmdb-logo" />
        {
          pathDetailsIsValid ?
            (
              <button onClick={() => window.navigator.vibrate(200)}>
                <Link to="/">
                  {View}
                </Link>
              </button>
            )
        : null
        }
    </Header_Styles>
  );
}; 