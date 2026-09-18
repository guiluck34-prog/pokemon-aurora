/* =====================================================
   POKÉMON AURORA
   Sistema principal do site
===================================================== */

const CONFIG = {

    // Preços base em EUR
    vip: {
        bronze: 2.99,
        silver: 5.99,
        gold: 9.99,
        diamond: 19.99,
        aurora: 29.99
    },

    // Conversão de referência.
    // O checkout real deve usar a cotação atual.
    exchange: {
        EUR: 1,
        BRL: 5.89,
        USD: 1.148
    },

    // Estimativa apenas para apresentação.
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
