import Lottie from "lottie-react";
import pageNotFoundAnimation from "../../shared/assets/animations/pageNotFoundAnimation.json";

export function PageNotFound () {

  const styles = {
    height: "100vh",
    width: "100%"
  };

  return (
    <div>
      <Lottie animationData={pageNotFoundAnimation} 
        style={styles}
      />
    </div>
  );
};