# Monitor de Tickets com Notificação

Aplicação Node.js para monitorar tickets de um sistema via API. Possui um temporizador programável, que de tempos em tempos verifica se surgiram alterações e notifica no desktop.

### Requisitos
Node.js 16+ instalado

Permissão para rodar notificações no sistema operacional

API acessível com cookies válidos e referer correto


---

## Requisitos

- Node.js 16+ instalado
- Permissão para rodar notificações no sistema operacional
- API acessível com cookies válidos e referer correto

---

## Variáveis de ambiente (.env)

| Variável           | Descrição                                               | Exemplo                                      |
|--------------------|---------------------------------------------------------|----------------------------------------------|
| `API_URL`          | URL da API para fazer a requisição POST                 | `https://api.exemplo.com/endpoint`           |
| `COOKIE_SESSION`   | Cookie de sessão para autenticação na API                | `JSESSIONID=abcdef1234567890`                 |
| `API_REFERER`      | Referer para a API (algumas APIs exigem isso)            | `https://app.exemplo.com/dashboard`           |
| `API_REAL_URL`     | Endpoint real enviado no corpo da requisição (opcional) | `/citsmart/serviceRequestIncident/serviceRequestIncident.load` |
| `HEADERS_EXTRA`    | Headers extras em JSON (opcional)                         | `{"sec-ch-ua":"...","sec-ch-ua-mobile":"?0"}`|

---

## Instalação

1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/seu-projeto.git
cd seu-projeto 
```

2. Instale as dependências
npm install node-notifier dotenv

3. Crie o arquivo .env baseado no modelo abaixo:
```swift
API_URL=https://api.exemplo.com/endpoint
COOKIE_SESSION=JSESSIONID=abcdef1234567890
API_REFERER=https://app.exemplo.com/dashboard
API_REAL_URL=/citsmart/serviceRequestIncident/serviceRequestIncident.load
HEADERS_EXTRA={"sec-ch-ua":"\"Chromium\";v=\"136\", \"Microsoft Edge\";v=\"136\", \"Not.A/Brand\";v=\"99\"","sec-ch-ua-mobile":"?0","sec-ch-ua-platform":"\"Windows\""}
```

## Como usar
1. Execute a aplicação:

```bash
npm run start
```

2. A aplicação irá:

- Buscar os retornos da API

- Comparar resultados com os já conhecidos

- Notificar se houver novos resultados

- Repetir a busca a cada 30 minutos (tempo programável)

# Contato / Suporte
Qualquer dúvida ou sugestão, me chama! 🚀
[Send me a email](mailto:wellytonsdj@gmail.com)
