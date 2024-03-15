import axios from "axios";

export const handler = async (event, context) => {

    for (const message of event.Records) {
        try {
            console.log("Body: ", message.body);
            const response = await axios.post(`${process.env.PRODUCAO_API}/pedidos`,
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
