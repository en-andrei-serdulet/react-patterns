import { wait } from "../utils/utils";

const VerySlowComponent = () => {
  wait(500);
  return <div className="very-slow-component">Very Slow Component</div>;
};

export default VerySlowComponent;
