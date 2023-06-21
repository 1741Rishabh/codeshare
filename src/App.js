
import './App.css';
import Card from './components/card/card';

export default function App() {
  return (
    <div className='m-10'>
      <section>
        <h1 className='font-bold text-xl mb-14'>Image 1:</h1>
        <div className='m-6 '>
          <ul className='flex gap-3 '>
            <li className='text-gray-400 hover:text-black text-md cursor-pointer'><a>Your</a></li>
            <li className='text-gray-400 hover:text-black text-md cursor-pointer'><a>All</a></li>
            <li className='text-gray-400 hover:text-black text-md cursor-pointer'><a>Blocked</a></li>
          </ul>
          <div className='w-[100%] mt-2 h-[2px] bg-gray-400'></div>
          <div className='mt-12 '>
            <Card></Card>
          </div>
        </div>
      </section>

    </div>
  )
}