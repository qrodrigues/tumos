import fs from 'fs';

// Charger le contenu du fichier JSON depuis le serveur
fs.readFile('example.json', (error, data) => {
  if (error) throw error;
  const jsonParsed = JSON.parse(data);
  const linesWithoutSlash = jsonParsed.lines.map(line => line.replace(/\\/g, '').replace(/"/g, ''));
  const newJsonString = JSON.stringify({ lines: linesWithoutSlash }, null, 2);
  fs.writeFile('data.json', newJsonString, error => {
    if (error) throw error;
    console.log('Le nouveau fichier a été créé avec succès.');
  });
});
