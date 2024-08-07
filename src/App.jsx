import { nanoid } from 'nanoid'
import './App.css'
import Card from './components/Card'
import Nav from './components/Nav'
import data from './data'
function App() {
  const cards = data.map((el)=>{
    return <Card 
    key = {nanoid()}
    img={el.img} 
    place= {el.place} 
    title = {el.title} 
    duration = {el.duration} 
    description = {el.description}
    />
  })
  return (
    <div className='min-w-[550px] m-auto'>
      <Nav />
      {cards}
      </div>
  )
}

export default App
