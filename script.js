/* =====================================================
   POKÉMON AURORA
   SCRIPT.JS
===================================================== */


/* =====================================================
   CONFIGURAÇÃO
===================================================== */

const CONFIG = {

    vip: {
        bronze: 2.99,
        silver: 5.99,
        gold: 9.99,
        diamond: 19.99,
        aurora: 29.99
    },

    currency: {
        EUR: {
            symbol: "€",
            rate: 1
        },

        BRL: {
            symbol: "R$",
            rate: 5.89
        },

        USD: {
            symbol: "$",
            rate: 1.17
        }
    }

};


/* =====================================================
   TRADUÇÕES
===================================================== */

const translations = {

    pt: {

        nav_home: "Início",
        nav_game: "Jogo",
        nav_pokedex: "Pokédex",
        nav_shop: "Loja",
        nav_pass: "Battle Pass",

        online: "● SERVIDOR ONLINE",

        hero_description:
            "Explora uma nova aventura, captura Pokémon, enfrenta treinadores e torna-te Campeão.",

        play_now: "Jogar agora",
        go_shop: "Ver loja",

        players: "Jogadores",
        pokemon: "Pokémon",
        gyms: "Ginásios",

        game_label: "A EXPERIÊNCIA",

        game_title:
            "Uma nova aventura começa aqui.",

        game_description:
            "Explora, captura Pokémon, enfrenta treinadores, conquista os ginásios e prepara-te para a Liga.",

        feature_world_title: "Explora",

        feature_world_text:
            "Descobre cidades, rotas, cavernas, segredos e diferentes áreas do mundo.",

        feature_battle_title: "Combate",

        feature_battle_text:
            "Enfrenta Pokémon selvagens, treinadores, ginásios e outros jogadores.",

        feature_champion_title:
            "Torna-te Campeão",

        feature_champion_text:
            "Conquista os emblemas e enfrenta os maiores desafios da aventura.",

        pokedex_label: "POKÉDEX",

        pokedex_title:
            "A tua coleção.",

        pokedex_description:
            "Consulta informações sobre os Pokémon disponíveis no jogo.",

        open_pokedex:
            "Abrir Pokédex",

        shop_label: "LOJA",

        shop_title:
            "Escolhe o teu VIP.",

        shop_description:
            "Desbloqueia benefícios exclusivos dentro de Pokémon Aurora.",

        bronze_description:
            "Benefícios básicos para começar.",

        bronze_1: "Tag VIP",
        bronze_2: "Recompensas exclusivas",
        bronze_3: "Kit Bronze",

        silver_description:
            "Mais vantagens e recompensas.",

        silver_1: "Tudo do Bronze",
        silver_2: "Kit Silver",
        silver_3: "Bónus de XP",

        gold_description:
            "Um pacote completo para jogadores.",

        gold_1: "Tudo do Silver",
        gold_2: "Kit Gold",
        gold_3: "Bónus de dinheiro",

        diamond_description:
            "Benefícios avançados e exclusivos.",

        diamond_1: "Tudo do Gold",
        diamond_2: "Kit Diamond",
        diamond_3: "Bónus especiais",

        aurora_badge:
            "✦ VIP MÁXIMO ✦",

        aurora_description:
            "O maior nível VIP de Pokémon Aurora, com benefícios exclusivos.",

        aurora_1: "Tudo do Diamond",
        aurora_2: "Kit exclusivo Aurora",
        aurora_3: "Battle Pass Premium",
        aurora_4: "Bónus exclusivos",
        aurora_5: "Recompensas especiais",

        buy: "Comprar",

        battle_label: "BATTLE PASS",

        battle_title:
            "Sobe de nível.",

        battle_description:
            "Ganha XP ao jogar, completa missões e desbloqueia recompensas durante a temporada.",

        open_battlepass:
            "Ver Battle Pass",

        cta_title:
            "A tua aventura começa agora.",

        cta_description:
            "Prepara a tua equipa e entra no mundo de Pokémon Aurora.",

        footer_text:
            "Explora. Combate. Torna-te Campeão.",

        footer_disclaimer:
            "Projeto independente e não afiliado à Nintendo, The Pokémon Company ou Game Freak.",

        login:
            "Entrar com Roblox"

    },


    en: {

        nav_home: "Home",
        nav_game: "Game",
        nav_pokedex: "Pokédex",
        nav_shop: "Shop",
        nav_pass: "Battle Pass",

        online: "● SERVER ONLINE",

        hero_description:
            "Explore a new adventure, catch Pokémon, battle trainers and become a Champion.",

        play_now: "Play now",
        go_shop: "View shop",

        players: "Players",
        pokemon: "Pokémon",
        gyms: "Gyms",

        game_label: "THE EXPERIENCE",

        game_title:
            "A new adventure starts here.",

        game_description:
            "Explore, catch Pokémon, battle trainers, conquer gyms and prepare for the League.",

        feature_world_title: "Explore",

        feature_world_text:
            "Discover cities, routes, caves, secrets and different areas of the world.",

        feature_battle_title: "Battle",

        feature_battle_text:
            "Battle wild Pokémon, trainers, gym leaders and other players.",

        feature_champion_title:
            "Become Champion",

        feature_champion_text:
            "Earn badges and face the biggest challenges of the adventure.",

        pokedex_label: "POKÉDEX",

        pokedex_title:
            "Your collection.",

        pokedex_description:
            "Check information about the Pokémon available in the game.",

        open_pokedex:
            "Open Pokédex",

        shop_label: "SHOP",

        shop_title:
            "Choose your VIP.",

        shop_description:
            "Unlock exclusive benefits inside Pokémon Aurora.",

        bronze_description:
            "Basic benefits to get started.",

        bronze_1: "VIP Tag",
        bronze_2: "Exclusive rewards",
        bronze_3: "Bronze Kit",

        silver_description:
            "More benefits and rewards.",

        silver_1: "Everything from Bronze",
        silver_2: "Silver Kit",
        silver_3: "XP Bonus",

        gold_description:
            "A complete package for players.",

        gold_1: "Everything from Silver",
        gold_2: "Gold Kit",
        gold_3: "Money Bonus",

        diamond_description:
            "Advanced and exclusive benefits.",

        diamond_1: "Everything from Gold",
        diamond_2: "Diamond Kit",
        diamond_3: "Special Bonuses",

        aurora_badge:
            "✦ MAX VIP ✦",

        aurora_description:
            "The highest VIP level in Pokémon Aurora, with exclusive benefits.",

        aurora_1: "Everything from Diamond",
        aurora_2: "Exclusive Aurora Kit",
        aurora_3: "Premium Battle Pass",
        aurora_4: "Exclusive Bonuses",
        aurora_5: "Special Rewards",

        buy: "Buy",

        battle_label: "BATTLE PASS",

        battle_title:
            "Level up.",

        battle_description:
            "Earn XP by playing, complete missions and unlock rewards throughout the season.",

        open_battlepass:
            "View Battle Pass",

        cta_title:
            "Your adventure starts now.",

        cta_description:
            "Prepare your team and enter the world of Pokémon Aurora.",

        footer_text:
            "Explore. Battle. Become Champion.",

        footer_disclaimer:
            "Independent project and not affiliated with Nintendo, The Pokémon Company or Game Freak.",

        login:
            "Login with Roblox"

    }

};


/* =====================================================
   ESTADO
===================================================== */

let currentLanguage =
    localStorage.getItem("auroraLanguage") || "pt";

let currentCurrency =
    localStorage.getItem("auroraCurrency") || "EUR";


/* =====================================================
   ELEMENTOS
===================================================== */

const languageButton =
    document.getElementById("languageButton");

const currencyButton =
    document.getElementById("currencyButton");

const loginButton =
    document.getElementById("loginButton");

const playButton =
    document.getElementById("playButton");

const playButtonBottom =
    document.getElementById("playButtonBottom");

const pokedexButton =
    document.getElementById("pokedexButton");

const battlePassButton =
    document.getElementById("battlePassButton");

const mobileMenuButton =
    document.getElementById("mobileMenuButton");

const mainNav =
    document.getElementById("mainNav");

const modal =
    document.getElementById("modal");

const modalTitle =
    document.getElementById("modalTitle");

const modalText =
    document.getElementById("modalText");

const modalClose =
    document.getElementById("modalClose");

const modalAction =
    document.getElementById("modalAction");


/* =====================================================
   MODAL
===================================================== */

function openModal(title, text, actionText = "OK") {

    if (!modal) return;

    modalTitle.textContent = title;
    modalText.textContent = text;
    modalAction.textContent = actionText;

    modal.classList.add("active");

    document.body.style.overflow = "hidden";
}


function closeModal() {

    if (!modal) return;

    modal.classList.remove("active");

    document.body.style.overflow = "";

}


/* =====================================================
   TRADUÇÃO
===================================================== */

function translatePage() {

    const language =
        translations[currentLanguage];

    document
        .querySelectorAll("[data-i18n]")
        .forEach(element => {

            const key =
                element.getAttribute("data-i18n");

            if (language[key]) {
                element.textContent =
                    language[key];
            }

        });


    updateLanguageButton();

}


/* =====================================================
   BOTÃO DE IDIOMA
===================================================== */

function updateLanguageButton() {

    if (!languageButton) return;

    if (currentLanguage === "pt") {

        languageButton.textContent =
            "🇵🇹 PT";

    } else {

        languageButton.textContent =
            "🇬🇧 EN";

    }

}


function toggleLanguage() {

    currentLanguage =
        currentLanguage === "pt"
            ? "en"
            : "pt";

    localStorage.setItem(
        "auroraLanguage",
        currentLanguage
    );

    translatePage();

}


/* =====================================================
   MOEDA
===================================================== */

function updateCurrencyButton() {

    if (!currencyButton) return;

    const data =
        CONFIG.currency[currentCurrency];

    currencyButton.textContent =
        `${data.symbol} ${currentCurrency}`;

}


function formatPrice(eurPrice) {

    const currency =
        CONFIG.currency[currentCurrency];

    const converted =
        eurPrice * currency.rate;

    return new Intl.NumberFormat(
        currentLanguage === "pt"
            ? "pt-PT"
            : "en-US",
        {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }
    ).format(converted);

}


function updatePrices() {

    document
        .querySelectorAll("[data-vip-price]")
        .forEach(element => {

            const vip =
                element.getAttribute(
                    "data-vip-price"
                );

            const basePrice =
                CONFIG.vip[vip];

            if (!basePrice) return;

            const currency =
                CONFIG.currency[currentCurrency];

            element.textContent =
                `${currency.symbol}${formatPrice(basePrice)}`;

        });

}


function toggleCurrency() {

    if (currentCurrency === "EUR") {

        currentCurrency = "BRL";

    } else if (currentCurrency === "BRL") {

        currentCurrency = "USD";

    } else {

        currentCurrency = "EUR";

    }

    localStorage.setItem(
        "auroraCurrency",
        currentCurrency
    );

    updateCurrencyButton();
    updatePrices();

}


/* =====================================================
   VIP
===================================================== */

function buyVIP(vipName) {

    const price =
        CONFIG.vip[vipName];

    if (!price) return;

    const currency =
        CONFIG.currency[currentCurrency];

    const converted =
        formatPrice(price);

    const vipLabel =
        vipName.charAt(0).toUpperCase() +
        vipName.slice(1);

    openModal(

        `VIP ${vipLabel}`,

        currentLanguage === "pt"

            ? `O VIP ${vipLabel} custa ${currency.symbol}${converted}. O sistema de pagamento será ligado nesta etapa.`

            : `VIP ${vipLabel} costs ${currency.symbol}${converted}. The payment system will be connected at this stage.`,

        currentLanguage === "pt"
            ? "Continuar"
            : "Continue"

    );

}


/* =====================================================
   ROBLOX LOGIN
===================================================== */

function loginRoblox() {

    openModal(

        currentLanguage === "pt"
            ? "Entrar com Roblox"
            : "Login with Roblox",

        currentLanguage === "pt"

            ? "O login oficial do Roblox será ligado aqui quando o sistema de autenticação estiver configurado."

            : "Official Roblox login will be connected here when the authentication system is configured.",

        currentLanguage === "pt"
            ? "Fechar"
            : "Close"

    );

}


/* =====================================================
   JOGAR
===================================================== */

function playGame() {

    openModal(

        currentLanguage === "pt"
            ? "Pokémon Aurora"
            : "Pokémon Aurora",

        currentLanguage === "pt"

            ? "O botão de jogar está pronto. Quando o jogo Roblox estiver publicado, este botão poderá abrir diretamente a experiência."

            : "The play button is ready. Once the Roblox game is published, this button can open the experience directly.",

        currentLanguage === "pt"
            ? "Entendido"
            : "Got it"

    );

}


/* =====================================================
   POKÉDEX
===================================================== */

function openPokedex() {

    openModal(

        currentLanguage === "pt"
            ? "Pokédex"
            : "Pokédex",

        currentLanguage === "pt"

            ? "A Pokédex está preparada. Os Pokémon e as informações serão adicionados aqui."

            : "The Pokédex is ready. Pokémon and their information will be added here.",

        "OK"

    );

}


/* =====================================================
   BATTLE PASS
===================================================== */

function openBattlePass() {

    openModal(

        "Battle Pass",

        currentLanguage === "pt"

            ? "O Battle Pass está preparado para receber as temporadas, níveis, missões e recompensas."

            : "The Battle Pass is ready for seasons, levels, missions and rewards.",

        "OK"

    );

}


/* =====================================================
   MENU MOBILE
===================================================== */

function toggleMobileMenu() {

    if (!mainNav) return;

    mainNav.classList.toggle("active");

}


/* =====================================================
   FECHAR MENU AO CLICAR
===================================================== */

function closeMobileMenu() {

    if (!mainNav) return;

    mainNav.classList.remove("active");

}


/* =====================================================
   EVENTOS
===================================================== */


/* IDIOMA */

if (languageButton) {

    languageButton.addEventListener(
        "click",
        toggleLanguage
    );

}


/* MOEDA */

if (currencyButton) {

    currencyButton.addEventListener(
        "click",
        toggleCurrency
    );

}


/* LOGIN */

if (loginButton) {

    loginButton.addEventListener(
        "click",
        loginRoblox
    );

}


/* JOGAR */

if (playButton) {

    playButton.addEventListener(
        "click",
        playGame
    );

}


if (playButtonBottom) {

    playButtonBottom.addEventListener(
        "click",
        playGame
    );

}


/* POKÉDEX */

if (pokedexButton) {

    pokedexButton.addEventListener(
        "click",
        openPokedex
    );

}


/* BATTLE PASS */

if (battlePassButton) {

    battlePassButton.addEventListener(
        "click",
        openBattlePass
    );

}


/* MENU */

if (mobileMenuButton) {

    mobileMenuButton.addEventListener(
        "click",
        toggleMobileMenu
    );

}


/* VIP */

document
    .querySelectorAll(".vip-buy-button")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const vip =
                    button.getAttribute("data-vip");

                buyVIP(vip);

            }
        );

    });


/* FECHAR MODAL */

if (modalClose) {

    modalClose.addEventListener(
        "click",
        closeModal
    );

}


/* BOTÃO DO MODAL */

if (modalAction) {

    modalAction.addEventListener(
        "click",
        closeModal
    );

}


/* CLICAR FORA DO MODAL */

if (modal) {

    modal.addEventListener(
        "click",
        event => {

            if (event.target === modal) {
                closeModal();
            }

        }
    );

}


/* LINKS DO MENU */

document
    .querySelectorAll("#mainNav a")
    .forEach(link => {

        link.addEventListener(
            "click",
            closeMobileMenu
        );

    });


/* ESC */

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            closeModal();
            closeMobileMenu();

        }

    }
);


/* =====================================================
   INICIALIZAÇÃO
===================================================== */

translatePage();

updateCurrencyButton();

updatePrices();
