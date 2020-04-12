export const PAC = (pacObj, corporationObj, corporateDonations) => {
  return ` 
  
    <section class="pac">
    <header class="pac__name">
        <h1>${pacObj.registeredName}</h1>
    </header>
    <div class="pac__info">
        <div${pacObj.address}</div>
    </div>
    <div class="pac__donors">
        <h2>Donors</h2>
        <ul>
            <li>${corporationObj.company} $${corporateDonations.amount}</li>
            <li>${corporationObj.company} $${corporateDonations.amount}</li>
        </ul>
    </div>
</section>
    `;
};
