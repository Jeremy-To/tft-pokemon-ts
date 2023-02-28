import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { setEnemyPkmId } from '../../redux/pokemonSlice';
import ChoicePkm from './ChoicePkm';
import { Pokemon } from '../../types/pokemon';

function EnemySprite() {
	const { difficultyLevel } = useSelector((state: any) => state.pokemon);
	const dispatch = useDispatch();
	const [randomPokemon, setRandomPokemon] = useState<Pokemon | null>(null);

	useEffect(() => {
		async function fetchRandomPokemon() {
			let maxTotalStats: number = 400;
			let minTotalStats: number = 0;
			if (difficultyLevel === 'medium') {
				maxTotalStats = 500;
				minTotalStats = 400;
			} else if (difficultyLevel === 'hard') {
				maxTotalStats = Infinity;
				minTotalStats = 500;
			}

			let randomPokemon: Pokemon | null = null;

			while (!randomPokemon) {
				// Randomly select a Pokemon
				const randomPokemonId: number = Math.floor(Math.random() * 898) + 1;
				const response = await fetch(
					`https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`
				);
				const pokemon: Pokemon = await response.json();
				let totalStats: number = 0;
				// Check if the total stats of the Pokemon matches the difficulty level
				if (pokemon.stats) {
						totalStats = pokemon.stats.reduce(
							(acc: number, cur: { base_stat: number }) => acc + cur.base_stat,
							0
						);
				} else {
					totalStats = 0;
				}
			
				if (totalStats < maxTotalStats && totalStats > minTotalStats) {
					randomPokemon = {
						id: pokemon.id,
						name: pokemon.name,
						totalStats: totalStats,
						sprites: pokemon.sprites,
						stats: pokemon.stats,
					};
					dispatch(setEnemyPkmId(pokemon.id));
				}
			}

			setRandomPokemon(randomPokemon);
		}

		fetchRandomPokemon();
	}, [difficultyLevel, dispatch]);

	if (!randomPokemon) {
		return <p>Loading...</p>;
	}

	return (
		<section className="bg-red-200 flex flex-col justify-center items-center">
			<h2 className="bg-gray-400 m-2 rounded-lg p-2">{`Difficulty: ${difficultyLevel}`}</h2>
			<div className="m-2 bg-white p-4 rounded-lg flex flex-col justify-center items-center">
				<p>Enemy Pokemon:</p>
				<p className="font-bold text-lg">{randomPokemon.name}</p>
				<img
					src={randomPokemon.sprites.front_default}
					alt={`Sprite of ${randomPokemon.name}`}
				/>
				<p>Power Stats: {randomPokemon.totalStats}</p>
			</div>
			<p className="bg-gray-400 p-2 rounded">Select a Pokemon:</p>
			<ChoicePkm />
		</section>
	);
}

export default EnemySprite;