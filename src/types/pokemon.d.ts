export interface Pokemon {
	id: number;
	name: string;
	totalStats?: number;
	sprites: {
		front_default: string;
	};
	stats?: PokemonStat[];
}

export interface PokemonStat {
	base_stat: number;
	stat: { name: string };
	// Other properties if any
}

export interface PokemonSpecies {
	name: string;
	url: string;
}

export interface EvolutionChain {
	chain: {
		url: any;
		evolves_to: {
			species: PokemonSpecies;
		}[];
	};
}
