/* 
  Múltiplas interfaces específicas são melhores do que uma interface com múltiplas definições.
 */
interface IShape {
  area?: number;
}

interface IRectangle extends IShape {
  width: number;
  height: number;
}

interface ICircle extends IShape {
  radius: number;
}

const Rectangle = ({ width, height }: IRectangle) => {
  return <div style={{ width, height }} />;
};

const Circle = ({ radius }: ICircle) => {
  return <div style={{ width: radius * 2, height: radius * 2 }} />;
};

const shapeType: any = {
  rectangle: {
    render: (shape: { width: number; height: number; area?: number }) => (
      <Rectangle {...shape} />
    ),
  },
  circle: {
    render: (shape: { radius: number; area?: number }) => <Circle {...shape} />,
  },
};

export default function ISP() {
  const shapes: any = [
    { width: 100, height: 50, type: "rectangle" },
    { radius: 25, type: "circle" },
  ];
  return (
    <div>{shapes.map((shape: any) => shapeType[shape.type].render(shape))}</div>
  );
}
