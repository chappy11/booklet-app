export function divideBySets(data:any[]) {
  const sets = [];
  for (let i = 0; i < data.length; i += 6) {
    const set = data.slice(i, i + 6);
    sets.push(set);
  }
  return sets;
}
