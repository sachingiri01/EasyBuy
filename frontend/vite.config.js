// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
<<<<<<< HEAD
  server: {
    port: 3000,  
    host: '0.0.0.0' 
  },
   define:{
=======
  define:{
>>>>>>> 7a7dfce (Bug Fixed)
    'process.env.URL':JSON.stringify(process.env.URL)
  }
})


