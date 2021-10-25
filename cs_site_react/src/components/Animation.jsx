import Lottie from "react-lottie";

const Animation = ({ animation, style, height, width }) => {
  return (
    <Lottie
      height={height}
      width={width}
      style={style}
      isClickToPauseDisabled
      options={{
        loop: true,
        autoplay: true,
        animationData: animation,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      }}
    />
  );
};

export default Animation;
