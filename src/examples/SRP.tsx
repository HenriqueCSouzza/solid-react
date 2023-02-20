/**
    - Um componente deve ter exclusivamente uma responsabilidade;
    - Alterar um código nesse componente não deve influenciar o funcionamento de outros códigos;
    - Componentes com uma única responsabilidade são mais legíveis e testáveis;
 */

const Header = ({ title }: { title: string }) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  )
}

const Content = ({ content }: { content: string }) => {
  return (
    <section>
      <div>{content}</div>
    </section>
  )
}

const Footer = ({ copyright }: { copyright: string }) => {
  return <footer>{copyright}</footer>
}

export default function SRP() {
  return (
    <main>
      <Header title="Header" />
      <Content content="Content" />
      <Footer copyright="Footer" />
    </main>
  )
}
