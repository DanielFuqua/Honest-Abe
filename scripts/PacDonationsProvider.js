let pacDonations = [];

export const usePacDonations = () => pacDonations.slice();

export const getPacDonations = () =>
  fetch("http://localhost:8088/pacdonations")
    .then((res) => res.json())
    .then((data) => (pacDonations = data));
