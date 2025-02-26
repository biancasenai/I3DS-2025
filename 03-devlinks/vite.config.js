import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    open:true,  //abre automaticamente o navegador e inicia o server
    port:3000,  //porta para conexão, altere quando necessário
    host:true,  //habilitar a rede externa
  }
})
