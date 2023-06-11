export interface County {
  name: string;
  president: ElectionResult[];
  governor: ElectionResult[];
  senate: ElectionResult[];
  womenRepresentative: ElectionResult[];
}

export interface ElectionResult {
  candidate: string;
  party: string;
  votes: number;
}
