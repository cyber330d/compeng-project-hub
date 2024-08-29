export default function DashboardLayout({
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
