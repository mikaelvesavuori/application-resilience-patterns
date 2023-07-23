/**
 * @description Get greeting from service.
 */
export async function greet(url: string, input: Record<string, any>) {
  const result = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(input)
  }).then((res) => {
    if (res.status === 200) return res.text();
    throw new Error('Failed to get greeting');
  });

  return result;
}
