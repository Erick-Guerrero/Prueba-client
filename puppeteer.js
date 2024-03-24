const puppeteer = require('puppeteer');
const fs = require('fs');
const cron = require('node-cron');

cron.schedule('35 11 * * *', () => {
  console.log('Ejecutando web scraping a las 3:00 PM');
  webScraping();
});

async function webScraping() {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  const url = "https://lotedom.com/";

  try {
    await page.goto(url);
    await page.waitForSelector('.col-10.div_resultados', { timeout: 60000 }); // Espera 60 segundos en lugar de 30.

    const numbersData = await page.evaluate(() => {
      const divResultados = Array.from(document.querySelectorAll('.col-10.div_resultados'));

      const data = divResultados.map((div) => {
        const numeros = Array.from(div.querySelectorAll('.num_bola_blanca')).map((span) => span.textContent.trim());
        return numeros;
      });

      return data;
    });

    console.log(numbersData);

    fs.writeFile('numbersData.json', JSON.stringify(numbersData), (err) => {
      if (err) {
        console.error("Error al escribir en el archivo:", err);
      } else {
        console.log('Datos guardados correctamente en numbersData.json');
      }
    });

  } catch (error) {
    console.error("Error al cargar la página o extraer datos:", error);
  } finally {
    await browser.close();
  }
}

