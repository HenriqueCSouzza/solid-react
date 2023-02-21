[Documentação](https://stealth-truffle-01b.notion.site/SOLID-com-React-44d1fda6652d472f90ad8a0343549078)

## Mapeamento de componentes e os princípios solid aplicado

- Componentes

  - Appbar: **_Single responsibility principle_**
  - appBarLogo: **_Single responsibility principle_**
  - AppBarMenu: **_Single responsibility principle_**
  - BodyText: **_Single responsibility principle_** & **_Liskov Substitution Principle_** (Typography)
  - CardItem: **_Single responsibility principle_** & **_Open-closed principle_** & **_Interface segregation principle_**
  - Drawer: **_Single responsibility principle_** & **_Open-closed principle_**
  - Footer: **_Single responsibility principle_**
  - SubTitle: **_Single responsibility principle_** & **_Liskov Substitution Principle_** (Typography)
  - Title: **_Single responsibility principle_** & **_Liskov Substitution Principle_** (Typography)

- Tipos
  - context: **_Interface segregation principle_**
  - user: **_Interface segregation principle_**
- Views
  - UserDrawerView: **_Single responsibility principle_** & **_Open-closed principle_** & **_Liskov Substitution Principle_** (Drawer) & **_Dependency inversion principle_**
  - UserContent:**_Single responsibility principle_** & **_Open-closed principle_**
  - UserHeader: **_Single responsibility principle_** & **_Open-closed principle_**
  - AvatarView: **_Single responsibility principle_** & **_Dependency inversion principle_**
  - UsersView: **_Single responsibility principle_** & **_Dependency inversion principle_**
