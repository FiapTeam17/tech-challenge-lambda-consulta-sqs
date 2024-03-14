const https = require("https");

export const handler = async (event, context) => {
    console.log("EVENT: \n" + JSON.stringify(event, null, 2));
    for (const message of event.Records) {
        try {
            console.log("Message: \n" + JSON.stringify(message.body, null, 2));
            const data = JSON.stringify(message.body);

            const options = {
                hostname: process.env.PAGAMENTO_API,
                port: 443,
                path: '/pagamentos',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Content-Length': data.length
                }
            }
            const req = https.request(options, res => {
                console.log(`statusCode: ${res.statusCode}`)
                res.on('data', d => {
                    process.stdout.write(d)
                })
            })
            req.on('error', error => {
                console.error(error)
            })
            req.write(data)
            req.end()

        } catch (err) {
            console.error("An error occurred");
            throw err;
        }
    }
    console.info("done");
};
