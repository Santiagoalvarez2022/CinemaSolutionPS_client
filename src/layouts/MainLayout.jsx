import Footer from "./footer/Footer";
import Header from "./header/Header";
import { Outlet } from 'react-router-dom';
export default function MainLayout() {
  
  return (
    <div className="d-flex flex-column min-vh-100">
    <Header />
    <main className="flex-grow-1"   >
        <Outlet />
    </main>
    <Footer />
    </div>
  )
}
