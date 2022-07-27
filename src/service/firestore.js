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
            "price": "45.00",
            "gender": "Unisex",
            "category": "classics",
            "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
            "descriptionDetail": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt quibusdam minima pariatur dolorum, commodi necessitatibus perspiciatis saepe, esse cupiditate qui iste unde. Rem quia voluptates, at facere veniam nulla quidem!"
        },
        {
            "name": "U ERA",
            "image": "https://grimoldimediamanager.grimoldi.com/MediaFiles/Grimoldi/2018/1_17/0/38/4/2491421.jpg",
            "stock": 13,
            "price": "45.00",
            "gender": "Unisex",
            "category": "classics",
            "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
            "descriptionDetail": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt quibusdam minima pariatur dolorum, commodi necessitatibus perspiciatis saepe, esse cupiditate qui iste unde. Rem quia voluptates, at facere veniam nulla quidem!"
        },
        {
            "name": "U AUTHENTIC",
            "image": "https://grimoldimediamanager.grimoldi.com/MediaFiles/Grimoldi/2018/1_23/0/38/86/2512550.jpg",
            "stock": 10,
            "price": "45.00",
            "gender": "Unisex",
            "category": "classics",
            "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
            "descriptionDetail": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt quibusdam minima pariatur dolorum, commodi necessitatibus perspiciatis saepe, esse cupiditate qui iste unde. Rem quia voluptates, at facere veniam nulla quidem!"
        },
        {
            "name": "U OLD SKOOL",
            "image": "https://grimoldimediamanager.grimoldi.com/MediaFiles/Grimoldi/2021/10_2/0/108/78/7097953.jpg",
            "stock": 31,
            "price": "55.00",
            "gender": "Unisex",
            "category": "classics",
            "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
            "descriptionDetail": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt quibusdam minima pariatur dolorum, commodi necessitatibus perspiciatis saepe, esse cupiditate qui iste unde. Rem quia voluptates, at facere veniam nulla quidem!"
        },
        
        {
            "name": "U SK8-LOW",
            "image": "https://grimoldimediamanager.grimoldi.com/MediaFiles/Grimoldi/2021/10_4/0/108/85/7099781.jpg",
            "stock": 14,
            "price": "60.00",
            "gender": "Unisex",
            "category": "classics",
            "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
            "descriptionDetail": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt quibusdam minima pariatur dolorum, commodi necessitatibus perspiciatis saepe, esse cupiditate qui iste unde. Rem quia voluptates, at facere veniam nulla quidem!"
        },
        {
            "name": "U SK8-HI",
            "image": "https://grimoldimediamanager.grimoldi.com/MediaFiles/Grimoldi/2022/5/16/7438798.jpg",
            "stock": 11,
            "price": "60.00",
            "gender": "Unisex",
            "category": "classics",
            "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
            "descriptionDetail": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt quibusdam minima pariatur dolorum, commodi necessitatibus perspiciatis saepe, esse cupiditate qui iste unde. Rem quia voluptates, at facere veniam nulla quidem!"
        },
        {
            "name": "M WAYVEE",
            "image": "https://grimoldimediamanager.grimoldi.com/MediaFiles/Grimoldi/2022/6/16/7508748.jpg",
            "stock": 1,
            "price": "65.00",
            "gender": "Unisex",
            "category": "skate",
            "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
            "descriptionDetail": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt quibusdam minima pariatur dolorum, commodi necessitatibus perspiciatis saepe, esse cupiditate qui iste unde. Rem quia voluptates, at facere veniam nulla quidem!"
        },
        {
            "name": "M BERLE",
            "image": "https://grimoldimediamanager.grimoldi.com/MediaFiles/Grimoldi/2022/5/24/7451235.jpg",
            "stock": 3,
            "price": "65.00",
            "gender": "Unisex",
            "category": "skate",
            "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
            "descriptionDetail": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt quibusdam minima pariatur dolorum, commodi necessitatibus perspiciatis saepe, esse cupiditate qui iste unde. Rem quia voluptates, at facere veniam nulla quidem!"
        },
        {
            "name": "M SKATE HALF CAB",
            "image": "https://grimoldimediamanager.grimoldi.com/MediaFiles/Grimoldi/2022/6/16/7508433.jpg",
            "stock": 5,
            "price": "65.00",
            "gender": "Unisex",
            "category": "skate",
            "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
            "descriptionDetail": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt quibusdam minima pariatur dolorum, commodi necessitatibus perspiciatis saepe, esse cupiditate qui iste unde. Rem quia voluptates, at facere veniam nulla quidem!"
        },
        {
            "name": "ULTRA RANGE RAPIDWELD",
            "image": "https://grimoldimediamanager.grimoldi.com/MediaFiles/Grimoldi/2020/10_23/0/88/229/5825847.jpg",
            "stock": 4,
            "price": "75.00",
            "gender": "Unisex",
            "category": "surf",
            "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
            "descriptionDetail": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt quibusdam minima pariatur dolorum, commodi necessitatibus perspiciatis saepe, esse cupiditate qui iste unde. Rem quia voluptates, at facere veniam nulla quidem!"
        },
        {
            "name": "ULTRARANGE EXO",
            "image": "https://grimoldimediamanager.grimoldi.com/MediaFiles/Grimoldi/2021/8_5/0/107/29/7019931.jpg",
            "stock": 2,
            "price": "75.00",
            "gender": "Unisex",
            "category": "surf",
            "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
            "descriptionDetail": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt quibusdam minima pariatur dolorum, commodi necessitatibus perspiciatis saepe, esse cupiditate qui iste unde. Rem quia voluptates, at facere veniam nulla quidem!"
        },
        {
            "name": "ULTRARANGE EXO SE",
            "image": "https://grimoldimediamanager.grimoldi.com/MediaFiles/Grimoldi/2022/3/22/7338251.jpg",
            "stock": 6,
            "price": "75.00",
            "gender": "Unisex",
            "category": "surf",
            "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
            "descriptionDetail": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt quibusdam minima pariatur dolorum, commodi necessitatibus perspiciatis saepe, esse cupiditate qui iste unde. Rem quia voluptates, at facere veniam nulla quidem!"
        },
    ];

    const productsCollection = collection(appFirestore, "products");

    products.forEach((item) => {
        const newDoc = doc(productsCollection);
        setDoc(newDoc, item)
            .then((res) => {
                console.log(newDoc.name)
            })
    })

}

export async function createBuyOrder(dataOrder) {
    const orderCollections = collection(appFirestore, "orders");
    const orderCreated = await addDoc(orderCollections, dataOrder);
    return orderCreated;
}

export default appFirestore