import logo from './logo.svg';
import './App.css';

function App() {
  return (
<div className="App">
  <div className='flex items-center w-full h-screen justify-center'>
    <div className='bg-teal-600 p-6 rounded w-1/3 h-1/2'>
      <h1 className='text-white text-xl'>Question No 1</h1><br/>
      <h2 className='text-white font-semibold text-xl'> FUll Form of the word HTML ?</h2><br/>
      <div className='flex flex-col '>
        <div className='flex items-center'>
          <input id='opt1' type='radio' name='opt' />
          <label for='opt1' className='text-white text-lg ml-2'>Hyper Text MArkup Language</label>
        </div>
        <div className='flex items-center'>
          <input id='opt2' type='radio' name='opt' />
          <label for='opt2' className='text-white text-lg ml-2'>hyper text Make language</label>
        </div>
        <div className='flex items-center'>
          <input id='opt3' type='radio' name='opt' />
          <label for='opt3' className='text-white text-lg ml-2'>Stylling the WEb site</label>
        </div>
        <div className='flex items-center'>
          <input id='opt4' type='radio' name='opt' />
          <label for='opt4' className='text-white text-lg ml-2'>Makes Ui Of the websites</label>
        </div>
      </div>
      <button className="bg-emerald-400 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded mt-4">Click Me</button>
    </div>
  </div>
</div>

  );
}

export default App;
