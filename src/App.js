import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar ";


function App() {
  return (
    <div className="xl:py-12 xl:px-40 grid xl:gap-y-8 p-5 gap-x-2">
      <Navbar />
      <Menu/>
      <Footer/>
    </div>
  );
}

export default App;
