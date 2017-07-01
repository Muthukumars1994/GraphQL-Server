import { find, propEq } from 'ramda';

const users = [
  { id: '1', firstName: 'Bill', age: 20 },
  { id: '2', firstName: 'Alex', age: 40 },
  { id: '3', firstName: 'Nick', age: 40 },
];

export default {
  Query: {
    hello: (parent, args, _) => 'hiii',
    user: (parent, args, _) => find(propEq('id', args.id))(users),
  },
};

