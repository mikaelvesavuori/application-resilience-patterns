import { circuitBreakerHandler } from './circuitBreaker';
import { retryHandler } from './retry';

async function main() {
  const url = 'https://wkwabaj2gg.execute-api.eu-north-1.amazonaws.com/greetStart';
  const input = {
    id: 1
  };

  console.log('Running circuit breaker handler...\n');
  const cbResult = await circuitBreakerHandler(url, input);
  console.log(cbResult);

  console.log('\n');

  console.log('Running retry handler...\n');
  const retryResult = await retryHandler(url, input, 3);
  console.log(retryResult);
}

main();
