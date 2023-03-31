import fs from 'fs';

// Définir le nom de fichier .txt
const fileName = 'gutenberg.txt';

// Lire le fichier .txt
fs.readFile(fileName, 'utf-8', (err, data) => {
  if (err) throw err;

  // Diviser le contenu du fichier en un tableau de lignes
  const lines = data.split('\n');

  // Créer un tableau de lignes avec les guillemets et les virgules
  const modifiedLines = lines.map(line => {
    let modifiedLine = line.trim();
    if (modifiedLine === 'à') {
      modifiedLine = `"${modifiedLine}",`;
    } else {
      modifiedLine = `"${modifiedLine}"`;
    }
    return modifiedLine;
  });

  // Créer un objet JSON à partir des lignes modifiées
  const jsonData = { lines: modifiedLines };

  // Convertir l'objet JSON en chaîne de caractères
  const jsonString = JSON.stringify(jsonData, null, 2);

  // Écrire les données JSON dans un nouveau fichier
  const jsonFileName = 'example.json';
  fs.writeFile(jsonFileName, jsonString, err => {
    if (err) throw err;
    console.log('Le fichier JSON a été créé avec succès !');
  });
});
