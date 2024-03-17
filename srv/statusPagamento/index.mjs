import axios from "axios";

export const handler = async (event, context) => {

    for (const message of event.Records) {
        try {
            console.log("Body: ", message.body);
            const body = JSON.parse(message.body);
            const response = await axios.patch(`${process.env.PEDIDO_API}/pedidos/${body.identificador}/${body.status}`,
                message.body,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }
    console.info("done");
};
