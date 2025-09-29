import { Suspense } from 'react'
import './App.css'
import Bottles from './component/Bottles/Bottles'

// const bottlesPromise =fetch('./bottle.json').then (res => res.json());

// const bottlesPromise2 = fetch('https://raw.githubusercontent.com/fahad1shakil/public-api/refs/heads/main/bottles.json').then(res => res.json())

const bottlesPromise = fetch('./bottles.json')
.then(res => res.json());

function App() {

  //? 1. manual nijera banay 
// const bottles = [
//   {id:1, name:'pani vai', price:200, color:'pink'},
//   {id:2, name:'pam', price:210, color:'red'},
//   {id:3, name:'pani lagbe', price:240, color:'blue'},
//   {id:4, name:'Pran pani', price:220, color:'sky'},
// ]
// console.log(bottles);

//? 2. Json file korte generate krte lage ja chatGPT diye kore


  return (
    <>
  
      <h1>Buy Awesome Water Bottle</h1>

      <Suspense fallback={<h3>Bottle is Loading...</h3>}>
         <Bottles bottlesPromise={bottlesPromise}></Bottles>
      </Suspense>
  

    </>
  )
}

export default App
