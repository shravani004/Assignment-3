import React from "react";
import Search from "./components/Search";

const App = () => {
  return (
    <div className="text-gray-500 font- grid md:grid-cols-6 h-full">
      <div class="md:col-span-1 md:flex md:justify-end">
        <Search />
      </div>
    </div>
  );
};

export default App;
