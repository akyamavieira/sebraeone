import { fontawesomeSubset } from 'fontawesome-subset';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const icons = [
  'bars', 'moon', 'sun', 'bell', 'building', 'user-tie', 'headset', 'comments', 'gear', 'right-from-bracket', 'magnifying-glass'
]; // Ícones que você quer incluir

fontawesomeSubset(
  icons,
  path.resolve(__dirname, 'dist/fonts'), // Diretório de saída
  {
    package: 'free', // Usando a versão Free do FontAwesome
    targetFormats: ['woff2', 'woff'], // Formatos de saída
    fontDir: path.resolve(__dirname, 'node_modules/@fortawesome/fontawesome-free/webfonts') // Diretório dos arquivos FontAwesome
  }
);