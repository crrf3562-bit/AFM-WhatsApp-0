// ============================================
// AFM WHATSAPP
// SISTEMA DE LOGIN
// ============================================

document.addEventListener("DOMContentLoaded", function () {

    const formLogin = document.getElementById("form-login");

    const nome = document.getElementById("nome");
    const usuario = document.getElementById("usuario");
    const setor = document.getElementById("setor");
    const senha = document.getElementById("senha");
    const lembrar = document.getElementById("lembrar");
    const btnEntrar = document.getElementById("btn-entrar");


    // ============================================
    // USUÁRIOS DO SISTEMA
    // ============================================

    const usuarios = [

        {
            nome: "Câmera TI",
            usuario: "camera.ti",
            setor: "Câmera TI",
            senha: "Afm@Cam2026!"
        },

        {
            nome: "RH",
            usuario: "rh",
            setor: "RH",
            senha: "Afm@Rh2026!"
        },

        {
            nome: "PCP",
            usuario: "pcp",
            setor: "PCP",
            senha: "Afm@Pcp2026!"
        },

        {
            nome: "DY",
            usuario: "dt",
            setor: "DY",
            senha: "Afm@Dt2026!"
        },

        {
            nome: "Administrador",
            usuario: "admin",
            setor: "Todos",
            senha: "Afm@Admin2026!"
        },

        {
            nome: "João Silva",
            usuario: "joao",
            setor: "Produção",
            senha: "Afm@Joao2026!"
        },

      {
    nome: "Ambulatório",
    usuario: "ambulatorio",
    setor: "Ambulatório",
    senha: "Afm@2026!"
},

        { nome: "Equipe Modelação", usuario: "modelacao", setor: "Modelação", senha: "Afm@Model2026!" },
        { nome: "Equipe Segurança", usuario: "seguranca", setor: "Segurança", senha: "Afm@Seg2026!" },
        { nome: "Portaria", usuario: "portaria", setor: "Portaria", senha: "Afm@Port2026!" },
        { nome: "Sala de Encarregado", usuario: "encarregado", setor: "Sala de Encarregado", senha: "Afm@Enc2026!" },
        { nome: "Almoxarife", usuario: "almoxarife", setor: "Almoxarife", senha: "Afm@Almox2026!" },
        { nome: "Equipe Mecânica", usuario: "mecanica", setor: "Mecânica", senha: "Afm@Mec2026!" },
        { nome: "Equipe Elétrica", usuario: "eletrica", setor: "Elétrica", senha: "Afm@Ele2026!" },
        { nome: "Equipe Manutenção", usuario: "manutencao", setor: "Manutenção", senha: "Afm@Manut2026!" },
        { nome: "Administração", usuario: "administracao", setor: "Administração", senha: "Afm@2026!" },
        { nome: "Administrativo", usuario: "administrativo", setor: "Administrativo", senha: "Afm@2026!" },
        { nome: "Almoxarifado", usuario: "almoxarifado", setor: "Almoxarifado", senha: "Afm@2026!" },
        { nome: "Compras", usuario: "compras", setor: "Compras", senha: "Afm@2026!" },
        { nome: "Contabilidade", usuario: "contabilidade", setor: "Contabilidade", senha: "Afm@2026!" },
        { nome: "Controladoria", usuario: "controladoria", setor: "Controladoria", senha: "Afm@2026!" },
        { nome: "Engenharia", usuario: "engenharia", setor: "Engenharia", senha: "Afm@2026!" },
        { nome: "Expedição", usuario: "expedicao", setor: "Expedição", senha: "Afm@2026!" },
        { nome: "Financeiro", usuario: "financeiro", setor: "Financeiro", senha: "Afm@2026!" },
        { nome: "Fiscal", usuario: "fiscal", setor: "Fiscal", senha: "Afm@2026!" },
        { nome: "Gestão", usuario: "gestao", setor: "Gestão", senha: "Afm@2026!" },
        { nome: "Informática", usuario: "informatica", setor: "Informática", senha: "Afm@2026!" },
        { nome: "Jurídico", usuario: "juridico", setor: "Jurídico", senha: "Afm@2026!" },
        { nome: "Logística", usuario: "logistica", setor: "Logística", senha: "Afm@2026!" },
        { nome: "Marketing", usuario: "marketing", setor: "Marketing", senha: "Afm@2026!" },
        { nome: "PCP – Planejamento e Controle da Produção", usuario: "pcp.planejamento.e.controle.da.producao", setor: "PCP – Planejamento e Controle da Produção", senha: "Afm@2026!" },
        { nome: "Qualidade", usuario: "qualidade", setor: "Qualidade", senha: "Afm@2026!" },
        { nome: "Recursos Humanos (RH)", usuario: "recursos.humanos.rh", setor: "Recursos Humanos (RH)", senha: "Afm@2026!" },
        { nome: "Segurança do Trabalho", usuario: "seguranca.do.trabalho", setor: "Segurança do Trabalho", senha: "Afm@2026!" },
        { nome: "TI – Tecnologia da Informação", usuario: "ti.tecnologia.da.informacao", setor: "TI – Tecnologia da Informação", senha: "Afm@2026!" },
        { nome: "Vendas", usuario: "vendas", setor: "Vendas", senha: "Afm@2026!" },
        { nome: "Comercial", usuario: "comercial", setor: "Comercial", senha: "Afm@2026!" },
        { nome: "Diretoria", usuario: "diretoria", setor: "Diretoria", senha: "Afm@2026!" },
        { nome: "Gerência", usuario: "gerencia", setor: "Gerência", senha: "Afm@2026!" },
        { nome: "Supervisão", usuario: "supervisao", setor: "Supervisão", senha: "Afm@2026!" },
        { nome: "Serviços Gerais", usuario: "servicos.gerais", setor: "Serviços Gerais", senha: "Afm@2026!" },
        { nome: "Transportes", usuario: "transportes", setor: "Transportes", senha: "Afm@2026!" },
        { nome: "Recepção", usuario: "recepcao", setor: "Recepção", senha: "Afm@2026!" },
        { nome: "Desenvolvimento", usuario: "desenvolvimento", setor: "Desenvolvimento", senha: "Afm@2026!" },
        { nome: "Projetos", usuario: "projetos", setor: "Projetos", senha: "Afm@2026!" },
        { nome: "Compras e Suprimentos", usuario: "compras.e.suprimentos", setor: "Compras e Suprimentos", senha: "Afm@2026!" },
        { nome: "Atendimento", usuario: "atendimento", setor: "Atendimento", senha: "Afm@2026!" },
        { nome: "Patrimônio", usuario: "patrimonio", setor: "Patrimônio", senha: "Afm@2026!" },
        { nome: "Meio Ambiente", usuario: "meio.ambiente", setor: "Meio Ambiente", senha: "Afm@2026!" },
        { nome: "Laboratório", usuario: "laboratorio", setor: "Laboratório", senha: "Afm@2026!" },
        { nome: "Usinagem", usuario: "usinagem", setor: "Usinagem", senha: "Afm@2026!" },
        { nome: "Corte", usuario: "corte", setor: "Corte", senha: "Afm@2026!" },
        { nome: "Solda", usuario: "solda", setor: "Solda", senha: "Afm@2026!" },
        { nome: "Operação", usuario: "operacao", setor: "Operação", senha: "Afm@2026!" },
        { nome: "Manutenção Industrial", usuario: "manutencao.industrial", setor: "Manutenção Industrial", senha: "Afm@2026!" },
        { nome: "Manutenção Elétrica", usuario: "manutencao.eletrica", setor: "Manutenção Elétrica", senha: "Afm@2026!" },
        { nome: "Manutenção Mecânica", usuario: "manutencao.mecanica", setor: "Manutenção Mecânica", senha: "Afm@2026!" },
        { nome: "AGM-DP", usuario: "agm.dp", setor: "AGM-DP", senha: "Afm@2026!" },
        { nome: "Serviços Gerais (Neia)", usuario: "servicos.gerais.neia", setor: "Serviços Gerais (Neia)", senha: "Afm@2026!" }    ];

        


    // ============================================
    // CARREGAR USUÁRIO SALVO
    // ============================================

    const usuarioSalvo = localStorage.getItem("afmUsuario");

    if (usuarioSalvo) {

        try {

            const dados = JSON.parse(usuarioSalvo);

            nome.value = dados.nome || "";
            usuario.value = dados.usuario || "";
            setor.value = dados.setor || "";

            lembrar.checked = true;

        } catch (erro) {

            console.error(
                "Erro ao carregar usuário:",
                erro
            );

        }

    }


    function normalizar(valor) {
        return String(valor || "")
            .trim()
            .toLocaleLowerCase("pt-BR")
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");
    }

    // ============================================
    // LOGIN
    // ============================================

    formLogin.addEventListener("submit", function (event) {

        event.preventDefault();


        const nomeValor = nome.value.trim();
        const usuarioValor = usuario.value.trim();
        const setorValor = setor.value;
        const senhaValor = senha.value.trim();


        // ========================================
        // VALIDAR NOME
        // ========================================

        if (nomeValor === "") {

            alert("Digite seu nome.");

            nome.focus();

            return;
        }


        // ========================================
        // VALIDAR USUÁRIO
        // ========================================

        if (usuarioValor === "") {

            alert("Digite seu usuário.");

            usuario.focus();

            return;
        }


        // ========================================
        // VALIDAR SETOR
        // ========================================

        if (setorValor === "") {

            alert("Selecione o setor.");

            setor.focus();

            return;
        }


        // ========================================
        // VALIDAR SENHA
        // ========================================

        if (senhaValor === "") {

            alert("Digite sua senha.");

            senha.focus();

            return;
        }


        // ============================================
        // PROCURAR USUÁRIO
        // ============================================

        const usuarioEncontrado = usuarios.find(function (item) {
            return (
                normalizar(item.usuario) === normalizar(usuarioValor) &&
                normalizar(item.setor) === normalizar(setorValor) &&
                item.senha === senhaValor
            );
        });


        // ============================================
        // LOGIN INVÁLIDO
        // ============================================

        if (!usuarioEncontrado) {

            alert(
                "Usuário, setor ou senha incorretos."
            );

            senha.focus();

            return;
        }


        // ============================================
        // DADOS DO USUÁRIO LOGADO
        // ============================================

        const dadosUsuario = {

            nome: nomeValor,

            usuario: usuarioEncontrado.usuario,

            setor: usuarioEncontrado.setor

        };


        // ============================================
        // SALVAR SESSÃO
        // ============================================

        sessionStorage.setItem(
            "afmSessao",
            JSON.stringify(dadosUsuario)
        );


        // ============================================
        // LEMBRAR-ME
        // ============================================

        if (lembrar.checked) {

            localStorage.setItem(
                "afmUsuario",
                JSON.stringify(dadosUsuario)
            );

        } else {

            localStorage.removeItem("afmUsuario");

        }


        // ============================================
        // ALTERAR BOTÃO
        // ============================================

        btnEntrar.disabled = true;

        btnEntrar.textContent = "⏳ Entrando...";


        // ============================================
        // ABRIR CONVERSAS
        // ============================================

        setTimeout(function () {

            window.location.href = "conversa.html";

        }, 500);

    });

});