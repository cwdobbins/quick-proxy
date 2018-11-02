# quick-proxy
Quick http/https proxy server

# running
node quick-proxy.js --target=<target-url> --secure=<true|false> --localPort=<localPort>

## target

Should be a the base destination url, such as https://api.twitter.com, etc

## secure

Boolean value, whether the connection to the target will use SSL or not

## localPort

The port on http://localhost to run this proxy server
