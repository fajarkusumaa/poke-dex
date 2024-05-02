import React from "react";

const PokemonDetail = ({ match }) => {
    const { id } = match.params; // Access the id parameter from the URL

    // Fetch data for the specific Pokemon with the provided id
    // You can use this id to fetch data from an API or from a local data source

    return (
        <div>
            <h2>Pokemon Detail Page</h2>
            <p>ID: {id}</p>
            {/* Display detailed information about the Pokemon */}
        </div>
    );
};

export default PokemonDetail;
