const basePhoto = (i, albumid) => {
  return {
    albumId: albumid,
    id: i,
    title: 'Album ' + albumid + ' photo ' + i + " accusamus beatae ad facilis cum similique qui sunt",
    url: `https://picsum.photos/200/300?random=${Math.floor(Math.random() * (99999 - 1) + 2)}`,
  };
}

const baseAlbum = (i) => {
  const types = ["type A", "type B", "type C", "type D", "type E"];

  return {
    id: i,
    title: 'Album ' + i + " quidem molestiae enim " + Math.floor(Math.random() * (99999 - 1) + 2),
    type: types[Math.floor(Math.random() * types.length)]
  }
}

const photos = () => {
  let data = [];
  let albumId = 1;

  for (let i = 0; i <= 5000; i++) {
    if (i % 5 === 0) {
      albumId++;
    }

    const photo = basePhoto(i, albumId);
    photo['album'] = baseAlbum(albumId);

    if (i == 15) {
      photo['title'] = 'Thu ma coi';
    }

    data = [
      ...data,
      photo
    ]
  }

  return data;
}

export default (axios, resource) => ({
  login(payload) {
    const headers = {
      "Content-type": "application/json",
    };

    return axios.post(resource.login, payload, {
      headers,
    });
  },

  getProfile() {
    return axios.get(resource.getProfile);
  },

  getProduct(params = { page: 1, size: 10, search: null }) {
    const list = photos();
    let items = list;
    if (params.search) {
      items = items.filter(value => value.title.search(params.search) > -1);
    }
    items = items.slice((params.page - 1) * params.size, params.page * params.size);

    const response = {
      count: list.length,
      items
    }

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(response)
      }, 1000)
    })
  },


});
