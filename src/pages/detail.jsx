/* eslint-disable react-hooks/rules-of-hooks */

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
                                        <td className="flex gap-1">
                                            {poke.type.map((item, i) => (
                                                <button key={i}>
                                                    {item.type.name}
                                                </button>
                                            ))}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Forms</th>
                                        <td className="flex gap-1">
                                            {poke.varieties.map((item, i) => (
                                                <button
                                                    key={i}
                                                    className="whitespace-nowrap"
                                                >
                                                    {" "}
                                                    {item.pokemon.name}
                                                </button>
                                            ))}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="w-1/3 flex justify-center">
                        <img src={poke.img} alt="" />
                    </div>
                    <div className="w-1/3 right-side">
                        <div className="card right-content w-96">
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
                                        <td className="flex gap-1">
                                            {poke.type.map((item, i) => (
                                                <button key={i}>
                                                    {item.type.name}
                                                </button>
                                            ))}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default detail;
