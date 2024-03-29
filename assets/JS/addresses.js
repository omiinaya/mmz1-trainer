const Addresses = {
    //coords
    playerX: 0x142520A40,
    playerY: 0x142520A44,
    //rank
    //rank1: 0x142510229,   //06 for S
    //rank2: 0x142520BC8,   //06
    //player
    //health: 0x142520A98,
    //lives: 0x142510228,
    //crystals1: 0x142520C4E,
    //crystals2: 0x142520C4F,
    healthGUI: 0x140104F90,
    dash: 0x142520B68,
    //god: 0x142520AA0,
    //weapons
    //zaber1: 0x142520BDE,
    //zaber2: 0x142520BDF,
    //zaberJ: 0x142520BEB,
    //zaberD: 0x142520BEA,
    //buster1: 0x142520BDC,
    //buster2: 0x142520BDD,
    //rod1: 0x142520BE0,
    //rod2: 0x142520BE1,
    //boomerang1: 0x142520BE2,
    //boomerang2: 0x142520BE3,
    //tanks
    subtanks: 0x142520BCB,
    subtank1: 0x142520BCC,
    subtank2: 0x142520BCD,
    subtank3: 0x142520BCE,
    subtank4: 0x142520BCF,
    //instant
    mainCharge: 0x142520B72,
    subCharge: 0x142520B73,
    //unlocks
    //weapons: 0x142520BD8,
    lifeUps: 0x142520BD3,
    //elements: 0x142520BD9,
    //misc
    hover: 0x142520A4C,
    reflect: 0x140371BDA,
    //decreacelives: 0x14032B592
    //codename: 0x14251022A
    //05 for immortal
    infiniteclimb: 0x1404079AC,
    gravity: 0x140407634,
    jumpaction: 0x140407143, //instruction triggered when jumping
    jumpingstate: 0x142520a4c, //FFFFFDC0 jumping up, 00000500 falling down FFFFFC00,
    superjump: 0x1404071C4,
    
    fallingaction: 0x140407721, //instruction triggered when falling
    //fly hack would toggle off falling action while idle, then either jump state up or down when holding a key
    bluemob: 0x14254DEB8,
    entitylist: 0x14254DE88
}

//140371D31 - address of flinch on player hit
//140371D3C - address of flinch on boss hit

module.exports = Addresses;
