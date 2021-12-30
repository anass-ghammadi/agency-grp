import Menu from'./Menu'
import Slide from './slide'
import Main1 from './main-1'
import Main2 from './main-2'
import Main3 from './main-3'
import Main4 from './main-4'
import Main5 from './main-5'
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
    </>
  );
}

export default App;
