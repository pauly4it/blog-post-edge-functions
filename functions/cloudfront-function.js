function handler(event) {
    var request = event.request;
    var uri = request.uri;

    // Set response URL redirect
    var newLink = {
        'test': 'example.com',
        'bar': 'example.com/baz'
    }[uri.substring(1)] || 'github.com';

    // Log request data and redirect URL
    var output = {};
    output[request.method] = uri;
    output.Redirect = newLink;
    output.Headers = request.headers;
    console.log(output);

    // Return a 302 redirect
    return {
        statusCode: 302,
        statusDescription: 'Found',
        headers: {
            'location': {
                value: 'https://' + newLink
            }
        }
    };
};
