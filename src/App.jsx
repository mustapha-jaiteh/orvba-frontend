import { useState } from "react";
import { UserIcon } from "@heroicons/react/24/outline";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <h1 className="text-6xl">salam</h1>
            <UserIcon className="w-20 h-20" />
        </>
    );
}

export default App;
