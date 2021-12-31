import Menu from'./Menu'
import Slide from './slide'
import Main1 from './main-1'
import Main2 from './main-2'
import Main3 from './main-3'
import Main4 from './main-4'
import Main5 from './main-5'
import Footer1 from '../components/footer/footer-1'
import Footer2 from '../components/footer/footer-2'
import Footer3 from '../components/footer/footer-3'
import Footer4 from '../components/footer/footer-4'
function App() {
  return (
    <>
    <div className="menu-container">
       <Menu />
    </div>
     
      <Slide />
      <Main1 />
      <Main2 />
      <Main3 />
      <Main4 />
      <Main5 />
      <Footer1 />
      <Footer2 />
      <Footer3 />
      <Footer4 />
    </>
  );
}

export default App;
