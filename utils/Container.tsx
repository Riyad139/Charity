export default function Container({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section className="max-w-[80%] mx-auto">{children}</section>;
}
