import { apiRoot } from "../../app/api";

export const api = {
    getProfile: () => apiRoot.post('/profile/')
}
