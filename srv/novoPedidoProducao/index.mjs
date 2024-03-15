import axios from "axios";

export const handler = async (event, context) => {

    for (const message of event.Records) {
        try {
            const data = JSON.stringify(message.body);
            const response = await axios.post(`${process.env.PRODUCAO_API}/pedidos`, data);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }
    console.info("done");
};
