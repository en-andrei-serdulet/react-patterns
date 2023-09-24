interface Props {
  color: string;
}

const Error = ({ color }: Props) => {
  return (
    <>
      <p style={{ color }}>Error</p>
    </>
  );
};

export default Error;
