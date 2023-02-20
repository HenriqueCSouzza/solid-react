/*
  - Componente de nível superior não devem depender diretamente de outros componentes de nível inferior e sim de interfaces.
*/

const DataService = {
  fetchData: () => {
    return ['1', '2', '3']
  },
}

export default function DIP() {
  const data = DataService.fetchData()

  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
