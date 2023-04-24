import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head />
      <body className="bg-zinc-900 text-zinc-50 scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-zinc-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
