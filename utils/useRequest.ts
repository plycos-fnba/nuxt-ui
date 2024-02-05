export default async (path: string, options?: RequestInit): Promise<Response> => {
  const res = await useNuxtApp().$request(path, options);
  if (!res.ok) console.error(res.status, await res.text());
  return res;
}
