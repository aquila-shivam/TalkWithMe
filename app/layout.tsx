import './globals.css'

export const metadata = {
  title: 'TalkWithMe',
  description: 'Message',
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
