import { find, propEq } from 'ramda';

const users = [
  { id: '23', firstName: 'Bill', age: 20, companyId: '1' },
  { id: '40', firstName: 'Alex', age: 40, companyId: '2' },
  { id: '41', firstName: 'Nick', age: 40, companyId: '2' },
];

export default {
  Query: {
    hello: (parent, args, _) => 'hiii',
    user: (root, args, _) => find(propEq('id', args.id))(users),
  },
};

