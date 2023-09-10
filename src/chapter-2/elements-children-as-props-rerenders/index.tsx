interface Props {
  title: string;
}

const ElementsChildrenAsPropsRerenders = ({ title }: Props) => {
  return <>{title}</>;
};

export default ElementsChildrenAsPropsRerenders;
