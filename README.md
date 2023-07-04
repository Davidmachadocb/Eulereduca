# :checkered_flag: FeynmanEduca

Este projeto consiste em um site de educação que permite aos usuários fazerem login e compartilharem suas explicações sobre determinados conteúdos. Os textos dos usuários podem ser avaliados pelos demais usuários do site, proporcionando uma interação dinâmica entre os participantes. Além disso, os usuários têm acesso aos conteúdos de outros usuários, permitindo o compartilhamento de conhecimento e a ampliação de aprendizado. A plataforma também conta com ferramentas para organização e categorização dos conteúdos, facilitando a navegação e a busca de informações específicas. O objetivo principal do site é promover o aprendizado colaborativo, estimulando a produção e disseminação de conhecimento entre os usuários.

## :technologist: Membros da equipe

David Machado Couto Bezerra
Curso: Engenharia de Computação.
Matricula: 475664

## :people_holding_hands: Papéis ou tipos de usuário da aplicação

- Usuário não registrado
- Usuário registrado

## :spiral_calendar: Entidades ou tabelas do sistema

- Usuário
- Artigo
- Comentario

## :triangular_flag_on_post:	 Principais funcionalidades da aplicação

- Usuário não registrador poderão ver os artigos feitos por usuários registrados.
- Usuário registrador pode criar artigos, remover artigos e editar seu profile.


## :desktop_computer: Tecnologias e frameworks utilizados

**Frontend:**

- VueJS v3.0, Vue-Router e Pinia.
- Axios

**Backend:**

- Strapi

## :shipit: Operações implementadas para cada entidade da aplicação


| Entidade| Criação | Leitura | Atualização | Remoção |
| --- | --- | --- | --- | --- |
| Usuário |  |    |  |  |
| Artigo | X |  X  |  | X |
| Comentario | X | X  |  |  |

## :neckbeard: Rotas da API REST utilizadas

| Método HTTP | URL |
| --- | --- |
| GET | api/artigos/ |
| GET | 	/users/me |
| POST | 	api/artigos/ |
| POST | 	/auth/local |
| GET | api/artigos/{id} |
| DELETE | api/artigos/{id} |
| GET | api/comentarios/ |
| POST | api/comentarios/ |



