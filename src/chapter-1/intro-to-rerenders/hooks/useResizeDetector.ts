import React from "react";
const useResizeDetector = () => {
  const [width, setWidth] = React.useState(0);

  React.useEffect(() => {
    const listener = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", listener);

    return () => window.removeEventListener("resize", listener);
  }, []);
};

export default useResizeDetector;
