# WaterFlower

Sistema de irrigação inteligente para monitoramento e controle do solo, com sensores de umidade e UV, acionamento via Arduino/ESP8266 e interface móvel para visualização e operação.

## Visão geral

O WaterFlower foi um TCC (Trabalho de Conclusão de Curso) desenvolvido para automatizar a irrigação de plantas ou áreas pequenas de cultivo, reduzindo o desperdício de água e permitindo o controle manual ou automático do sistema. A ideia surgiu a partir da necessidade de automação de uma pequena horta próxima à ETEC Prof. Camargo Aranha chamada "Horta das flores", a fim de reduzir a demanda e aumentar a precisão da irrigação nas hortaliças, aumentando, assim, a produtividade nas demais áreas da horta.

O projeto combina:
- Arduino para leitura dos sensores e acionamento do relé;
- ESP8266 para comunicação com o backend e controle do equipamento;
- Backend em Node.js para receber e processar os dados;
- Frontend mobile em React Native/Expo para supervisão e operação.

## Funcionalidades

- Monitoramento de umidade do solo;
- Leitura de índice UV;
- Irrigação automática quando a umidade estiver baixa;
- Controle manual de ativação e interrupção da irrigação;
- Comunicação entre hardware e sistema via rede/local server;
- Interface para login e gerenciamento de baías/zonas de irrigação.

## Estrutura do repositório

```text
WaterFlower/
├── backend/                 # API Node.js e integração com o hardware
│   ├── authController.js
│   ├── baiaController.js
│   ├── database.js
│   ├── package.json
│   ├── server.js
│   └── serverConnection.js
├── frontend/                # Aplicativo mobile em Expo/React Native
│   ├── src/
│   ├── app.json
│   ├── package.json
│   └── README.md
├── ARQUIVOS ARDUINO.zip     # Arquivos auxiliares do Arduino
├── Drivers.txt              # Informações de drivers
├── FINALIZADO.zip          # Build final/arquivos concluídos
├── arduino.txt              # Sketch principal do Arduino
├── esp.txt                 # Arquivos/configuração do ESP
├── home.tsx                 # Telas da aplicação
├── homepage.tsx            # Página inicial
├── homepage2.tsx           # Variação de layout
├── index.tsx               # Entrada da aplicação
├── login.tsx               # Tela de login
├── phconfig.tsx            # Configuração de pH
├── phconfig2.tsx           # Configuração complementar
├── phsensors.tsx           # Sensores de pH
├── phsensors2.tsx          # Sensores de pH complementar
├── select.tsx              # Seleção de opções
├── styles.ts               # Estilos globais
├── README.md               # Documentação do projeto
└── package files/          # Arquivos auxiliares de configuração
```

## Stack tecnológica

- Arduino
- ESP8266
- JavaScript / Node.js
- Express
- React Native
- Expo
- SQLite

## Requisitos

### Hardware
- Arduino Uno ou compatível;
- ESP8266;
- Sensor de umidade do solo;
- Sensor UV;
- Relé para acionamento da válvula/solenoide;
- Fonte de alimentação adequada.

### Software
- Node.js 18+
- npm
- Expo CLI
- Arduino IDE

## Como funciona

1. O sensor de umidade mede o nível do solo.
2. O Arduino/ESP processa a leitura e envia os dados para o backend.
3. O backend valida os dados e disponibiliza as informações para o frontend.
4. Se a umidade estiver baixa, o sistema aciona a irrigação.
5. O usuário também pode controlar manualmente a irrigação pelo app.
