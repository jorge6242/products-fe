import AXIOS from '../Config/Axios';
import Prefix from '../Config/ApiPrefix';

const Product = {
    getAll() {
        return AXIOS.get(`${Prefix.api}/product`);
    },
    create(data) {
        return AXIOS.post(`${Prefix.api}/product`, {
            ...data
        });
    },
    get(id) {
        return AXIOS.get(`${Prefix.api}/product/${id}`);
    },
    update(data) {
        return AXIOS.put(`${Prefix.api}/product/${data.id}`, {
            ...data
        });
    },
    remove(id) {
        return AXIOS.delete(`${Prefix.api}/product/${id}`);
    },
}

export default Product;