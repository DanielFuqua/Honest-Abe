export const Corporation = (corporationObj) => {
  return ` 
 
        <section class="corporation">
            <header class="corporation__name">
                <h1>${corporationObj.company}</h1>
            </header>
            <div class="corporation__info">
                <div>Address: ${corporationObj.address}</div>
            </div>
        </section>

    `;
};
