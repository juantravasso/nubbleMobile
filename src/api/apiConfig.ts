import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer Mg.j9aLhAlSInCs6LrFmpz3WlKogM4bYAZHbzA5bZuuKgiV9IaiEhwWsAgskqNF',
  },
});