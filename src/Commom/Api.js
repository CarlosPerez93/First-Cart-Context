export class Api {
  get(url, params) {
    url = new URL(`${"https://peticiones.online/api"}${url}`);
    if (params)
      Object.keys(params).forEach((key) =>
        url.searchParams.append(key, params[key])
      );
    return fetch(url, {
      method: "GET",
    })
      .then(async (response) => {
        response.payload = await response.json();
        return response;
      })
      .catch((err) => err);
  }

  post(url, data, header) {
    let dataBody = JSON.stringify(data);

    return fetch(`${"https://peticiones.online/api"}${url}`, {
      method: "POST",
      mode: "cors",
      headers: header
        ? header
        : {
            Accept: "application/json",
            "Content-type": "application/json",
          },
      body: dataBody,
    })
      .then(async (response) => {
        if (response.status === 401) {
          store.dispatch(auth.logout());
          return response;
        }
        response.payload = await response.json();
        return response;
      })
      .catch((err) => err);
  }
}

export default new Api();
