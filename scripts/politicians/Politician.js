export const Politician = (politicianObj, PACs, pacDonations) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });

  return ` 

        <section class="politician">
            <header class="politician__name">
                <h1>${politicianObj.name.first}${politicianObj.name.last}</h1>
            </header>
            <div class="politician__info">
                <div>Age: ${politicianObj.age}</div>
                <div>Represents: ${politicianObj.district}</div>
            </div>
            <div class="pac__donations">
            <h4>PAC Donations</h4>

            <ul>
            ${pacDonations
              .map((pacDon) => {
                return `<li>${
                  PACs.find((pac) => pac.id === pacDon.pacId).registeredName
                } (${formatter.format(pacDon.amount)})</li>`;
              })
              .join("")}
            </ul>
        </div>
        </section>
  `;
};
