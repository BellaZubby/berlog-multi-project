import type { Metadata } from "next";
// import Banner from "./banner";

export const metadata: Metadata = {
  title: {
    template: "%s | Berlog",
    default: "Berlog Multi Project",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 
{

 
  
  return (
    <main>
            {children}
        
    </main>
  );
}
