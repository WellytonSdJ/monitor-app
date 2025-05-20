export async function fetchTickets() {
  const res = await fetch(process.env.API_URL, {
    method: "POST",
    headers: {
      "accept": "application/json",
      "content-type": "application/json",
      "cookie": process.env.COOKIE_SESSION,
      "Referer": process.env.API_REFERER
    },
    body: JSON.stringify({
      object: {
        paginaSelecionada: 1,
        palavraChave: "",
        idTipo: -1,
        idContrato: -1,
        idGrupoAtual: -1,
        totalize: true
      },
      realUrl: process.env.API_REAL_URL
    })
  });

  if (!res.ok) throw new Error(`Erro na API: ${res.status}`);

  const data = await res.json();
  return data.requests?.map(req => ({
    id: String(req.id),
    label: `Ticket #${req.id}`
  })) || [];
}
