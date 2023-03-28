import Navbar from "./Component/Navbar";
import Createflashcard from "./Component/Createflashcard";
import Myflashcards from "./Component/Myflashcards";
import Flashcardview from "./Component/Flashcardview";
import { HashRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import {getMyflashCards} from "./Component/Localstorage";

function App() {
  const [data, setData]= useState([])
  
  useEffect(()=>{
    setData(getMyflashCards())
  },[])


  return (
    <>
      <HashRouter >
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Createflashcard />} />
          <Route path="/mycards"   element={<Myflashcards />} />
          <Route path= "/view-card/details/:id" element={<Flashcardview data={data}/>} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;