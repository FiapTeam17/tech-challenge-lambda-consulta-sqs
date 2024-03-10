export const handler = async (event, context) => {
    console.log("EVENT: \n" + JSON.stringify(event, null, 2));
    for (const message of event.Records) {
        await processMessageAsync(message);
    }
    console.info("done");
    return context.logStreamName;
};

async function processMessageAsync(message): Promise<any> {
    console.log("Message: \n" + JSON.stringify(message.body, null, 2));
}


