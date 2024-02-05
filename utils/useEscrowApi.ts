export default async (
  path: string,
  options?: RequestInit
): Promise<Response> => {
  return await useRequest(`/escrow-web-services/web/${path}`, options);
};
