import { Addresses } from './type'

export const fetchAddresses = async (query: string): Promise<Addresses> => {
  return fetch(
    'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address',
    {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Token ' + process.env.REACT_APP_DADATA_KEY,
      },
      body: JSON.stringify({ query: query }),
    }
  )
    .then((res) => res.json())
    .then((data) => data)
}
