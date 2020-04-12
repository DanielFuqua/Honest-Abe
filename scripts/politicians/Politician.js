export const Politician = (politicianObj) => {
  return ` 

        <section class="politician">
            <header class="politician__name">
                <h1>${politicianObj.name.first}${politicianObj.name.last}</h1>
            </header>
            <div class="politician__info">
                <div>Age: ${politicianObj.age}</div>
                <div>Represents: ${politicianObj.district}</div>
            </div>
        </section>
  `;
};
