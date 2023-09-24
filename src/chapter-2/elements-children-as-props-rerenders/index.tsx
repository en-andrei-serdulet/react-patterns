import BunchOfStuff from "./components/BunchOfStuff";
import OtherStuffAlsoComplicated from "./components/OtherStuffAlsoComplicated";
import VerySlowComponent from "./components/VerySlowComponent";

import "./style.css";
import ScrollableWithMovingBlock from "./components/ScrollableWithMovingBlock";

interface Props {
  title: string;
}

const ElementsChildrenAsPropsRerenders = ({ title }: Props) => {
  return (
    <div>
      <h1>{title}</h1>
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure ipsa
        tenetur nisi sunt a explicabo consequuntur corporis provident obcaecati
        amet repellendus deleniti sed non, ipsam ab cum velit repudiandae nobis!
      </div>
      <ScrollableWithMovingBlock>
        <VerySlowComponent />
        <BunchOfStuff />
        <OtherStuffAlsoComplicated />
      </ScrollableWithMovingBlock>
    </div>
  );
};

export default ElementsChildrenAsPropsRerenders;
