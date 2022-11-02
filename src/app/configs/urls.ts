import {environment} from '../../environments/environment';

const {API} = environment;

const auth = `${API}/auth`

const urls = {
  cars: `${API}/cars`,
  auth: {
    login: auth,
    refresh: `${auth}/refresh`
  }
}

export {
  urls
}
