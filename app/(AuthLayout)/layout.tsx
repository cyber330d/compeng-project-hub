import Logo  from "@/app/components/Logo";
export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex p-8  flex-col justify-center items-center h-screen w-full scroll-smooth bg-green-50">
      {/* form container */}
      {children}
    </div>
  );
}
