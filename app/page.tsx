'use client'

import Image from "next/image";
import { useState } from "react";

const handleSubmit = () => {
  console.log("ive been pressed c:")
}

export default function Header() {
  return (
    <div className="flex justify-center text-yellow-100">
      <button className="bg-indigo-700 my-6 px-12 py-4 rounded-2xl max-w-[70%] border-2 border-black text-3xl" onClick={handleSubmit}>Add New Trip +</button>
      <div className="">

      </div>
    </div>
  );
}
