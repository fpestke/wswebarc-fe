# Web-Architektur-Workshop Frontend-Part

Praxisbeispiel zur Implementierung einer React-SPA mit Typescript und von [swagger-codegen](https://github.com/swagger-api/swagger-codegen) 
generiertem Client.
Erstellung eines Docker-Images und Deployment in eine Kubernetes-Plattform.

## Voraussetzungen
- Installation der aktuellsten Node.js LTS-Version: https://nodejs.org/en/download/
- Installation von Yarn: https://yarnpkg.com/lang/en/docs/install/#windows-stable

## Generieren mit Swagger
Um ein Beispiel für einen Rest-Service mit etwas höherer Komplexität und umfangreicheren Objekten zu haben, wurde das Modell der Tesla-Owner-Api
ausgewählt, die [hier](https://app.swaggerhub.com/apis-docs/fehguy/tesla/2.0.2#/info) in Swagger-Hub modelliert wurde.
Die `Typescript-fetch` - Version wurde aus dem Modell exportiert und unter src/ev-client entpackt.

## Build
```shell script
yarn install
yarn start
```
## Implementierungsaufgabe
1. Korrigiert die Komponente `ChargerToggle.tsx -> Zugriff auf ChargeState und chargeStart, chargeStop
2. Integriert Redux um die Aktionen und Datenbereitstellung von den Komponenten stärker zu entkoppeln.

## Dockerbuild und run
2. docker build
    ```
     docker build -t ws-crs/ev-frontend .
    ```
3. docker run
    ```
    docker run -p 8082:80 -d --name ev-frontend -t ws-crs/ev-frontend 
    ```
4. Testen mit [localhost:8082](http://localhost:8082)

## GCP-Containerdeployment und starten der Pods auf Kubernetes 
```shell script
    docker tag ws-crs/ev-frontend gcr.io/elite-droplet-256314/ws-crs/ev-frontend
    docker push gcr.io/elite-droplet-256314/ws-crs/ev-frontend
    kubectl expose deployment ev-frontend --type=NodePort --name=ev-backend-service --port=80
```
Als letztes den Ingres-Controller überarbeiten.
