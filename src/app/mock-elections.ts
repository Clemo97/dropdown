import { County, ElectionResult } from './election';

export const ELECTIONS: County[] = [
  {
    name: 'Uasin Gishu',
    president: [
      { candidate: 'Candidate 1', party: 'UDA', votes: 10000 },
      { candidate: 'Candidate 2', party: 'ODM', votes: 8000 },
      { candidate: 'Candidate 3', party: 'INDEPENDENT', votes: 6000 },
      { candidate: 'JUBILEE', party: 'Party D', votes: 4000 },
    ],
    governor: [
      { candidate: 'Candidate 1', party: 'UDA', votes: 10000 },
      { candidate: 'Candidate 2', party: 'ODM', votes: 8000 },
      { candidate: 'JUBILEE', party: 'Party C', votes: 6000 },
      { candidate: 'Candidate 4', party: 'INDEPENDENT', votes: 4000 },
    ],
    senate: [
      { candidate: 'Candidate 5', party: 'UDA', votes: 9000 },
      { candidate: 'Candidate 6', party: 'ODM', votes: 7000 },
      { candidate: 'Candidate 7', party: 'INDEPENDENT', votes: 5000 },
      { candidate: 'Candidate 8', party: 'JUBILEE', votes: 3000 },
    ],
    womenRepresentative: [
      { candidate: 'Candidate 9', party: 'ODM', votes: 8000 },
      { candidate: 'Candidate 10', party: 'UDA', votes: 6000 },
      { candidate: 'Candidate 11', party: 'INDEPENDENT', votes: 4000 },
      { candidate: 'Candidate 12', party: 'Party L', votes: 2000 },
    ],
  },
  {
    name: 'Trans Nzoia',
    president: [
      { candidate: 'Candidate 1', party: 'UDA', votes: 10000 },
      { candidate: 'Candidate 2', party: 'ODM', votes: 8000 },
      { candidate: 'Candidate 3', party: 'INDEPENDENT', votes: 6000 },
      { candidate: 'JUBILEE', party: 'Party D', votes: 4000 },
    ],
    governor: [
      { candidate: 'Candidate 1', party: 'UDA', votes: 10000 },
      { candidate: 'Candidate 2', party: 'ODM', votes: 8000 },
      { candidate: 'JUBILEE', party: 'Party C', votes: 6000 },
      { candidate: 'Candidate 4', party: 'INDEPENDENT', votes: 4000 },
    ],
    senate: [
      { candidate: 'Candidate 5', party: 'UDA', votes: 9000 },
      { candidate: 'Candidate 6', party: 'ODM', votes: 7000 },
      { candidate: 'Candidate 7', party: 'INDEPENDENT', votes: 5000 },
      { candidate: 'Candidate 8', party: 'JUBILEE', votes: 3000 },
    ],
    womenRepresentative: [
      { candidate: 'Candidate 9', party: 'ODM', votes: 8000 },
      { candidate: 'Candidate 10', party: 'UDA', votes: 5000 },
      { candidate: 'Candidate 11', party: 'INDEPENDENT', votes: 4000 },
      { candidate: 'Candidate 12', party: 'Party L', votes: 2000 },
    ],
  },
  ];
export { County };

