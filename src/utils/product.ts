export function normalizeDescription<T extends { description: string | null }>(
  list: T[],
): (Omit<T, "description"> & { description: string })[] {
  return list.map((item) => {
    return { ...item, description: item.description || "" };
  });
}
