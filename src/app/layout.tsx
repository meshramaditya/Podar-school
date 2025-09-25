import Footer from "@/components/footer"
import "./globals.css"
import Navbar from "@/components/navbar"

export const metadata = {
  title: "Podar School Sakoli",
  description: "Official Podar School website",
  icons: {
    icon: '/asset/logs/podar_icon.png', // ✅ Add your favicon here
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <Navbar />
        <main className="w-full">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
