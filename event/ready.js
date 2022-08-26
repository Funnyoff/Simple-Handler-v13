module.exports = {
    name: 'ready',
    once: true,

    async execute(client) {
        console.log(`${client.user.username} is ready.`)

        var compteurStatus = 1
        setInterval(async () => {
            status = [`Base by Funny`]
            compteurStatus = (compteurStatus + 1) % (status.length);
            client.user.setPresence({
                activities: [{
                    name: `${status[compteurStatus]}`,
                    type: "WATCHING",
                    url: "https://www.twitch.tv/funnylpb"
                  }],
                  status: "online"})
        }, 5000);
    }
}