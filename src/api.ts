import { BalldontlieAPI } from '@balldontlie/sdk';
import type { NBATeam, NBAPlayer } from '@balldontlie/sdk';

const config = {
  apiKey: 'c2176183-0c33-41e3-9cde-2e7511078fa0',
};

const api = new BalldontlieAPI(config);

export const getAllTeams = async (): Promise<NBATeam[]> => {
  const { data: teams } = await api.nba.getTeams();
  return teams;
};

export async function getPlayersByTeamId(params: {
  cursor?: number;
  per_page?: number;
  team_ids?: number[];
  player_ids?: number[];
  search?: string;
  first_name?: string;
  last_name?: string;
}): Promise<NBAPlayer[]> {
  const { data: players } = await api.nba.getPlayers(params);
  return players;
}
