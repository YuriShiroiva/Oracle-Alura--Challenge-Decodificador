<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Decodificador de Texto - ONE</title>
        <link rel="icon" type="image/x-icon" href="Imagens/favicon-blue.ico">
        <link rel="stylesheet" href="style.css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet">
    </head>
    
    <body>
        <div class="app-container">
            <div class="wrap-input-header">
                <header>
                    <img id="logo" class="logo unselectable" unselectable="on" src="Imagens/logo-alura.svg" alt="Logo da Alura">                
                </header>

                <section class="input-message">
                    <label hidden for="msgTextarea">Digite seu texto aqui</label>
                    <textarea id="msgTextarea" name="msgTextarea" rows="3" cols="3" placeholder="Digite seu texto"></textarea>
                    
                    <div class="btn-container">
                        <div class="requirements">
                            <img src="Imagens/exclamation-circle.svg" alt="">
                            <span>Apenas letras minúsculas e sem acento.</span>
                        </div>
                        <div class="btn-encrypt-decrypt">
                            <button id="btnEncrypt" class="btn dark-blue unselectable">Criptografar</button>
                            <button id="btnDecrypt" class="btn white unselectable">Descriptografar</button>
                        </div>
                    </div>
                </section>
            </div>

            <section id="result" class="result">
                <div class="msg-not-found fade-in">
                    <img id="imgNoMsgFound" src="Imagens/no-message-found-blue.svg" alt="Nenhuma mensagem encontrada.">
                    <h3>Nenhuma mensagem encontrada</h2>
                    <p>Digite um texto que você deseja criptografar ou descriptografar.</p>
                </div>
            </section>
        </div>

        <footer>
            <ul>
                <li>© Yuri Shiroiva</li>
                <li>|</li>
                <li>
                    <a href="https://github.com/YuriShiroiva/" target="_blank"><img src="Imagens/github-icon.svg" alt="Logo do GitHub"> GitHub</a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/yurishiroiva/" target="_blank"><img src="Imagens/linkedin-icon.svg" alt="Logo do LinkedIn"> LinkedIn</a>
                </li>
            </ul>
        </footer>

        <script src="script.js"></script>
    </body>
</html>
