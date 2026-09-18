/* =====================================================
   POKÉMON AURORA
   SISTEMA PRINCIPAL DO SITE
===================================================== */

const CONFIG = {

    vip: {
        bronze: 2.99,
        silver: 5.99,
        gold: 9.99,
        diamond: 19.99,
        aurora: 29.99
    },

    exchange: {
        EUR: 1,
        BRL: 5.89,
        USD: 1.148
    },

    // ESTIMATIVA de taxa de pagamento
    paymentFee: {
        percentage: 0.015,
        fixedEUR: 0.25
    }

};


/* =====================================================
   TRADUÇÕES
===================================================== */

const translations = {

    pt: {

        nav_game: "Jogo",
        nav_pokedex: "Pokédex",
        nav_shop: "VIP",
        nav_pass: "Battle Pass",

        online: "● SERVIDOR ONLINE",

        hero_description:
            "Explora uma nova aventura, captura Pokémon, enfrenta treinadores e torna-te Campeão.",

        play_now: "Jogar agora",
        explore: "Explorar o mundo",

        players: "Jogadores",
        pokemon: "Pokémon",
        gyms: "Ginásios",

        game_label: "A EXPERIÊNCIA",
        game_title: "Uma nova aventura começa aqui.",
        game_description:
            "Explora, captura Pokémon, enfrenta treinadores, conquista os 8 ginásios e prepara-te para a Liga.",

        feature_world_title: "Explora",
        feature_world_text:
            "Descobre cidades, rotas, cavernas, segredos e diferentes áreas do mundo.",

        feature_battle_title: "Combate",
        feature_battle_text:
            "Enfrenta Pokémon selvagens, treinadores, ginásios e outros jogadores.",

        feature_champion_title: "Torna-te Campeão",
        feature_champion_text:
            "Conquista os 8 em===================================================== */

const TRANSLATIONS = {

    pt: {

        nav_game: "Jogo",
        nav_map: "Mapa",
        nav_pokedex: "Pokédex",
        nav_shop: "VIP",
        nav_pass: "Battle Pass",

        login: "Entrar com Roblox",

        online: "● SERVIDOR ONLINE",

        hero_title_1: "POKÉMON",
        hero_title_2: "AURORA",

        hero_description:
            "Explora uma nova região, captura Pokémon, enfrenta treinadores e torna-te Campeão.",

        play_now: "Jogar agora",
        explore: "Explorar o mundo",

        players: "Jogadores",
        pokemon: "Pokémon",
        gyms: "Ginásios",

        game_label: "A EXPERIÊNCIA",

        game_title: "Uma nova aventura começa aqui.",

        game_description:
            "Explora cidades, rotas, cavernas e lugares secretos enquanto constróis a tua equipa.",

        feature_explore: "Explora",
        feature_explore_text:
            "Descobre uma região cheia de cidades, rotas, cavernas e segredos.",

        feature_battle: "Combate",
        feature_battle_text:
            "Enfrenta treinadores, líderes de ginásio e outros jogadores.",

        feature_collect: "Coleciona",
        feature_collect_text:
            "Captura Pokémon, encontra shinies e completa a tua Pokédex.",

        map_label: "A REGIÃO",
        map_title: "A Região Aurora",

        map_text:
            "Uma região enorme para explorar, com cidades, rotas, cavernas, ginásios e locais especiais.",

        view_map: "Ver mapa",

        pokedex_label: "POKÉDEX",
        pokedex_title: "Apanha todos.",

        pokedex_text:
            "Descobre Pokémon comuns, raros, lendários e variantes especiais.",

        view_pokedex: "Abrir Pokédex",

        shop_label: "LOJA",
        shop_title: "Escolhe o teu VIP.",
        shop_text:
            "Apoia o projeto e desbloqueia vantagens exclusivas dentro do Pokémon Aurora.",

        buy: "Comprar",

        bronze: "VIP BRONZE",
        silver: "VIP SILVER",
        gold: "VIP GOLD",
        diamond: "VIP DIAMOND",
        aurora: "VIP AURORA",

        bronze_text: "Vantagens essenciais para começar.",
        silver_text: "Mais benefícios para a tua aventura.",
        gold_text: "Vantagens avanç
const translations = {

    pt: {

        navHome: "Início",
        navGame: "Jogo",
        navDex: "Pokédex",
        navShop: "Loja",
        navPass: "Battle Pass",

        login: "Entrar com Roblox",

        online: "● SERVIDOR ONLINE",

        heroTitle: "POKÉMON<br><span>AURORA</span>",
        heroText: "Explora. Combate. Torna-te Campeão.",
        explore: "EXPLORAR O JOGO",
        shop: "VER LOJA",

        gyms: "Ginásios",
        modes: "Modos",
        maxLevel: "Nível máximo",

        world: "O MUNDO",
        exploreAurora: "Explora Aurora",

        worldText:
            "Uma região cheia de cidades, cavernas, treinadores, ginásios e segredos para descobrir.",

        exploreTitle: "Explora",
        exploreText:
            "Viaja por cidades, rotas, cavernas e locais especiais.",

        battleTitle: "Combate",
        battleText:
            "Luta contra treinadores e conquista os 8 Ginásios.",

        rareTitle: "Pokémon Raros",
        rareText:
            "Encontra Pokémon raros, shiny e criaturas especiais.",

        region: "REGIÃO AURORA",
        pathTitle: "O teu caminho começa aqui.",
        pathText:
            "Começa em Lumen Town e percorre a região até chegares ao desafio final.",

        viewDex: "VER POKÉDEX",

        database: "DATABASE",
        pokedex: "Pokédex",
        dexText:
            "Consulta os Pokémon descobertos na região de Aurora.",

        openDex: "ABRIR POKÉDEX",

        shopTitle: "Loja Aurora",
        shopText:
            "Escolhe o teu nível VIP e recebe benefícios exclusivos.",

        vipBronze: "VIP BRONZE",
        vipSilver: "VIP SILVER",
        vipGold: "VIP GOLD",
        vipDiamond: "VIP DIAMOND",
        vipAurora: "VIP AURORA",

        maximumVip: "✦ VIP MÁXIMO ✦",

        bronzeText:
            "Benefícios básicos para começar a tua aventura.",

        silverText:
            "Mais recompensas e vantagens dentro do jogo.",

        goldText:
            "Um pacote completo para jogadores avançados.",

        diamondText:
            "Benefícios premium para quem quer mais.",

        auroraText:
            "O pacote máximo de Pokémon Aurora.",

        benefits: "VER BENEFÍCIOS",
        auroraButton: "👑 VER VIP AURORA",

        everythingBronze: "Tudo do Bronze",
        everythingSilver: "Tudo do Silver",
        everythingGold: "Tudo do Gold",
        everythingDiamond: "Tudo do Diamond",

        pokedollars: "Pokédollars",
        items: "Itens exclusivos",
        xp: "Bónus de XP",
        herbs: "Nature Herbs",
        premiumItems: "Itens premium",
        rewards: "Grandes recompensas",
        exclusiveKit: "Kit Aurora exclusivo",
        battlePassPremium: "Battle Pass Premium",
        specialItems:
