import { Routes, Route } from 'react-router'

import Layout from './componets/Layout/Layout'
import News from './componets/News/News'
import Search from './componets/Search/Search'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<News />} />
        <Route path="/address" element={<Search />} />
      </Route>
    </Routes>
  )
}

export default App
