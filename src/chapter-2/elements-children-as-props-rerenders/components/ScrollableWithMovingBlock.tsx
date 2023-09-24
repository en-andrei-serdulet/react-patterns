import { useState } from "react";
import { getCalculated, getPosition } from "../utils/utils";
import MovingBlock from "./MovingBlock";

interface Props {
  children: any;
}

const ScrollableWithMovingBlock = ({ children }: Props) => {
  const [position, setPosition] = useState<number | string>(300);

  const onScroll = (e: any) => {
    const calculated = getPosition(e.target.scrollTop);
    setPosition(calculated);
  };


  return (
    <div className="scrollable-block" onScroll={onScroll}>
      <MovingBlock position={position} />
      {children}
    </div>
  );
};

export default ScrollableWithMovingBlock;
