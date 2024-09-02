
export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex p-8  py-16 flex-col justify-center items-center h-screen w-full scroll-smooth bg-blue-50">
      {children}
    </div>
  );
}
