import base44 from "@base44/vite-plugin"
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { copyFileSync } from 'fs'
import { resolve } from 'path'

// Rutas SPA que necesitan su propio archivo HTML para que GitHub Pages devuelva 200
const SPA_ROUTES = ['climatizacion', 'reformas', 'nosotros', 'reforma-integral', 'reforma-bano', 'reforma-cocina', 'reforma-alisado', 'fotovoltaica']

function spaRoutePages() {
  return {
    name: 'spa-route-pages',
    closeBundle() {
      for (const route of SPA_ROUTES) {
        copyFileSync(resolve('dist/index.html'), resolve(`dist/${route}.html`))
      }
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  // Subcarpeta solo al compilar en GitHub Actions (GitHub Pages); aquí y en Base44 la web vive en "/"
  base: '/',
  plugins: [
    base44({
      // Support for legacy code that imports the base44 SDK with @/integrations, @/entities, etc.
      // can be removed if the code has been updated to use the new SDK imports from @base44/sdk
      legacySDKImports: process.env.BASE44_LEGACY_SDK_IMPORTS === 'true',
      hmrNotifier: true,
      navigationNotifier: true,
      analyticsTracker: true,
      visualEditAgent: true
    }),
    react(),
    spaRoutePages()
  ]
});