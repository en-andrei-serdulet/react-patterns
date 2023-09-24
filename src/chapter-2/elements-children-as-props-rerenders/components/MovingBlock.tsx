interface Props {
  position: string | number;
}

const MovingBlock = ({ position }: Props) => {
  console.log(position);
  if ((position as string) < "300px" || (position as number) < 300) {
    return null;
  }
  return (
    <div
      className="moving-block"
      style={{
        position: "fixed",
        top: position,
      }}
    >
      {position}
    </div>
  );
};

export default MovingBlock;
