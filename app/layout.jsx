export const metadata = {
  title: 'Atshushi | Portfolio',
  description: 'The Official Atshushi\'s Portfolio',
};

export default function Page({ children }) {
  return (
    <html lang="pt-br">
      <head><link rel="icon" as="image" href="/favicon.ico" /></head>
      <body>{ children }</body>
    </html>
  );
}
