## SimpleRequest
A quick method to handle HTTP/S request.

#### Install
Nomral NPM Installation.
> npm install @leemcdonald-au/simplerequest

#### Usage
```javascript
import SimpleRequest from '@leemcdonald-au/simplerequest'

// As an EventEmitter
const request = new SimpleRequest({ host: 'www.google.com', port: 443 })
request.on('end',   data => console.log(data))
request.on('error', error => console.error(error))

// As a Promise.
const request = SimpleRequest.promise({ host: 'www.google.com', port: 443 })
request.then(data => console.log(data)).catch(error => console.error(error))
```

#### Changelog
- 1.0.2
    - request.value was never actually set.

##### Support
- RVN: RPzCvWdmgqPTBA5qMQFuRPfNoJmvPnVzw8
- ARK: Aeh9tR1zjE34hBrYfSD1EMfL1cxpkaVJKb
- ETH: 0xd9979f482da58b4432d0f52eb456f7dd1f4897e6
- BTC: 1HzR3Vyu231E8SsGLUbNYSb92bn6MGLEaV