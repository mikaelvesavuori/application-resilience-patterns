/**
 * @description Return a API Gateway response.
 */
export function end(message: string, statusCode = 200) {
  return {
    statusCode,
    body: JSON.stringify({ message })
  };
}
