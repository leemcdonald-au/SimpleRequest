## SimpleRequest
A quick method to handle HTTP/S request.

```javascript
import { SimpleRequest } from 'SimpleRequest.js'

// As an EventEmitter
const request = new SimpleRequest({ host: 'www.google.com', port: 443 })
request.on('end',   data => console.log(data))
request.on('error', error => console.error(error))

// As a Promise.
const request = SimpleRequest.promise({ host: 'www.google.com', port: 443 })
request.then(data => console.log(data)).catch(error => console.error(error))
```

