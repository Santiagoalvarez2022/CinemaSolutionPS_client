import { Container } from "react-bootstrap"

export default function Footer() {
  return (
     <footer className="bg-dark text-light py-4 mt-auto">
      <Container className="text-center">
        <small>&copy; {new Date().getFullYear()} Todos los derechos reservados.</small>
      </Container>
    </footer>
  )
}
