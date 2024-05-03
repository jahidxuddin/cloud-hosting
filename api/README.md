# Datenbankprojekt API

## Wie startet man? 

1. Navigiere zum API Ordner.
2. Führe folgende Befehle aus:
```shell
docker compose up -d
```
```shell
npm install
```
```shell
npm run build
```

## Entwicklung
Während der Entwicklung brauchst du zum Starten des Entwicklungsservers den folgenden Befehl:
```shell
npm run dev
```
Es ist wichtig zu beachten, dass du die Docker Engine während der Entwicklung an hast. Des Weiteren solltest du das Repository immer up-to-date halten. Sprich, du führst bei jedem Start den folgenden Befehl aus:
```shell
git fetch origin
```
Um Änderungen am Prisma Schema zu migrieren, bietet Prisma den folgenden Befehl:
```shell
npx prisma migrate dev --name MIGRATION_NAME_HIER_EINFÜGEN
```