import React from "react"
import { Routes, Route} from "react-router-dom";

// Components
import Home from "./pages/Home"
import Layout from "./layout/Layout"
import Spin from "./components/Spin/"
import NotFound from "./pages/NotFound";

const Category = React.lazy(() => import('./pages/Category'));
function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route
            path="category/:id"
            element={
              <React.Suspense fallback={<Spin/>}>
                <Category />
              </React.Suspense>
            }
          />
          <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;