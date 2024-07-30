import { Red_Hat_Display, Red_Hat_Mono, Red_Hat_Text } from 'next/font/google'

export const fontSans = Red_Hat_Text({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  variable: '--font-sans',
})

export const fontMono = Red_Hat_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  variable: '--font-mono',
})

export const fontDisp = Red_Hat_Display({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  variable: '--font-disp',
})
