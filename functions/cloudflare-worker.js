async function handleRequest(request) {
  const requestURL = new URL(request.url);
  const redirectMap = new Map([
    ['/test', 'example.com'],
    ['/bar', 'example.com/baz']
  ]);

  // Set response URL redirect
  const location = redirectMap.get(requestURL.pathname) || 'github.com';

  // Log request data
  console.log(new Map(request.headers));

  // Return a 302 redirect
  return Response.redirect('https://' + location, 302);
}

addEventListener('fetch', async event => {
  event.respondWith(handleRequest(event.request));
});
