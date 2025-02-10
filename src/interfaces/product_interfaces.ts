export interface MockShopResponse {
    data: ProductsData;
}

interface ProductsData {
    products: {
        edges: Product[];
    } 
}

interface Product {
    node: {
        title: string;
        description: string;
        images: {
            edges: ProductImage[];
        }
        variants: {
            edges: ProductPrice[];
        }
    }
}

interface ProductImage {
    node: {
        url: string;
    }
}

interface ProductPrice {
    node: {
        price: {
            amount: number;
            currencyCode: string; // Won't be used as it's always CAD (so we will assume GBP instead)
        }
    }
}
