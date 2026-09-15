const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const servidor = http.createServer(app);

const io = new Server(servidor, {
    cors: {
        origin: "*",
        methods: ["GET", "POST", "DELETE"]
    }
});

app.use(cors());
app.use(express.json());

app.get("/api/status", (req, res) => {
    res.json({
        sucesso: true,
        sistema: "AFM WhatsApp",
        servidor: "online"
    });
});

app.post("/api/login", (req, res) => {
    const { nome, usuario, senha, setor } = req.body;

    if (!nome || !usuario || !senha || !setor) {
        return res.status(400).json({
            sucesso: false,
            mensagem: "Preencha todos os campos."
        });
    }

    if (usuario === "admin" && senha === "1234") {
        return res.json({
            sucesso: true,
            usuario: {
                nome,
                usuario,
                setor
            }
        });
    }

    return res.status(401).json({
        sucesso: false,
        mensagem: "Usuário ou senha inválidos."
    });
});

io.on("connection", (socket) => {
    console.log("Usuário conectado:", socket.id);

    socket.on("mensagem", (mensagem) => {
        console.log("Mensagem recebida:", mensagem);

        io.emit("mensagem", mensagem);
    });

    socket.on("disconnect", () => {
        console.log("Usuário desconectado:", socket.id);
    });
});

const PORTA = process.env.PORT || 3000;

servidor.listen(PORTA, () => {
    console.log(`AFM WhatsApp servidor iniciado na porta ${PORTA}`);
});
