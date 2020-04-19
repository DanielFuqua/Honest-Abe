export const PAC = (pacObj, corporateDonations) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });
  return ` 
  
    <section class="pac">
    <header class="pac__name">
        <h1>${pacObj.registeredName}</h1>
    </header>
    <div class="pac__info">
        <div>${pacObj.address}</div>
    </div>
    <div class="pac__donors">
        <h4>Donors</h4>
        <ul>
            ${corporateDonations
              .map(
                (cd) =>
                  `<li>${cd.company} (${formatter.format(cd.amount)}) </li>`
              )
              .join("")}
        </ul>
    </div>
</section>

    `;
};
