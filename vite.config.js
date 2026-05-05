import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/frigo-e-spesa/',
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'apple-touch-icon.png', 'bg.png'],
      manifest: {
        name: 'FridgeChef',
        short_name: 'FridgeChef',
        description: 'Genera ricette basate sugli ingredienti che hai nel frigo.',
        theme_color: '#10b981',
        background_color: '#0a0c10',
        display: 'standalone',
        start_url: '/frigo-e-spesa/',
        scope: '/frigo-e-spesa/',
        icons: [
          {
            src: 'icon-192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable'
          },
          {
            src: 'icon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ]
})
