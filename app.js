//constantes
const clientId = "";//id de la Aplicacion
const DcRPC = require("discord-rpc");
const main = new DcRPC.Client({
    transport: "ipc"
});

DcRPC.register(clientId); //registrar la Aplicacion

async function setActivity() {

    if (!main) return; //checar si no esta el estado

    //estado
    main.setActivity({
        details: "texto 1", 
        state: "ROBLOX",
        startTimestamp: Date.now(),
        largeImageKey: "roblox",
        largeImageText: "¡Jugando a ROBLOX!",
        smallImageKey: "roblox",
        smallImageText: '¡Hola!',
        instance: false,
        buttons: [
            {
                label: "Nombre",
                url: "https://www.google.com/"
            },
            {
                label: "Nombre 2",
                url: "https://www.youtube.com/"
            }
        ]
    });

}

main.on("ready", async () => {
    setActivity();

    setInterval(async () => {
        setActivity();
    }, 15 * 1000);
});

main.login(({
    clientId
}))
    .then(async () => {
        console.log("Conectado!")
    })
    .catch(error => {
        console.log(error)
    });