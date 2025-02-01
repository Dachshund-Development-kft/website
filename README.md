# Dachshund Development – Weboldal  

Ha még nem vagy biztos benne, hogyan kell elindítani a projektet, kövesd az alábbi lépéseket:  

### 1. Node.js telepítése  
Töltsd le és telepítsd a [Node.js LTS](https://nodejs.org/en) verzióját.  

### 2. Repository klónozása  
Futtasd a következő parancsot a terminálban:  
```sh
git clone https://github.com/Dachshund-Development-kft/website.git
```

### 3. pnpm telepítése  
A projektben **pnpm**-et használunk **npm** helyett, ezért telepítsd globálisan:  
```sh
npm install -g pnpm
```

### 4. Függőségek telepítése  
Lépj be a projekt mappájába, majd futtasd:  
```sh
pnpm install
```

### 5. A fejlesztői szerver indítása  
A weboldal megtekintéséhez használd ezt a parancsot:  
```sh
pnpm run dev
```
