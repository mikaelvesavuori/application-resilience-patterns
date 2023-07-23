import { end } from './utils/end';
import { greet } from './utils/greet';

/**
 * @description The entry point for the retry functionality.
 */
export async function retryHandler(url: string, input: Record<string, any>, maxRetries: number) {
  try {
    const result = (await retry(greet, { url, input, maxRetries })) || '';
    return end(result);
  } catch (error: any) {
    const message = error?.message || 'Unknown error';
    return end(message, 500);
  }
}

/**
 * @description Retry a function.
 * @see https://mtsknn.fi/blog/js-retry-on-fail/
 */
export const retry = async <T>(
  fn: (url: string, input: Record<string, any>) => Promise<T> | T,
  args: {
    url: string;
    input: Record<string, any>;
    maxRetries: number;
  },
  retriesAttempted = 0
): Promise<T> => {
  const { url, input, maxRetries } = args;

  const retryIntervalMs = calculateExponentialDelayInMs(retriesAttempted);

  try {
    return await fn(url, input);
  } catch (error: any) {
    if (retriesAttempted >= maxRetries) throw error;

    console.log(`Waiting for ${retryIntervalMs} milliseconds...`);
    await wait(retryIntervalMs);

    console.log('Retrying...');
    return retry(fn, args, retriesAttempted + 1);
  }
};

const calculateExponentialDelayInMs = (retriesAttempted: number, baseDelay = 500): number =>
  Math.pow(2, retriesAttempted + 1) * baseDelay + getRandomInt(100); // Add jitter

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const getRandomInt = (max: number) => Math.floor(Math.random() * Math.floor(max));
