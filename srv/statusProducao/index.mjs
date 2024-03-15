import axios from "axios";

export const handler = async (event, context) => {

    for (const message of event.Records) {
        try {
            const response = await axios.patch(`${process.env.PEDIDO_API}/pedidos/${message.body.idPedido}/status`, message.body);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }
    console.info("done");
};
