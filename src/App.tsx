import './App.css'
import Hero from './components/Hero'
import Cards from './components/Cards'
import { cards } from './data/cards'

function App() {

  return (
    <div className='page'>
      <Hero />
      <main className='grow'>
          <Cards cards={cards} />
      </main>
    </div>
  )
}

export default App