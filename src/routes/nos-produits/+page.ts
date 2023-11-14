import {createDirectus, readItems, rest} from "@directus/sdk";
import type {PageLoad} from "./$types";

const client = createDirectus('http://localhost:8055').with(rest());

export const load: PageLoad = async () => {

    try {
        const products = await client.request(readItems('product'));
        return {
            products
        }

    } catch (error) {
        console.error('Erreur lors de la requête Directus :', error);
    }

}

