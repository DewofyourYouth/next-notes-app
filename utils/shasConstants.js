export const amudim = {
  berachos: 125,
  shabbos: 312,
  eiruvin: 207,
  pesachim: 242,
  shekalim: 44,
  yoma: 175,
  sukka: 112,
  beitza: 78,
  roshHashana: 67,
  taanis: 59,
  megilla: 61,
  moedKotton: 75,
  chaggigah: 71,
  yevamos: 241,
  kesubos: 222,
  nedarim: 180,
  nazir: 130,
  sotah: 96,
  gittin: 178,
  kiddushin: 162,
  bavaKamma: 236,
  bavaMetzia: 235,
  bavaBasra: 350,
  sanhedrin: 224,
  makkos: 46,
  shavous: 96,
  avodahZarah: 150,
  harayos: 25,
  zevachim: 238,
  menachos: 217,
  chullin: 281,
  bechoros: 119,
  erechin: 66,
  temurah: 65,
  krisos: 54,
  meilah: 41,
  niddah: 143,
};

export const listDapim = (meseches) => {
  const dapim = [];
  for (let i = 0; i < meseches; i++) {
    let amud = i % 2 === 0 ? "a" : "b";
    dapim.push(`${parseInt(i / 2) + 2}${amud}`);
  }
  return dapim;
};

export const shas = Object.keys(amudim).map((m) =>
  listDapim(amudim[m]).map((amud) => `${m} ${amud}`)
);
