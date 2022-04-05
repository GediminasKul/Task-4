/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';
const outputDiv = document.getElementById('output');

fetch('./cars.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    gen(data);
  });

function createDiv(brand, models) {
  const createNewDiv = document.createElement('div');
  createNewDiv.innerHTML = `            <h2>Car brand is: ${brand}</h2>
 <p>Models: ${models}</p>`;
  return createNewDiv;
}
