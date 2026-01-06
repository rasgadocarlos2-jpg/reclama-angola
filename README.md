[README.md](https://github.com/user-attachments/files/24459571/README.md)
# 🇦🇴 Reclama Angola

> **A primeira infraestrutura de confiança e reputação empresarial de Angola**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
[![Made in Angola](https://img.shields.io/badge/Made%20in-Angola-red.svg)](https://angola.ao)

## 📋 Sobre o Projeto

O **Reclama Angola** é uma plataforma digital que conecta consumidores e empresas para construir um mercado mais transparente e responsável em Angola. A plataforma permite que consumidores façam reclamações públicas sobre serviços e produtos, enquanto empresas podem responder e resolver problemas de forma transparente.

### 🎯 Missão

Criar uma infraestrutura de confiança que promova a transparência empresarial e empodere consumidores angolanos através de um sistema de reputação público e imparcial.

### ⭐ Características Principais

- **🔍 Pesquisa de Empresas** - Base de dados de empresas angolanas com perfis públicos
- **📝 Reclamações Públicas** - Sistema de registro de reclamações sem cadastro obrigatório
- **📊 Trust Score** - Indicador de confiança baseado em tempo de resposta, taxa de resolução e avaliações
- **💬 Resposta Empresarial** - Canal direto entre consumidores e empresas
- **🛡️ Verificação de Empresas** - Sistema de verificação documental para empresas
- **📈 Métricas em Tempo Real** - Dashboards com estatísticas e tendências

## 🚀 Demo Online

🌐 **[Ver Demo ao Vivo](https://seuusername.github.io/reclama-angola)**

## 📊 Estatísticas da Plataforma

- **12,483** Reclamações registadas
- **847** Empresas listadas
- **82%** Taxa de resolução
- **68%** Empresas verificadas

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 18** - Biblioteca JavaScript para interfaces
- **Chart.js** - Visualização de dados e gráficos
- **CSS3** - Estilização moderna e responsiva
- **Babel** - Transpilador JavaScript

### Infraestrutura
- **GitHub Pages** - Hospedagem gratuita
- **Netlify** (alternativa) - Deploy contínuo

## 📦 Instalação e Uso

### Opção 1: Uso Direto (Recomendado)

1. **Clone o repositório:**
```bash
git clone https://github.com/seuusername/reclama-angola.git
cd reclama-angola
```

2. **Abra o arquivo:**
```bash
# Basta abrir o index.html no navegador
open index.html  # Mac
start index.html # Windows
xdg-open index.html # Linux
```

### Opção 2: Servidor Local

```bash
# Com Python 3
python -m http.server 8000

# Com Node.js
npx serve

# Acesse: http://localhost:8000
```

### Opção 3: Deploy Online

**Netlify Drop:**
1. Vá em https://app.netlify.com/drop
2. Arraste o arquivo `index.html`
3. Site online em segundos!

**GitHub Pages:**
1. Faça fork deste repositório
2. Vá em Settings → Pages
3. Source: `main` branch
4. Save
5. Site estará em: `https://seuusername.github.io/reclama-angola`

## 🎨 Funcionalidades Implementadas

### Para Consumidores 👤
- [x] Pesquisa de empresas por nome, categoria e província
- [x] Visualização de perfis públicos de empresas
- [x] Criação de reclamações sem cadastro obrigatório
- [x] Acompanhamento de status de reclamações
- [x] Dashboard pessoal com histórico
- [x] Sistema de avaliação de resoluções
- [x] Notificações de respostas

### Para Empresas 🏢
- [x] Dashboard B2B profissional
- [x] Gestão de reclamações em tempo real
- [x] Sistema de alertas de prazos
- [x] Métricas de desempenho (Trust Score, tempo médio, taxa de resolução)
- [x] Gráficos analíticos (categorias, canais, tendências)
- [x] Resposta direta a reclamações
- [x] Perfil público verificado

### Sistema 🔧
- [x] Sistema de estados padronizado (nova, em análise, respondida, resolvida)
- [x] Logs de auditoria para todas as ações
- [x] Filtros e ordenação avançados
- [x] Design responsivo (mobile, tablet, desktop)
- [x] Indicadores de ação (alertas urgentes, contadores)
- [x] Mensagens "próximo passo" em cada etapa

## 📱 Capturas de Tela

### Landing Page
![Landing Page](https://via.placeholder.com/800x400?text=Landing+Page)

### Pesquisa de Empresas
![Pesquisa](https://via.placeholder.com/800x400?text=Pesquisa+de+Empresas)

### Dashboard Empresa
![Dashboard](https://via.placeholder.com/800x400?text=Dashboard+B2B)

## 🗺️ Roadmap

### Fase 1: MVP (Concluído ✅)
- [x] Landing page institucional
- [x] Sistema de busca de empresas
- [x] Criação de reclamações
- [x] Dashboards básicos
- [x] Design responsivo

### Fase 2: Backend & Autenticação (Q1 2025)
- [ ] API REST (Node.js/Express)
- [ ] Banco de dados PostgreSQL
- [ ] Sistema de autenticação JWT
- [ ] Notificações por email
- [ ] Upload de arquivos

### Fase 3: Recursos Avançados (Q2 2025)
- [ ] Integração com redes sociais
- [ ] Sistema de moderação
- [ ] Relatórios PDF exportáveis
- [ ] API pública para desenvolvedores
- [ ] App mobile (React Native)

### Fase 4: Escala & Monetização (Q3 2025)
- [ ] Planos empresariais premium
- [ ] Sistema de pagamentos
- [ ] Certificações empresariais
- [ ] Integração com CRM
- [ ] Analytics avançado

## 🤝 Como Contribuir

Contribuições são muito bem-vindas! Veja como você pode ajudar:

### 1. Reportar Bugs
Encontrou um problema? [Abra uma issue](https://github.com/seuusername/reclama-angola/issues/new)

### 2. Sugerir Funcionalidades
Tem uma ideia? [Crie uma feature request](https://github.com/seuusername/reclama-angola/issues/new)

### 3. Fazer Pull Request

```bash
# 1. Fork o projeto
# 2. Crie uma branch para sua feature
git checkout -b feature/MinhaFeature

# 3. Faça commit das mudanças
git commit -m 'Adicionar MinhaFeature'

# 4. Push para a branch
git push origin feature/MinhaFeature

# 5. Abra um Pull Request
```

### Diretrizes de Contribuição
- Mantenha o código limpo e comentado
- Siga os padrões de estilo existentes
- Teste todas as mudanças antes de submeter
- Atualize a documentação se necessário
- Uma funcionalidade = um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

```
MIT License

Copyright (c) 2024 Reclama Angola

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 👥 Equipe

- **Fundador & CEO** - [Seu Nome](https://github.com/seuusername)
- **CTO** - [Nome do CTO](https://github.com/username)

## 📞 Contacto

- **Website:** https://reclama-angola.ao (em breve)
- **Email:** contacto@reclama-angola.ao
- **Twitter:** [@ReclamaAngola](https://twitter.com/ReclamaAngola)
- **LinkedIn:** [Reclama Angola](https://linkedin.com/company/reclama-angola)

## 🙏 Agradecimentos

- Comunidade open-source
- Consumidores angolanos que inspiraram este projeto
- Empresas parceiras que acreditaram na visão
- Todos os contribuidores

## 📈 Status do Projeto

🚀 **Em desenvolvimento ativo** - Versão Beta pública

### Última Atualização
- **Versão:** 0.1.0 (Beta)
- **Data:** Janeiro 2025
- **Status:** Funcional e testável

## 🔐 Segurança

Para reportar vulnerabilidades de segurança, por favor envie email para:
**security@reclama-angola.ao**

**Não** abra issues públicas para questões de segurança.

## ⚖️ Conformidade Legal

O Reclama Angola opera em conformidade com:
- Lei de Proteção de Dados Pessoais de Angola
- Código do Consumidor Angolano
- Regulamentos de Comércio Eletrónico

## 📚 Documentação Adicional

- [Guia de Uso](docs/GUIA_USO.md)
- [API Documentation](docs/API.md) (em breve)
- [Política de Privacidade](docs/PRIVACIDADE.md)
- [Termos de Serviço](docs/TERMOS.md)

## 🌍 Suporte à Comunidade

Este é um projeto de impacto social. Se você representa uma organização ou empresa que quer apoiar a transparência empresarial em Angola, entre em contacto conosco.

---

<div align="center">

**Feito com ❤️ em Angola 🇦🇴**

[Website](https://reclama-angola.ao) • [Demo](https://seuusername.github.io/reclama-angola) • [Documentação](docs/)

⭐ Se este projeto foi útil, considere dar uma estrela!

</div>
