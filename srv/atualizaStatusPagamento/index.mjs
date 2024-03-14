const https = require("https");
const { URL } = require("url");

export const handler = async (event, context) => {
    console.log("EVENT: \n" + JSON.stringify(event, null, 2));
    for (const message of event.Records) {
        try {
            console.log("Message: \n" + JSON.stringify(message.body, null, 2));
            const data = JSON.stringify(message.body);

            // Extrai o hostname e path da URL da variável de ambiente
            const { hostname } = new URL(process.env.PEDIDO_API);
            const path = `/${message.identificador}/statusPagamento`;

            // Constrói a URL completa com os parâmetros
            const url = new URL(path, `https://${hostname}`);
            url.searchParams.append('parametro', 'valor');

            const options = {
                hostname: url.hostname,
                port: 443,
                path: url.pathname + url.search,
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
