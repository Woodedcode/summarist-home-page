import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Features from "./components/Features";
import Reviews from "./components/Reviews";
import Numbers from "./components/Numbers";
import Footer from "./components/Footer";
import {useState} from 'react'
import AuthModal from "./components/AuthModal";

function App() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);



  return (
    <>
        <Navbar onOpenAuth={() => setIsAuthOpen(true)} />
        {isAuthOpen && <AuthModal />}
          <Landing />
          <Features />
          <Reviews />
          <Numbers />
          <Footer />
    </>
  );
}

export default App;
