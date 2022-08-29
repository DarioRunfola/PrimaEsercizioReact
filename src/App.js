import './App.css';
import Button from './components/ButtonComponent';
import ImageComponent from './components/ImageComponet';






function App() {
  return (
    <div className="App">
      <header className="App-header">
      <ImageComponent imge={"IMG.jpeg"} alter="foto di carpe"/>
      <Button text="Click Me!"/>
      </header>
    </div>
  );
}

export default App;
