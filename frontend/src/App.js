import Header from './Header.jsx';
import {lazy, Suspense} from 'react';
import {Route, Routes} from 'react-router-dom'


function App() {

  const Home = lazy(()=> import("./pages/Home"))
  const Dashboard = lazy(()=> import("./Dashboard/Dashboard.jsx"))
  const Test = lazy(()=> import("./test/Test.jsx"))

  return (
    <>
      <Header />
      <Suspense fallback={<h1>Loading...</h1>}>
        
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/dashboard' element={<Dashboard />}/>
          <Route path='/test' element={<Test />}/>
        </Routes>
      </Suspense>
    </>

  );
}

export default App;
