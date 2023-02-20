/*
  - Esse princípio defende o uso de polimorfismo, assim como usamos no princípio anterior, para estabelecer que um objeto pode ser substituído por qualquer outro do mesmo tipo sem danificar o comportamento da aplicação.

*/

const Shape = ({ shape }: { shape: { area: () => number } }) => {
  return <div>Area: {shape.area()}</div>
}

// Componente funcional derivado
const Rectangle = ({ width, height }: { width: number; height: number }) => {
  const area = () => width * height
  return <Shape shape={{ area }} />
}

// Componente funcional derivado
const Square = ({ side }: { side: number }) => {
  const area = () => side * side
  return <Shape shape={{ area }} />
}

export default function LSP() {
  return (
    <div>
      <Rectangle width={5} height={10} />
      <Square side={5} />
    </div>
  )
}
