# flux-run-typescript-expressjs

Sample Typescript server written in ExpressJS that you can use to deploy on FluxRun.

## To run this locally

Running with live reloading:

```
yarn dev
```

Using Docker:

```
docker build -t flux-run-typescript-expressjs .
docker run -p 32000:32000 -it --rm flux-run-typescript-expressjs
```
