# Edge Function Blog Post Data and References

This repo contains the raw performance data, function code, and test code for my performance comparison of AWS CloudFront Functions, AWS Lambda@Edge, and CloudFlare Workers.

The full blog post is available here: https://medium.com/@pauly4it/cloudfront-functions-20-faster-than-cloudflare-workers-230-faster-than-lambda-edge-c65c26221296

## Contents

- `/data` - Curl performance data output in CSV format for each function
- `/functions` - Function code specific to each service
- `/notebooks` - Jupyter Notebook with performance calculations
- `/tests` - GitHub Workflow example to run curl against 5 different paths for a base URL

## Setup

To run the Jupyter Notebook locally, install the required packages first by running:

`pip install -r notebooks/requirements.txt`
