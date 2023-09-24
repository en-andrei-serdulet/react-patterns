interface Props {
  color: string;
  size: number;
}

const Warning = ({ color, size }: Props) => {
  return (
    <>
      <p style={{ color, fontSize: `${size}px` }}>This is a warning</p>
    </>
  );
};

export default Warning;
