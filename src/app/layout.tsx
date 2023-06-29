import '../styles/global.scss'


export const metadata = {
  title: 'Licitatudo - Acessoria em licitações',
  description: 'Fature uma renda extra vendendo para o governo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
