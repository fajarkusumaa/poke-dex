/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import axios from "axios";

const fetchPoke = () => {
    const [pokename, setPokename] = useState(5);

    const [poke, setPoke] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `https://pokeapi.co/api/v2/pokemon/${pokename}`
                );
                const responseForm = await axios.get(
                    `https://pokeapi.co/api/v2/pokemon-species/${pokename}`
                );
                setPoke({
                    ...poke,

                    id: response.data.id,
                    height: response.data.height,
                    weight: response.data.weight,
                    abilities: response.data.abilities,
                    type: response.data.types,
                    HP: response.data.HP,
                    varieties: responseForm.data.varieties,
                    img: response.data.sprites.other["official-artwork"]
                        .front_default
                });
            } catch (err) {
                console.error("error");
            }
        };

        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return poke;
};

export default fetchPoke;
