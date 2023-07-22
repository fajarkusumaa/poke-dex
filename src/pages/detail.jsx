/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import { useState, useEffect } from "react";
import "./detail.css";

import fetchPoke from "../utils/fetchPoke";

import { convertHeight, convertWeight } from "../utils/formatUnit";

const detail = () => {
    const poke = fetchPoke();

    console.log(poke);

    // const [pokeId, setPokeId] = useState(3);

    // const [poke, setPoke] = useState();
    // const [pokeForms, setPokeForms] = useState();

    // async function fetchPoke() {
    //     try {
    //         const response = await axios.get(
    //             `https://pokeapi.co/api/v2/pokemon/${pokeId}`
    //         );
    //         setPoke(response.data);
    //     } catch (err) {
    //         console.error("error");
    //     }
    // }

    // async function fetchPokeForms() {
    //     try {
    //         const response = await axios.get(
    //             `https://pokeapi.co/api/v2/pokemon-form/${poke.}`
    //         );
    //         setPokeForms(response.data);
    //     } catch (err) {
    //         console.error("error");
    //     }
    // }
    // // console.log(poke);
    // console.log(pokeForms);

    // useEffect(() => {
    //     fetchPoke();
    // }, [pokeId]);

    // useEffect(() => {
    //     fetchPokeForms();
    // }, [pokeId]);

    return (
        <>
            {poke && (
                <div className="w-full flex justify-between">
                    <div className="w-1/3 left-side">
                        <div className="card left-content w-96">
                            <table>
                                <tbody className="table text-lg font-semibold">
                                    <tr>
                                        <th>ID</th>
                                        <td>#{poke.id}</td>
                                    </tr>
                                    <tr>
                                        <th>Height</th>
                                        <td>{convertHeight(poke.height)}</td>
                                    </tr>
                                    <tr>
                                        <th>Weight</th>
                                        <td>{convertWeight(poke.weight)}</td>
                                    </tr>
                                    <tr>
                                        <th>Abilities</th>
                                        <td className="flex gap-1">
                                            {poke.abilities.map((data, i) => (
                                                <button key={i}>
                                                    {data.ability.name}
                                                </button>
                                            ))}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Type</th>
                                        <td>{poke.id}</td>
                                    </tr>
                                    <tr>
                                        {/* {pokeForms && (
                                            <>
                                                <th>Forms</th>
                                                <td className="flex gap-1">
                                                    {pokeForms.varieties.map(
                                                        (form, i) => (
                                                            <button key={i}>
                                                                {
                                                                    form.pokemon
                                                                        .name
                                                                }
                                                            </button>
                                                        )
                                                    )}
                                                </td>
                                            </>
                                        )} */}
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="w-1/3">
                        <img
                            src={
                                poke.sprites.other["official-artwork"]
                                    .front_default
                            }
                            alt=""
                        />
                    </div>
                    <div className="w-1/3 right-side">
                        <div className="card right-content w-96 bg-base-100 shadow-xl">
                            <figure>
                                <img
                                    src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                                    alt="Shoes"
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Shoes!</h2>
                                <p>
                                    If a dog chews shoes whose shoes does he
                                    choose?
                                </p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default detail;
