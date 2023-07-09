import { County, ElectionResult } from './election';

export const ELECTIONS: County[] = [
  {
    name: 'Uasin Gishu',
    president: [
      { candidate: 'Candidate 1', party: 'UDA', votes: 87000, percentage: undefined },
      { candidate: 'Candidate 2', party: 'ODM', votes: 8000, percentage: undefined },
      { candidate: 'Candidate 3', party: 'INDEPENDENT', votes: 6000, percentage: undefined },
      { candidate: 'Candidate 4', party: 'Party D', votes: 4000, percentage: undefined },
    ],
    governor: [
      { candidate: 'Candidate 1', party: 'UDA', votes: 10000, percentage: undefined },
      { candidate: 'Candidate 2', party: 'ODM', votes: 8000, percentage: undefined },
      { candidate: 'Candidate 3', party: 'Party C', votes: 6000 , percentage: undefined},
      { candidate: 'Candidate 4', party: 'INDEPENDENT', votes: 4000, percentage: undefined },
    ],
    senate: [
      { candidate: 'Candidate 1', party: 'UDA', votes: 9000, percentage: undefined },
      { candidate: 'Candidate 2', party: 'ODM', votes: 7000, percentage: undefined },
      { candidate: 'Candidate 3', party: 'INDEPENDENT', votes: 5000, percentage: undefined },
      { candidate: 'Candidate 4', party: 'JUBILEE', votes: 3000, percentage: undefined },
    ],
    womenRepresentative: [
      { candidate: 'Candidate 1', party: 'ODM', votes: 8000, percentage: undefined },
      { candidate: 'Candidate 2', party: 'UDA', votes: 6000, percentage: undefined },
      { candidate: 'Candidate 3', party: 'INDEPENDENT', votes: 4000, percentage: undefined },
      { candidate: 'Candidate 4', party: 'Party L', votes: 2000, percentage: undefined },
    ],
  },
  {
    name: 'Trans Nzoia',
    president: [
      { candidate: 'Candidate 1', party: 'UDA', votes: 54900, percentage: undefined },
      { candidate: 'Candidate 2', party: 'ODM', votes: 54000, percentage: undefined },
      { candidate: 'Candidate 3', party: 'INDEPENDENT', votes: 16450, percentage: undefined },
      { candidate: 'Candidate 4', party: 'Party D', votes: 2340, percentage: undefined },
    ],
    governor: [
      { candidate: 'Candidate 1', party: 'UDA', votes: 10000, percentage: undefined },
      { candidate: 'Candidate 2', party: 'ODM', votes: 8000, percentage: undefined },
      { candidate: 'Candidate 3', party: 'Party C', votes: 6000, percentage: undefined },
      { candidate: 'Candidate 4', party: 'INDEPENDENT', votes: 4000, percentage: undefined },
    ],
    senate: [
      { candidate: 'Candidate 1', party: 'UDA', votes: 9000, percentage: undefined },
      { candidate: 'Candidate 2', party: 'ODM', votes: 7000, percentage: undefined },
      { candidate: 'Candidate 3', party: 'INDEPENDENT', votes: 5000, percentage: undefined },
      { candidate: 'Candidate 4', party: 'JUBILEE', votes: 3000, percentage: undefined },
    ],
    womenRepresentative: [
      { candidate: 'Candidate 1', party: 'ODM', votes: 8000, percentage: undefined },
      { candidate: 'Candidate 2', party: 'UDA', votes: 5000, percentage: undefined },
      { candidate: 'Candidate 3', party: 'INDEPENDENT', votes: 4000, percentage: undefined },
      { candidate: 'Candidate 4', party: 'Party L', votes: 2000, percentage: undefined },
    ],
  },
  {
    name: 'Nairobi',
    president: [
      { candidate: 'Candidate 1', party: 'UDA', votes: 560400, percentage: undefined },
      { candidate: 'Candidate 2', party: 'ODM', votes: 54000, percentage: undefined },
      { candidate: 'Candidate 3', party: 'INDEPENDENT', votes: 16450, percentage: undefined },
      { candidate: 'Candidate 4', party: 'Party D', votes: 2340, percentage: undefined },
    ],
    governor: [
      { candidate: 'Candidate 1', party: 'UDA', votes: 10000, percentage: undefined },
      { candidate: 'Candidate 2', party: 'ODM', votes: 8000, percentage: undefined },
      { candidate: 'Candidate 3', party: 'Party C', votes: 6000, percentage: undefined },
      { candidate: 'Candidate 4', party: 'INDEPENDENT', votes: 4000, percentage: undefined },
    ],
    senate: [
      { candidate: 'Candidate 1', party: 'UDA', votes: 9000, percentage: undefined },
      { candidate: 'Candidate 2', party: 'ODM', votes: 7000 , percentage: undefined},
      { candidate: 'Candidate 3', party: 'INDEPENDENT', votes: 5000, percentage: undefined },
      { candidate: 'Candidate 4', party: 'JUBILEE', votes: 3000, percentage: undefined },
    ],
    womenRepresentative: [
      { candidate: 'Candidate 1', party: 'ODM', votes: 8000, percentage: undefined },
      { candidate: 'Candidate 2', party: 'UDA', votes: 5000, percentage: undefined },
      { candidate: 'Candidate 3', party: 'INDEPENDENT', votes: 4000, percentage: undefined },
      { candidate: 'Candidate 4', party: 'Party L', votes: 2000, percentage: undefined },
    ],
  },
  {
    name: 'Kisumu',
    president: [
      { candidate: 'Candidate 1', party: 'UDA', votes: 29000, percentage: undefined },
      { candidate: 'Candidate 2', party: 'ODM', votes: 54000, percentage: undefined },
      { candidate: 'Candidate 3', party: 'INDEPENDENT', votes: 16450, percentage: undefined },
      { candidate: 'Candidate 4', party: 'Party D', votes: 2340, percentage: undefined },
    ],
    governor: [
      { candidate: 'Candidate 1', party: 'UDA', votes: 10000, percentage: undefined },
      { candidate: 'Candidate 2', party: 'ODM', votes: 8000 , percentage: undefined},
      { candidate: 'Candidate 3', party: 'Party C', votes: 6000 , percentage: undefined},
      { candidate: 'Candidate 4', party: 'INDEPENDENT', votes: 4000, percentage: undefined },
    ],
    senate: [
      { candidate: 'Candidate 1', party: 'UDA', votes: 9000 , percentage: undefined},
      { candidate: 'Candidate 2', party: 'ODM', votes: 7000 , percentage: undefined},
      { candidate: 'Candidate 3', party: 'INDEPENDENT', votes: 5000, percentage: undefined },
      { candidate: 'Candidate 4', party: 'JUBILEE', votes: 3000, percentage: undefined },
    ],
    womenRepresentative: [
      { candidate: 'Candidate 1', party: 'ODM', votes: 8000, percentage: undefined },
      { candidate: 'Candidate 2', party: 'UDA', votes: 5000 , percentage: undefined},
      { candidate: 'Candidate 3', party: 'INDEPENDENT', votes: 4000 , percentage: undefined},
      { candidate: 'Candidate 4', party: 'Party L', votes: 2000, percentage: undefined },
    ],
  },
  {
    name: 'Kisii',
    president: [
      { candidate: 'Candidate 1', party: 'UDA', votes: 76433, percentage: undefined },
      { candidate: 'Candidate 2', party: 'ODM', votes: 54000 , percentage: undefined},
      { candidate: 'Candidate 3', party: 'INDEPENDENT', votes: 16450, percentage: undefined },
      { candidate: 'Candidate 4', party: 'Party D', votes: 2340, percentage: undefined },
    ],
    governor: [
      { candidate: 'Candidate 1', party: 'UDA', votes: 10000 , percentage: undefined},
      { candidate: 'Candidate 2', party: 'ODM', votes: 8000, percentage: undefined },
      { candidate: 'Candidate 3', party: 'Party C', votes: 6000 , percentage: undefined},
      { candidate: 'Candidate 4', party: 'INDEPENDENT', votes: 4000, percentage: undefined },
    ],
    senate: [
      { candidate: 'Candidate 1', party: 'UDA', votes: 9000, percentage: undefined },
      { candidate: 'Candidate 2', party: 'ODM', votes: 7000 , percentage: undefined},
      { candidate: 'Candidate 3', party: 'INDEPENDENT', votes: 5000, percentage: undefined },
      { candidate: 'Candidate 4', party: 'JUBILEE', votes: 3000 , percentage: undefined},
    ],
    womenRepresentative: [
      { candidate: 'Candidate 1', party: 'ODM', votes: 8000 , percentage: undefined},
      { candidate: 'Candidate 2', party: 'UDA', votes: 5000 , percentage: undefined},
      { candidate: 'Candidate 3', party: 'INDEPENDENT', votes: 4000, percentage: undefined },
      { candidate: 'Candidate 4', party: 'Party L', votes: 2000 , percentage: undefined},
    ],
  },
  {
    name: 'Kakamega',
    president: [
      { candidate: 'Candidate 1', party: 'UDA', votes: 84400 , percentage: undefined},
      { candidate: 'Candidate 2', party: 'ODM', votes: 54000, percentage: undefined },
      { candidate: 'Candidate 3', party: 'INDEPENDENT', votes: 16450, percentage: undefined },
      { candidate: 'Candidate 4', party: 'Party D', votes: 2340, percentage: undefined },
    ],
    governor: [
      { candidate: 'Candidate 1', party: 'UDA', votes: 10000, percentage: undefined },
      { candidate: 'Candidate 2', party: 'ODM', votes: 8000, percentage: undefined },
      { candidate: 'Candidate 3', party: 'Party C', votes: 6000, percentage: undefined },
      { candidate: 'Candidate 4', party: 'INDEPENDENT', votes: 4000, percentage: undefined },
    ],
    senate: [
      { candidate: 'Candidate 1', party: 'UDA', votes: 9000, percentage: undefined },
      { candidate: 'Candidate 2', party: 'ODM', votes: 7000, percentage: undefined },
      { candidate: 'Candidate 3', party: 'INDEPENDENT', votes: 5000, percentage: undefined },
      { candidate: 'Candidate 4', party: 'JUBILEE', votes: 3000, percentage: undefined },
    ],
    womenRepresentative: [
      { candidate: 'Candidate 1', party: 'ODM', votes: 8000, percentage: undefined },
      { candidate: 'Candidate 2', party: 'UDA', votes: 5000, percentage: undefined },
      { candidate: 'Candidate 3', party: 'INDEPENDENT', votes: 4000, percentage: undefined },
      { candidate: 'Candidate 4', party: 'Party L', votes: 2000, percentage: undefined },
    ],
  },
  {
    name: 'Kajiado',
    president: [
      { candidate: 'Candidate 1', party: 'UDA', votes: 39100, percentage: undefined },
      { candidate: 'Candidate 2', party: 'ODM', votes: 54000, percentage: undefined },
      { candidate: 'Candidate 3', party: 'INDEPENDENT', votes: 16450, percentage: undefined },
      { candidate: 'Candidate 4', party: 'Party D', votes: 2340, percentage: undefined },
    ],
    governor: [
      { candidate: 'Candidate 1', party: 'UDA', votes: 10000, percentage: undefined },
      { candidate: 'Candidate 2', party: 'ODM', votes: 8000, percentage: undefined },
      { candidate: 'Candidate 3', party: 'Party C', votes: 6000 , percentage: undefined},
      { candidate: 'Candidate 4', party: 'INDEPENDENT', votes: 4000, percentage: undefined },
    ],
    senate: [
      { candidate: 'Candidate 1', party: 'UDA', votes: 9000, percentage: undefined },
      { candidate: 'Candidate 2', party: 'ODM', votes: 7000, percentage: undefined },
      { candidate: 'Candidate 3', party: 'INDEPENDENT', votes: 5000, percentage: undefined },
      { candidate: 'Candidate 4', party: 'JUBILEE', votes: 3000 , percentage: undefined},
    ],
    womenRepresentative: [
      { candidate: 'Candidate 1', party: 'ODM', votes: 8000, percentage: undefined },
      { candidate: 'Candidate 2', party: 'UDA', votes: 5000, percentage: undefined },
      { candidate: 'Candidate 3', party: 'INDEPENDENT', votes: 4000, percentage: undefined },
      { candidate: 'Candidate 4', party: 'Party L', votes: 2000, percentage: undefined },
    ],
  },
  {
    name: 'Nandi',
    president: [
      { candidate: 'Candidate 1', party: 'UDA', votes: 34400, percentage: undefined },
      { candidate: 'Candidate 2', party: 'ODM', votes: 54000, percentage: undefined },
      { candidate: 'Candidate 3', party: 'INDEPENDENT', votes: 16450, percentage: undefined },
      { candidate: 'Candidate 4', party: 'Party D', votes: 2340, percentage: undefined },
    ],
    governor: [
      { candidate: 'Candidate 1', party: 'UDA', votes: 10000, percentage: undefined },
      { candidate: 'Candidate 2', party: 'ODM', votes: 8000, percentage: undefined },
      { candidate: 'Candidate 3', party: 'Party C', votes: 6000 , percentage: undefined},
      { candidate: 'Candidate 4', party: 'INDEPENDENT', votes: 4000, percentage: undefined },
    ],
    senate: [
      { candidate: 'Candidate 1', party: 'UDA', votes: 9000, percentage: undefined },
      { candidate: 'Candidate 2', party: 'ODM', votes: 7000, percentage: undefined },
      { candidate: 'Candidate 3', party: 'INDEPENDENT', votes: 5000, percentage: undefined },
      { candidate: 'Candidate 4', party: 'JUBILEE', votes: 3000, percentage: undefined },
    ],
    womenRepresentative: [
      { candidate: 'Candidate 1', party: 'ODM', votes: 8000 , percentage: undefined},
      { candidate: 'Candidate 2', party: 'UDA', votes: 5000, percentage: undefined },
      { candidate: 'Candidate 3', party: 'INDEPENDENT', votes: 4000, percentage: undefined },
      { candidate: 'Candidate 4', party: 'Party L', votes: 2000, percentage: undefined },
    ],
  },
  {
    name: 'Wajir',
    president: [
      { candidate: 'Candidate 1', party: 'UDA', votes: 9600, percentage: undefined },
      { candidate: 'Candidate 2', party: 'ODM', votes: 54000, percentage: undefined },
      { candidate: 'Candidate 3', party: 'INDEPENDENT', votes: 16450, percentage: undefined },
      { candidate: 'Candidate 4', party: 'Party D', votes: 2340, percentage: undefined },
    ],
    governor: [
      { candidate: 'Candidate 1', party: 'UDA', votes: 10000, percentage: undefined },
      { candidate: 'Candidate 2', party: 'ODM', votes: 8000, percentage: undefined },
      { candidate: 'Candidate 3', party: 'Party C', votes: 6000, percentage: undefined },
      { candidate: 'Candidate 4', party: 'INDEPENDENT', votes: 4000, percentage: undefined },
    ],
    senate: [
      { candidate: 'Candidate 1', party: 'UDA', votes: 9000, percentage: undefined },
      { candidate: 'Candidate 2', party: 'ODM', votes: 7000, percentage: undefined },
      { candidate: 'Candidate 3', party: 'INDEPENDENT', votes: 5000 , percentage: undefined},
      { candidate: 'Candidate 4', party: 'JUBILEE', votes: 3000, percentage: undefined },
    ],
    womenRepresentative: [
      { candidate: 'Candidate 1', party: 'ODM', votes: 8000, percentage: undefined },
      { candidate: 'Candidate 2', party: 'UDA', votes: 5000, percentage: undefined },
      { candidate: 'Candidate 3', party: 'INDEPENDENT', votes: 4000 , percentage: undefined},
      { candidate: 'Candidate 4', party: 'Party L', votes: 2000, percentage: undefined },
    ],
  },
];
export { County };

