import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, getDoc, setDoc, addDoc, doc, collection, query, where } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD7NsyQOplkPaoacwI-7gOtuR2Og3Qo1QA",
    authDomain: "vansecommerce-57d62.firebaseapp.com",
    projectId: "vansecommerce-57d62",
    storageBucket: "vansecommerce-57d62.appspot.com",
    messagingSenderId: "340775289223",
    appId: "1:340775289223:web:7812d18c7743b308bb5322"
};

const appFirebase = initializeApp(firebaseConfig);
const appFirestore = getFirestore(appFirebase);

export async function getProducts () {
    const productsCollection = collection(appFirestore, "products");
    const productsSnapshot = await getDocs(productsCollection);
    let productsResponse = productsSnapshot.docs.map((response) => {
        return {
            ...response.data(),
            id: response.id
        }
    });

    return productsResponse;
}

export async function getProductsById(id) {
    const docRef = doc(appFirestore, "products", id);
    const docProducts = await getDoc(docRef);
    return { id: docProducts.id, ...docProducts.data()};
   
}

export async function getProductsByCategory(category) {
    const productsCollection = collection(appFirestore, "products");
  
    const queryProducts = query(productsCollection, where("category", "==", category));
  
    const productsSnapshot = await getDocs(queryProducts);
  
    let respuesta = productsSnapshot.docs.map((doc) => {
      return {
        ...doc.data(),
        id: doc.id,
      };
    });
  
    return respuesta;
}

export async function allProductsToFirestore() {
    const products = [
        {
            "name": "U CLASSIC SLIP-ON",
            "image": "https://grimoldimediamanager.grimoldi.com/MediaFiles/Grimoldi/2018/1_17/0/38/4/2491608.jpg",
            "stock": 17,
            "price": "44.50",
            "gender": "Unisex",
            "category": "classics",
            "description": "lorem ipsum",
        },
        {
            "name": "U ERA",
            "image": "https://grimoldimediamanager.grimoldi.com/MediaFiles/Grimoldi/2018/1_17/0/38/4/2491421.jpg",
            "stock": 13,
            "price": "47.30",
            "gender": "Unisex",
            "category": "classics",
            "description": "lorem ipsum",
        },
        {
            "name": "U AUTHENTIC",
            "image": "https://grimoldimediamanager.grimoldi.com/MediaFiles/Grimoldi/2018/1_23/0/38/86/2512550.jpg",
            "stock": 10,
            "price": "48.00",
            "gender": "Unisex",
            "category": "classics",
            "description": "lorem ipsum",
        },
        {
            "name": "U OLD SKOOL",
            "image": "https://grimoldimediamanager.grimoldi.com/MediaFiles/Grimoldi/2021/10_2/0/108/78/7097953.jpg",
            "stock": 31,
            "price": "54.00",
            "gender": "Unisex",
            "category": "classics",
            "description": "lorem ipsum",
        },
        
        {
            "name": "U SK8-LOW",
            "image": "https://grimoldimediamanager.grimoldi.com/MediaFiles/Grimoldi/2021/10_4/0/108/85/7099781.jpg",
            "stock": 14,
            "price": "58.00",
            "gender": "Unisex",
            "category": "classics",
            "description": "lorem ipsum",
        },

        {
            "name": "U SK8-HI",
            "image": "https://grimoldimediamanager.grimoldi.com/MediaFiles/Grimoldi/2022/5/16/7438798.jpg",
            "stock": 11,
            "price": "60.00",
            "gender": "Unisex",
            "category": "classics",
            "description": "lorem ipsum",
        },

    ];

    const productsCollection = collection(appFirestore, "products");

    products.forEach((item) => {
        const newDoc = doc(productsCollection);
        setDoc(newDoc, item)
            .then((res) => {
                console.log("documento guardado:", newDoc.id);
            })
    })

}

export async function createBuyOrder(dataOrder) {
    const orderCollections = collection(appFirestore, "orders");
    const orderCreated = await addDoc(orderCollections, dataOrder);
    return orderCreated;
}

export default appFirestore