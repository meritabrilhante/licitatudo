import '../styles/global.scss'
import { Providers } from "@/providers"


export const metadata = {
  title: 'Licitatudo - Acessoria em licitações',
  description: 'Fature uma renda extra vendendo para o governo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}