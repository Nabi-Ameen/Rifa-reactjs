import Header from "./components/Header"
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Plot from "./pages/Plot";
import Blog from "./pages/Blog";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Layout from "./Layout";
import Products from "./pages/Products";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/plot" element={<Plot />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
      </Route>
    )
  )

  return (
    <div>
      <RouterProvider router={router} />
      {/* <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plot" element={<Plot />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter> */}







      {/* <div className="m-20">
        <Button label="Submit" outline />
        <Button label="Submit" />
      </div> */}
      {/* 

      <div className="m-10 flex flex-col gap-6">

        <TextInput
          type="tex"
          placeholder="Enter FullName"
          className="border-2 p-2 w-[300px]"
          onChange={(e) => setName(e.target.value)}
        />

        <TextInput
          type="tex"
          placeholder="Address"
          className="border-2 p-2 w-[300px]"
          onChange={(e) => setAddress(e.target.value)}
        />
      </div> */}



      {/* <div className="flex">
        <ExplorCard icon={<IoHome />} Address="ABCD peshawar" title="write title here" />
        <ExplorCard icon={<SiHomeadvisor />} Address="ABCD Karachi" title="2nd write title here" />
      </div>


      <State /> */}
    </div>
  )
}

export default App
