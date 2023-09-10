import { wait } from "../utils/utils";

const VerySlowComponent = () => {
  wait(500);
  return <div>Very Slow Component</div>;
};

export default VerySlowComponent;
