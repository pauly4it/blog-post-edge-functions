# Edge Function Blog Post Data and References

This repo contains the raw performance data, function code, testing code, and data analysis for my performance comparison of AWS CloudFront Functions, AWS Lambda@Edge, and Cloudflare Workers. My findings show CloudFront Functions are 20% faster than Cloudflare Workers and 230% faster than Lambda@Edge when used as a short link forwarding service:

![General performance results](assets/response_performance_results.png)

The full blog post covering my testing methodology, results breakdown, and background information is available on Medium at [go.foryt.com/edge-fn](https://go.foryt.com/edge-fn).
- And yes, that is a short link using my CloudFront Function code (GitHub repo: [cloudfront-short-url-redirect](https://github.com/pauly4it/cloudfront-short-url-redirect)).

A copy of my article is also included in this repo for reference: [article.md](article.md).

## Contents

- `/assets` - Images used in my blog post
- `/data` - Curl performance data output in CSV format for each function
- `/functions` - Function code specific to each service
- `/notebooks` - Jupyter Notebook with performance calculations
- `/tests` - GitHub Workflow example to run curl against 5 different paths for a base URL

## Setup

To run the Jupyter Notebook locally, first install the required packages using pip:

`pip install -r notebooks/requirements.txt`
