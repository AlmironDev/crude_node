import { Routes, Route, BrowserRouter } from 'react-router-dom'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1 >index</h1>} />
        <Route path='/login' element={<h1 >login </h1>} />
        <Route path='/register' element={<h1 >register </h1>} />
        <Route path='/taks' element={<h1 >taks </h1>} />
        <Route path='/add-taks' element={<h1 >add-taks</h1>} />
        <Route path='/taks/:id' element={<h1> taks/:id  </h1>} />
        <Route path='/profile' element={<h1> profile  </h1>} />
      </Routes>


    </BrowserRouter>
  )
}