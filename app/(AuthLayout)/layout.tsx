export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      wrapper layout page
      {children}
    </div>
  );
}
