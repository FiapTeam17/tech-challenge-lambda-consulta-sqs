export const handler = async (event, context) => {
    console.log("EVENT: \n" + JSON.stringify(event, null, 2));
    for (const message of event.Records) {
        console.log("Message: \n" + JSON.stringify(message.body, null, 2));
    }
    console.info("done");
    return context.logStreamName;
};


