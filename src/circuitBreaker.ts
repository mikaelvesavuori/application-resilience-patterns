import CircuitBreaker from 'opossum';

import { greet } from './utils/greet';
import { end } from './utils/end';

/**
 * @description The entry point for the circuit breaker functionality.
 */
export async function circuitBreakerHandler(url: string, input: Record<string, any>) {
  const breaker = new CircuitBreaker(callDemoService, {
    timeout: 5 * 1000,
    errorThresholdPercentage: 100,
    resetTimeout: 30 * 1000
  });

  breaker.fallback(() => 'Sorry, out of service right now');

  const result = await breaker
    .fire(url, input)
    .then((res: any) => res)
    .catch(console.error);

  //const state = breaker.toJSON();
  //console.log('-----\n', state);

  return end(result);
}

async function callDemoService(url: string, input: Record<string, any>) {
  return new Promise(async (resolve, reject) => {
    const result = await greet(url, input);

    if (result) resolve(result);
    reject();
  });
}
