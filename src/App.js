import './App.css';
import Address from './components/Profile/Address';
import FullName from './components/Profile/FullName';
import PhotoProfile from './components/Profile/PhotoProfile';

function App() {
  return (
    <div className="App">
      <FullName/>
      <Address/>
      <PhotoProfile/>
      
    </div>
  );
}

export default App;
