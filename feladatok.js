export function egyedi_betuk(szoveg = "") {
  // ide kell írni a megoldást ciklussal és elágazással
  const lista = [];
  for (let index = 0; index < szoveg.length; index++) {
    let kszoveg = szoveg.toLowerCase();
    let betu = kszoveg[index];
    if (/^[a-záéíóöőúüű123]$/.test(betu) && lista.includes(betu) != true) {
      lista.push(betu);
      lista.sort();
    }
  }
  console.log(lista);
  return lista;
}
