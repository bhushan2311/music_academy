export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <h2 className="border border-purple-500">Inner layout item</h2>
        {children}
    </>
     
  );
}
