// 可变字体，如果使用非可变字体，则需要手动指定粗细 weight
// https://fonts.google.com/variablefonts
// https://v-fonts.com/
import { Inter, Lusitana } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({
  subsets: ['latin'],
  weight: ['400', '700'],
});
