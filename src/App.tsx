import { useState } from 'react'
import { useAppSelector, useAppDispatch} from './app/hooks'
import { incremented, amountAdded } from './features/counter/counter-slice'
import { useFetchBreedQuery } from './features/dogs/dogs-api-slice';
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const count = useAppSelector(state => state.counter.value)
  const dispatch = useAppDispatch()

  const { data = [], isFetching } = useFetchBreedQuery(20);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => dispatch(amountAdded(1))} >
          count is {count}
        </button>
      </div>
      <div className="">
        Numbers of dogs fetched: {data.length}
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Pictire</th>
            </tr>
          </thead>
          <tbody>
            {data.map(breed => (
              <tr key={breed.id}>
                <td>{breed.name}</td>
                <td>
                  <img src={breed.image.url} alt={breed.name} height="250" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App
