import './App.css';
import Banner from './Component/Banner/Banner';
import Courses from './Component/Courses/Courses';
import Navbar from './Component/Navbar/Navbar';
function App() {
  return (
    <div className='bg-amber-50'> 
      <Navbar></Navbar>

      <Banner></Banner>

      <Courses></Courses>
      
    </div>
  );
}

export default App;
