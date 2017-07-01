import axios from 'axios';

const AxiosPort = 4200;


export default {
  Query: {
    hello: (parent, args, context) => 'hiii',
    user: (parent, { id }, context) => axios.get(`http://localhost:${AxiosPort}/users/${id}`)
      .then(res => res.data),
  },
  User: {
    company: ({ companyId }, args, context) => axios.get(`http://localhost:${AxiosPort}/companies/${companyId}`)
      .then(res => res.data),
  },
};

