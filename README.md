# dsptc
Dhamma School Parent &amp; Teachers Committee


npm install

npm run dev

Note :
If 400 error when sending sms
Get Token (curl) : 
curl -X POST -H 'Content-Type: application/x-www-form-urlencoded' -d 'grant_type=client_credentials&client_id=TVVqxx4bfLCteaQxnkLFxej2Q5bK7mSS&client_secret=obo6HdLj4OjpTfKN&scope=NSMS' 'https://tapi.telstra.com/v2/oauth/token'
Get provisioning (curl) :
curl -X POST https://tapi.telstra.com/v2/messages/provisioning/subscriptions -H 'authorization: Bearer L1Ww1BoOICgupmblffA5RKoK54OG' -H 'cache-control: no-cache' -H 'content-type: application/json' -d '{"activeDays":180,"notifyURL":""}'
