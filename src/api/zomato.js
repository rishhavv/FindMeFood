import Axios from 'axios';

const token = 'f465fb43d858a883db368c806917d953';

export default Axios.create({
    baseURL: 'https://developers.zomato.com/api/v2.1',
    headers: {'user-key': token}
})