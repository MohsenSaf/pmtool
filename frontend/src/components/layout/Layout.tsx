import Footer from "@/layout/Footer"
import Header from "@/layout/Header"
import { ReactNode } from "react"

type Props = Readonly<{
  children: ReactNode
}>

function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <div style={{ minHeight: "700px" }}>{children}</div>
      <Footer />
    </>
  )
}

export default Layout
