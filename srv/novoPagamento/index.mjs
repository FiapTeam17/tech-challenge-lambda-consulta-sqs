export const handler = async (event, context) => {
    console.log("EVENT: \n" + JSON.stringify(event, null, 2));
    for (const message of event.Records) {
        try {
            console.log("Message: \n" + JSON.stringify(message.body, null, 2));
        } catch (err) {
            console.error("An error occurred");
            throw err;
        }
    }
    console.info("done");
};
