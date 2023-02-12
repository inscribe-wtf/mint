import { AnimatePresence } from "framer-motion";
import type { NextPage } from "next";
import { useState } from "react";
import Mint from "../src/components/Mint";

const Home: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center"
      data-theme="wireframe"
    >
      <AnimatePresence>
        {isOpen && <Mint handleClose={() => setIsOpen(false)} />}
      </AnimatePresence>
      <a href="https://inscribe.wtf" target="_blank" rel="noreferrer">
        <h1 className="text-6xl font-bold mb-8">inscribe.wtf</h1>
      </a>
      <button className="btn btn-primary" onClick={() => setIsOpen(true)}>
        Mint
      </button>
    </div>
  );
};

export default Home;
