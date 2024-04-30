import './App.css';
import { Navbar } from './components';
import { Chef, FindUs, Footer, Gallery, Header, SpecialMenu } from './container';

const App = () => (
  <div className='mainClass'>
    <Navbar />
    <Header />
    <SpecialMenu />
    {/* <SpecialMenu />
    <SpecialMenu /> */}
    {/* <SpecialMenu /> */}
    {/* <AboutUs /> */}
    {/* <Intro /> */}
    {/* <Laurels /> */}
    <FindUs />
    <Chef />
    <Gallery />
    <Footer />
  </div>
);

export default App;
