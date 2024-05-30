import { Quote } from './types';

export function getRandomInt(min: number, max: number) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

export const getRandomQuote = (quotes: Quote[] | null): Quote | null => {
  if (quotes !== null) {
    const randomNumber = getRandomInt(0, quotes.length);

    return quotes[randomNumber];
  }
  return null;
};
