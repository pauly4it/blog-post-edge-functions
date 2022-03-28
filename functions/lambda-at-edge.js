'use strict';
exports.handler = (event, context, callback) => {
   const request = event.Records[0].cf.request;
   const uri = request.uri;

   // Set response URL redirect
   const newLink = {
      'test': 'example.com',
      'bar': 'example.com/baz'
   }[uri.substring(1)] || 'github.com';

   // Log request data and redirect URL
   let output = {};
   output[request.method] = uri;
   output.Redirect = newLink;
   output.Headers = request.headers;
   console.log(output);

   // Return a 302 redirect
   const response = {
      status: 302,
      statusDescription: 'Found',
      headers: {
         location: [{
            key: 'Location',
            value: 'https://' + newLink,
         }],
      },
   };

   callback(null, response);
};
