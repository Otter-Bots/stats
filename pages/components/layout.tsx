import { Container } from "theme-ui";
import Footer from "./footer";
import Navigation from "./navigation";

export default function Layout({ children }: any) {
  return (
    <>
        <Container>
            <Navigation />
            <main>{children}</main>
            <Footer />
        </Container>
    </>
  )
}