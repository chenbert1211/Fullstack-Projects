const {TwitterApi} = require('twitter-api-v2');

const client = new TwitterApi({
    appKey: 'SoY0IPtTsg0tYjrIW1LIWnGWH',
    appSecret: 'CBoJV2PedgiLggU6vBIRLxE9ipH3eg15Jlk406yHu8M1GZWocp',
accessToken:'1555548259728461826-HXblBRL43TtdZ4AxTtOBsszGiC5tRP',
accessSecret:'oEF5A9fphhtp0GvmhUyjE66LMgjwEL5hLYoA5gTJrzN9s'
})

const rwClient = client.readWrite;

module.exports = rwClient