import * as React from "react";
import { createRoot } from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link
} from "react-router-dom";
import "./index.css";
import Home from "./pages/home";
import Pokedex from "./pages/pokedex";
import PokemonDetail from "./pages/pokedetail";
import { Navbar } from "./components/Navbar";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/pokedex",

        element: (
            <div>
                <Navbar />
                <Pokedex />
            </div>
        )
    },
    {
        path: "/pokemon/:id",

        element: <PokemonDetail />
    }
]);

createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
