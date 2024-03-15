import axios from "axios";

export const handler = async (event, context) => {
    for (const message of event.Records) {
        try {
            const response = await axios.post(`${process.env.PAGAMENTO_API}/pagamentos`, message.body);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }
    console.info("done");
};
