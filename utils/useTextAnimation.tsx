import classNames from "classnames";

const useTextAnimation = (delay: string = "1s") => {
  const animationClasses = classNames(
    "animate__animated animate__fadeInUp",
    `animate__delay-${delay}`
  );

  return animationClasses;
};

export default useTextAnimation;
