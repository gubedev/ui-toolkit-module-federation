
# Proyecto React con Vite Federation - Prueba de Concepto

Este ejemplo sirve como una prueba de concepto para verificar el size bundling de la aplicacion `ui-toolkit` al agregar distintos componentes y controlar el size bundling de la aplicación `host` que utiliza componentes expuesto por dicha aplicación `ui-toolkit`.

## Running

Run `pnpm install`, then `pnpm run build` and `pnpm run serve`. This will build and serve both `host` and `ui-toolkit` on ports 5000, 5001 respectively.

- HOST: [localhost:5000](http://localhost:5000/)
- REMOTE: [localhost:5001](http://localhost:5001/)

`CTRL + C` can only stop the host server. You can run `pnpm stop` to stop all services.