import {environment} from '../../environments/environment';

const {API} = environment;

const auth = `${API}/auth`
const user = `${API}/users`

const urls = {
  cars: `${API}/cars`,
  auth: {
    login: auth,
    refresh: `${auth}/refresh`
  },
  user: {
    create: user
  }
}

export {
  urls
}
