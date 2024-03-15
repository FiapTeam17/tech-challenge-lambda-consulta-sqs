import * as https from 'https';

export const handler = async (event, context) => {
    console.log("EVENT: \n" + JSON.stringify(event, null, 2));
    for (const message of event.Records) {
        try {
            console.log("Message: \n" + JSON.stringify(message.body, null, 2));
            const data = {
                status: message.body.status
            };

            const options = {
                hostname: process.env.PEDIDO_API,
                path: `/pedidos/${message.body.idPedido}/status`,
                method: 'PATCH',
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
