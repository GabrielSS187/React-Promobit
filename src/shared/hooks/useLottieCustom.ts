import { LottieComponentProps, useLottie } from "lottie-react";

export function useLottieCustom (animation: any, style: React.CSSProperties) {
  const options: LottieComponentProps  = {
    animationData: animation,
    autoplay: false,
    loop: false,  
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const lottieObj = useLottie(options, style);

  return { ...lottieObj };
}