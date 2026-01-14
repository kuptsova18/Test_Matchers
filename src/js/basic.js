export default function sum(items) {
  let result = 0;
  for (const item of items) {
    result += item;
  }
  return result;
}

export function SortHealth(heroes){
  return heroes.sort((a,b) => b.health - a.health);
}