import './App.css';
import Navbar from './components/Navbar.js';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <img src="./section-separator.webp" alt="Logo" />
      <main className='bg-black p-5'>
        <h1 className='text-2xl font-bold text-white'>This is the main!</h1>
      </main>
      <img src="./section-separator.webp" alt="Logo" />
      <footer className="flex flex-col items-center text-center py-20 md:py-32 bg-[url('https://hytale.curseforge.com/images/webp/asset-builder-bg.webp')] bg-cover bg-center bg-no-repeat">

      </footer>
    </div>
  );
}

export default App;
