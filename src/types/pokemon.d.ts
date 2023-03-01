export interface Pokemon {
	id: number;
	name: string;
	stats?: PokemonStat[];
	totalStats?: number;
	sprites: {
		front_default: string;
	};
}

export interface PokemonStat {
	base_stat: number;
	stat: { name: string };
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
