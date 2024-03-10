export const handler = async (event, context) => {
    console.log(`Event ${event}`);
    for (const message of event.Records) {
        console.log(`Processed message ${message.body}`);
    }
    console.info("done");
};


