import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Doar Fácil - Plataforma de Doações e Crowdfunding',
  description: 'Transforme vidas através de doações. Apoie causas sociais, projetos comunitários e iniciativas que fazem a diferença no mundo.',
  keywords: 'doações, crowdfunding, causas sociais, ajuda, solidariedade, projetos sociais',
  authors: [{ name: 'Sandreane Silva Almeida' }],
  openGraph: {
    title: 'Doar Fácil - Plataforma de Doações e Crowdfunding',
    description: 'Transforme vidas através de doações. Apoie causas sociais e projetos que fazem a diferença.',
    type: 'website',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Doar Fácil - Plataforma de Doações',
    description: 'Transforme vidas através de doações. Apoie causas sociais e projetos que fazem a diferença.',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-gray-50`}>
        <div className="flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}