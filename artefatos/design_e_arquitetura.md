## Padrões de Design e Arquitetura do E-Cycle: Plataforma de Gerenciamento de Descarte de Lixo Eletrônico


**Introdução**
Definir o padrão de design e a arquitetura do software é deveras importante, haja vista que a partir dessas definições norteamos o desenvolvimento da aplicação a fim de alcançar flexibilidade e alta qualidade. 
Assim, este documento tem por objtivo apresentar quais padrões foram escolhidos e o porquê.

**Padrão de design**

*1. Princípio SOLID:*
Como padrão de design, decidimos utilizar SOLID (Single Responsibility Principle, Open-Closed Principle, Liskov Substitution Principle, Interface Segregation Principle, Dependency Inversion Principle), para que nossa aplicação seja flexível, de qualidade e robusta, atingindo isso através da aplicação de seus cinco princípios, sendo eles:

- Single Responsibility Principle (SRP):
Este prinpício propõe que cada classe tenha apenas uma responsabilidade, que consequentemente fará com que ela tenha apenas uma razão para mudar, facilitando a manutenção e entendimento do código.
Para isso, é necessário compreender bem os requisitos do projeto e como, dentro de cada requisito, a modularização (enquanto responsabilidade) deve acontecer.

- Open-Closed Principle (OCP): 
Aqui falamos de permitir que as classes estejam abertas para extensão (novas funcionalidades), mas fechadas para modificação, mitigando possíveis bugs e proporcionando reutilização de código. 
Para esse princípio, é deveras importante utilizar práticas de clean code e alta comunicação com o time, a fim de haver padronizações (e organização) no desenvolvimento.

- Liskov Substitution Principle (LSP): 
Por sua vez, este princípio fala que devemos poder substituir instâncias de classes derivadas pelas suas classes pai, sem que isso afete a aplicação. 
Para atingir esse princípio, novamente é importante trazer boas práticas clean code e padronização e organização ao desenvolvimento. 

- Interface Segregation Principle (ISP):
Aqui falamos de criar interfaces mais específicas e pequenas, ao invés de grandes e genéricas, causando desperdícios de funcionalidades. 

- Dependency Inversion Principle (DIP): 
Por fim, o DIP fala que nossas classes devem depender entre si de abstrações e não diretamente umas das outras, de forma a garantir fraco acoplamento, que resulta em interdependência e flexibilidade no projeto. 

Para esses dois últimos princípios, a padronização do desenvolvimento é ainda mais importante, pois é necessário alinhamento em todo o time para que a padronização ocorra de forma satisfatória. 

**Padrão de arquitetura**

*2. Arquitetura MVC (Model-View-Controller):*
E-Cycle será uma aplicação web. 
Desta forma, optamos por utilizar o padrão moderno MVC(Model-View-Controller), pelos benefício que ele oferece, que são listados no fim desta seção.
Antes, é importante apresentar como o MVC se organiza e como isso será aplicado no E-Cycle.

- Model: O componente Model será responsável por gerenciar a lógica de negócios e os dados do sistema. Ele será projetado de forma independente da interface do usuário, garantindo a reusabilidade da lógica subjacente.
Nesta camada, utilizaremos tecnologias e ferramentas como PostgreSQL e PrimsORM.

- View: O componente View será encarregado de apresentar os dados ao usuário e capturar suas interações. A lógica de apresentação será isolada neste componente para garantir uma separação clara entre a interface do usuário e a lógica de negócios.
Já nesta camada, utilizaremos NextJs com React e bibliotecas como Styled Components, Material UI e Phosphor React Icons.

- Controller: Explique como você planeja implementar os controladores para lidar com a interação entre Model e View, garantindo uma separação clara das responsabilidades.
Finalmente, aqui utilizaremos o Express JS.

Com relação ao benefícios do MVC, topificamos alguns. São eles:

- Separação de preocupações:
Com o MVC, separamos a responsabilidade (alto nível) em três componentes - Model, View e Controller - tornando a aplicação mais organizada, compreenssível e de boa manutenabilidade.

- Reusabilidade de código:
A divisão em três componentes permite reutilizar código de maneira mais eficiente. Por exemplo, você pode ter vários controladores que interagem com o mesmo modelo ou várias visões que exibem diferentes perspectivas dos mesmos dados. Isso ajuda a evitar a duplicação de código e melhora a eficiência do desenvolvimento.

- Manutenção simplificada
Com essa divisão alto nível (M-V-C), poderemos realizar manutenção no projeto em uma parte sem que isso afete necessariamente outras, evitando possívels problemas e confusões.

Outros benefícios são flexibilidade e escalabilidade, testabilidade e adaptalidade, que juntamente com os supracitados, serão de importância chave em nossa aplicação.

Conclusão:
Prentendemos a partir do SOLID e do MVC, construir E-Cycle com qualidade, robustez e flexbilidade, tornando a aplicação uma experiência agradável ao time de desenvolvimento, ao público usuário e às pessoas clientes.  

