export default function SortHealth(heroes) {
  return heroes.sort((a, b) => b.health - a.health);
}
