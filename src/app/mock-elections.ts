import { County, ElectionResult } from './election';

export const ELECTIONS: County[] = [
  {
    name: 'Uasin Gishu',
    president: [
      { candidate: 'Candidate 1', party: 'UDA', votes: 87000 },
      { candidate: 'Candidate 2', party: 'ODM', votes: 8000 },
      { candidate: 'Candidate 3', party: 'INDEPENDENT', votes: 6000 },
      { candidate: 'Candidate 4', party: 'Party D', votes: 4000 },
    ],
    governor: [
      { candidate: 'Candidate 1', party: 'UDA', votes: 10000 },
      { candidate: 'Candidate 2', party: 'ODM', votes: 8000 },
      { candidate: 'Candidate 3', party: 'Party C', votes: 6000 },
      { candidate: 'Candidate 4', party: 'INDEPENDENT', votes: 4000 },
    ],
    senate: [
      { candidate: 'Candidate 1', party: 'UDA', votes: 9000 },
      { candidate: 'Candidate 2', party: 'ODM', votes: 7000 },
      { candidate: 'Candidate 3', party: 'INDEPENDENT', votes: 5000 },
      { candidate: 'Candidate 4', party: 'JUBILEE', votes: 3000 },
    ],
    womenRepresentative: [
      { candidate: 'Candidate 1', party: 'ODM', votes: 8000 },
      { candidate: 'Candidate 2', party: 'UDA', votes: 6000 },
      { candidate: 'Candidate 3', party: 'INDEPENDENT', votes: 4000 },
      { candidate: 'Candidate 4', party: 'Party L', votes: 2000 },
    ],
  },
  {
    name: 'Trans Nzoia',
    president: [
      { candidate: 'Candidate 1', party: 'UDA', votes: 54900 },
      { candidate: 'Candidate 2', party: 'ODM', votes: 54000 },
      { candidate: 'Candidate 3', party: 'INDEPENDENT', votes: 16450 },
      { candidate: 'Candidate 4', party: 'Party D', votes: 2340 },
    ],
    governor: [
      { candidate: 'Candidate 1', party: 'UDA', votes: 10000 },
      { candidate: 'Candidate 2', party: 'ODM', votes: 8000 },
      { candidate: 'Candidate 3', party: 'Party C', votes: 6000 },
      { candidate: 'Candidate 4', party: 'INDEPENDENT', votes: 4000 },
    ],
    senate: [
      { candidate: 'Candidate 1', party: 'UDA', votes: 9000 },
      { candidate: 'Candidate 2', party: 'ODM', votes: 7000 },
      { candidate: 'Candidate 3', party: 'INDEPENDENT', votes: 5000 },
      { candidate: 'Candidate 4', party: 'JUBILEE', votes: 3000 },
    ],
    womenRepresentative: [
      { candidate: 'Candidate 1', party: 'ODM', votes: 8000 },
      { candidate: 'Candidate 2', party: 'UDA', votes: 5000 },
      { candidate: 'Candidate 3', party: 'INDEPENDENT', votes: 4000 },
      { candidate: 'Candidate 4', party: 'Party L', votes: 2000 },
    ],
  },
  {
    name: 'Nairobi',
    president: [
      { candidate: 'Candidate 1', party: 'UDA', votes: 560400 },
      { candidate: 'Candidate 2', party: 'ODM', votes: 54000 },
      { candidate: 'Candidate 3', party: 'INDEPENDENT', votes: 16450 },
      { candidate: 'Candidate 4', party: 'Party D', votes: 2340 },
    ],
    governor: [
      { candidate: 'Candidate 1', party: 'UDA', votes: 10000 },
      { candidate: 'Candidate 2', party: 'ODM', votes: 8000 },
      { candidate: 'Candidate 3', party: 'Party C', votes: 6000 },
      { candidate: 'Candidate 4', party: 'INDEPENDENT', votes: 4000 },
    ],
    senate: [
      { candidate: 'Candidate 1', party: 'UDA', votes: 9000 },
      { candidate: 'Candidate 2', party: 'ODM', votes: 7000 },
      { candidate: 'Candidate 3', party: 'INDEPENDENT', votes: 5000 },
      { candidate: 'Candidate 4', party: 'JUBILEE', votes: 3000 },
    ],
    womenRepresentative: [
      { candidate: 'Candidate 1', party: 'ODM', votes: 8000 },
      { candidate: 'Candidate 2', party: 'UDA', votes: 5000 },
      { candidate: 'Candidate 3', party: 'INDEPENDENT', votes: 4000 },
      { candidate: 'Candidate 4', party: 'Party L', votes: 2000 },
    ],
  },
  {
    name: 'Kisumu',
    president: [
      { candidate: 'Candidate 1', party: 'UDA', votes: 29000 },
      { candidate: 'Candidate 2', party: 'ODM', votes: 54000 },
      { candidate: 'Candidate 3', party: 'INDEPENDENT', votes: 16450 },
      { candidate: 'Candidate 4', party: 'Party D', votes: 2340 },
    ],
    governor: [
      { candidate: 'Candidate 1', party: 'UDA', votes: 10000 },
      { candidate: 'Candidate 2', party: 'ODM', votes: 8000 },
      { candidate: 'Candidate 3', party: 'Party C', votes: 6000 },
      { candidate: 'Candidate 4', party: 'INDEPENDENT', votes: 4000 },
    ],
    senate: [
      { candidate: 'Candidate 1', party: 'UDA', votes: 9000 },
      { candidate: 'Candidate 2', party: 'ODM', votes: 7000 },
      { candidate: 'Candidate 3', party: 'INDEPENDENT', votes: 5000 },
      { candidate: 'Candidate 4', party: 'JUBILEE', votes: 3000 },
    ],
    womenRepresentative: [
      { candidate: 'Candidate 1', party: 'ODM', votes: 8000 },
      { candidate: 'Candidate 2', party: 'UDA', votes: 5000 },
      { candidate: 'Candidate 3', party: 'INDEPENDENT', votes: 4000 },
      { candidate: 'Candidate 4', party: 'Party L', votes: 2000 },
    ],
  },
  {
    name: 'Kisii',
    president: [
      { candidate: 'Candidate 1', party: 'UDA', votes: 76433 },
      { candidate: 'Candidate 2', party: 'ODM', votes: 54000 },
      { candidate: 'Candidate 3', party: 'INDEPENDENT', votes: 16450 },
      { candidate: 'Candidate 4', party: 'Party D', votes: 2340 },
    ],
    governor: [
      { candidate: 'Candidate 1', party: 'UDA', votes: 10000 },
      { candidate: 'Candidate 2', party: 'ODM', votes: 8000 },
      { candidate: 'Candidate 3', party: 'Party C', votes: 6000 },
      { candidate: 'Candidate 4', party: 'INDEPENDENT', votes: 4000 },
    ],
    senate: [
      { candidate: 'Candidate 1', party: 'UDA', votes: 9000 },
      { candidate: 'Candidate 2', party: 'ODM', votes: 7000 },
      { candidate: 'Candidate 3', party: 'INDEPENDENT', votes: 5000 },
      { candidate: 'Candidate 4', party: 'JUBILEE', votes: 3000 },
    ],
    womenRepresentative: [
      { candidate: 'Candidate 1', party: 'ODM', votes: 8000 },
      { candidate: 'Candidate 2', party: 'UDA', votes: 5000 },
      { candidate: 'Candidate 3', party: 'INDEPENDENT', votes: 4000 },
      { candidate: 'Candidate 4', party: 'Party L', votes: 2000 },
    ],
  },
  {
    name: 'Kakamega',
    president: [
      { candidate: 'Candidate 1', party: 'UDA', votes: 84400 },
      { candidate: 'Candidate 2', party: 'ODM', votes: 54000 },
      { candidate: 'Candidate 3', party: 'INDEPENDENT', votes: 16450 },
      { candidate: 'Candidate 4', party: 'Party D', votes: 2340 },
    ],
    governor: [
      { candidate: 'Candidate 1', party: 'UDA', votes: 10000 },
      { candidate: 'Candidate 2', party: 'ODM', votes: 8000 },
      { candidate: 'Candidate 3', party: 'Party C', votes: 6000 },
      { candidate: 'Candidate 4', party: 'INDEPENDENT', votes: 4000 },
    ],
    senate: [
      { candidate: 'Candidate 1', party: 'UDA', votes: 9000 },
      { candidate: 'Candidate 2', party: 'ODM', votes: 7000 },
      { candidate: 'Candidate 3', party: 'INDEPENDENT', votes: 5000 },
      { candidate: 'Candidate 4', party: 'JUBILEE', votes: 3000 },
    ],
    womenRepresentative: [
      { candidate: 'Candidate 1', party: 'ODM', votes: 8000 },
      { candidate: 'Candidate 2', party: 'UDA', votes: 5000 },
      { candidate: 'Candidate 3', party: 'INDEPENDENT', votes: 4000 },
      { candidate: 'Candidate 4', party: 'Party L', votes: 2000 },
    ],
  },
  {
    name: 'Kajiado',
    president: [
      { candidate: 'Candidate 1', party: 'UDA', votes: 39100 },
      { candidate: 'Candidate 2', party: 'ODM', votes: 54000 },
      { candidate: 'Candidate 3', party: 'INDEPENDENT', votes: 16450 },
      { candidate: 'Candidate 4', party: 'Party D', votes: 2340 },
    ],
    governor: [
      { candidate: 'Candidate 1', party: 'UDA', votes: 10000 },
      { candidate: 'Candidate 2', party: 'ODM', votes: 8000 },
      { candidate: 'Candidate 3', party: 'Party C', votes: 6000 },
      { candidate: 'Candidate 4', party: 'INDEPENDENT', votes: 4000 },
    ],
    senate: [
      { candidate: 'Candidate 1', party: 'UDA', votes: 9000 },
      { candidate: 'Candidate 2', party: 'ODM', votes: 7000 },
      { candidate: 'Candidate 3', party: 'INDEPENDENT', votes: 5000 },
      { candidate: 'Candidate 4', party: 'JUBILEE', votes: 3000 },
    ],
    womenRepresentative: [
      { candidate: 'Candidate 1', party: 'ODM', votes: 8000 },
      { candidate: 'Candidate 2', party: 'UDA', votes: 5000 },
      { candidate: 'Candidate 3', party: 'INDEPENDENT', votes: 4000 },
      { candidate: 'Candidate 4', party: 'Party L', votes: 2000 },
    ],
  },
  {
    name: 'Nandi',
    president: [
      { candidate: 'Candidate 1', party: 'UDA', votes: 34400 },
      { candidate: 'Candidate 2', party: 'ODM', votes: 54000 },
      { candidate: 'Candidate 3', party: 'INDEPENDENT', votes: 16450 },
      { candidate: 'Candidate 4', party: 'Party D', votes: 2340 },
    ],
    governor: [
      { candidate: 'Candidate 1', party: 'UDA', votes: 10000 },
      { candidate: 'Candidate 2', party: 'ODM', votes: 8000 },
      { candidate: 'Candidate 3', party: 'Party C', votes: 6000 },
      { candidate: 'Candidate 4', party: 'INDEPENDENT', votes: 4000 },
    ],
    senate: [
      { candidate: 'Candidate 1', party: 'UDA', votes: 9000 },
      { candidate: 'Candidate 2', party: 'ODM', votes: 7000 },
      { candidate: 'Candidate 3', party: 'INDEPENDENT', votes: 5000 },
      { candidate: 'Candidate 4', party: 'JUBILEE', votes: 3000 },
    ],
    womenRepresentative: [
      { candidate: 'Candidate 1', party: 'ODM', votes: 8000 },
      { candidate: 'Candidate 2', party: 'UDA', votes: 5000 },
      { candidate: 'Candidate 3', party: 'INDEPENDENT', votes: 4000 },
      { candidate: 'Candidate 4', party: 'Party L', votes: 2000 },
    ],
  },
  {
    name: 'Wajir',
    president: [
      { candidate: 'Candidate 1', party: 'UDA', votes: 9600 },
      { candidate: 'Candidate 2', party: 'ODM', votes: 54000 },
      { candidate: 'Candidate 3', party: 'INDEPENDENT', votes: 16450 },
      { candidate: 'Candidate 4', party: 'Party D', votes: 2340 },
    ],
    governor: [
      { candidate: 'Candidate 1', party: 'UDA', votes: 10000 },
      { candidate: 'Candidate 2', party: 'ODM', votes: 8000 },
      { candidate: 'Candidate 3', party: 'Party C', votes: 6000 },
      { candidate: 'Candidate 4', party: 'INDEPENDENT', votes: 4000 },
    ],
    senate: [
      { candidate: 'Candidate 1', party: 'UDA', votes: 9000 },
      { candidate: 'Candidate 2', party: 'ODM', votes: 7000 },
      { candidate: 'Candidate 3', party: 'INDEPENDENT', votes: 5000 },
      { candidate: 'Candidate 4', party: 'JUBILEE', votes: 3000 },
    ],
    womenRepresentative: [
      { candidate: 'Candidate 1', party: 'ODM', votes: 8000 },
      { candidate: 'Candidate 2', party: 'UDA', votes: 5000 },
      { candidate: 'Candidate 3', party: 'INDEPENDENT', votes: 4000 },
      { candidate: 'Candidate 4', party: 'Party L', votes: 2000 },
    ],
  },
];
export { County };

