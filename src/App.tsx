import Tablazat from './components/Tablazat'
import { Urlap } from './components/Urlap'
import './components/konyvesbolt.css'

export default function App() {
  
  return (
    <>
      <header>
        <h1>Könyvesbolt</h1>
      </header>
      <article>
        <Tablazat />
      </article>
      <section>
        <Urlap/>
      </section>
      <footer>
        <p>Bernáth Milán</p>
      </footer>
    </>
  )
}


