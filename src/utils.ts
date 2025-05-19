export const getGreetingMessage = (name: string): string => {
  if (!name) return 'theref';
  return `${name}, welcome to our amazing app!`;
}; 
