export const handler = async (event, context) => {
    console.log("EVENT: \n" + JSON.stringify(event, null, 2));
    for (const message of event.Records) {
        await processMessageAsync(message);
    }
    console.info("done");
    return context.logStreamName;
};

async function processMessageAsync(message): Promise<any> {
    try {
        console.log("Message: \n" + JSON.stringify(message.body, null, 2));
        // TODO: Do interesting work based on the new message
        await Promise.resolve(1); //Placeholder for actual async work
    } catch (err) {
        console.error("An error occurred");
        throw err;
    }
}


