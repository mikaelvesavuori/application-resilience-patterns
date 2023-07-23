# Application resilience patterns

Demos of various ways to handle application-level resilience patterns, such as:

- Exponential backoff
- Retries
- Timeouts
- Circuit breaker

TODO

## Reasons to use these patterns

> The Circuit Breaker pattern has a different purpose than the "Retry pattern". The "Retry pattern" enables an application to retry an operation in the expectation that the operation will eventually succeed. The Circuit Breaker pattern prevents an application from performing an operation that's likely to fail. An application can combine these two patterns. However, the retry logic should be sensitive to any exception returned by the circuit breaker, and it should abandon retry attempts if the circuit breaker indicates that a fault is not transient.

Source: [Microsoft Learn: Implement the Circuit Breaker pattern](https://learn.microsoft.com/en-us/dotnet/architecture/microservices/implement-resilient-applications/implement-circuit-breaker-pattern)

## Rolling your own vs using (for example) AWS

Note that when using AWS services, [they will (under the hood) run retries, backoff, and timeouts](https://docs.aws.amazon.com/lambda/latest/dg/security-resilience.html). However, this of course doesn't mean you shouldn't use these patterns _on the application level_.

## References

- [Wikipedia: Exponential backoff](https://en.wikipedia.org/wiki/Exponential_backoff)
- [@aws-sdk/util-retry](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/modules/_aws_sdk_util_retry.html)
- [Timeouts, retries, and backoff with jitter](https://aws.amazon.com/builders-library/timeouts-retries-and-backoff-with-jitter/)
- [How to implement the AWS recommended exponential backoff and jitter in JavaScript (and Observable)](https://frankcontrepois.com/post/20220522-tech-exponential-backoff-in-javascript/)
- [AWS Architecture Blog: Exponential Backoff And Jitter](https://aws.amazon.com/blogs/architecture/exponential-backoff-and-jitter/)
- [opossum](https://github.com/nodeshift/opossum)
- [Automatically retrying a failing function in JS/TS](https://mtsknn.fi/blog/js-retry-on-fail/)
- [Microsoft Learn: Retry pattern](https://learn.microsoft.com/en-us/azure/architecture/patterns/retry)
- [Building well-architected serverless applications: Building in resiliency – part 1](https://aws.amazon.com/blogs/compute/building-well-architected-serverless-applications-building-in-resiliency-part-1/)
- [AWS Lambda: Resilience under-the-hood](https://aws.amazon.com/blogs/compute/aws-lambda-resilience-under-the-hood/)
- [When should I use a dead-letter queue?](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html#sqs-dead-letter-queues-when-to-use)
