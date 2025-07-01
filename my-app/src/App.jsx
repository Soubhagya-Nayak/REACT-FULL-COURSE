import './App.css'
import Hello from './hello';

let name = "Soubhagya";
function App() {
  return (
    <>
      <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </nav>
      <div className='container'>
        <h1>Hello {name}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aliquam sint voluptas perferendis! Ab expedita laborum cum minus soluta sapiente! Repudiandae non explicabo officia, mollitia eveniet odio architecto ratione ducimus?</p>
      </div>
      <Hello></Hello>
    </>
  )
}

export default App
