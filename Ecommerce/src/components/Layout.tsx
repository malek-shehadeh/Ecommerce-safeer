// src/components/Layout.tsx
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import '../styles/layout.scss'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout">
      <Navbar />
      <main className="main-content">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout