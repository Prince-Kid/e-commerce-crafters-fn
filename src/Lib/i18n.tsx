import i18n from "i18next";
import { initReactI18next } from "react-i18next";

let currentLanguage = localStorage.getItem("lng") || "ENG";

i18n.use(initReactI18next).init({
  resources: {
    ENG: {
      translation: {
        Login: "Login",
        "Sign Up": "Sign Up",
        "Enter your credentials": "Enter your credentials",
        "Enter Your Email": "Enter Your Email",
        "Enter your email address": "Enter your email address",
        "Enter Your Password": "Enter Your Password",
        "Enter your password": "Enter your password",
        "Sign In": "Sign In",
        "Sign In with Google": "Sign In with Google",
        "Not Registered yet?": "Not Registered yet?",
        "Create an Account": "Create an Account",
        "Shop Now": "Shop Now",
        "Contact Us": "Contact Us",
        here: "here",
        "to get started": "to get started.",
        Welcome:
          "Welcome to our online store! Whether you're a buyer looking for great deals or a seller wanting to showcase your products, our platform offers you the opportunity to connect and thrive. Explore our wide range of products and create an account ",
        AboutUs:
          "Welcome to Crafters, an e-commerce platform dedicated to empowering SMEs, artisans, and small entrepreneurs in Rwanda. Our mission is to connect talented artisans with buyers by providing an accessible and secure marketplace where creativity meets commerce. Crafters streamlines the online selling experience with features such as easy registration, product management, order tracking, and a chat system between buyers and sellers. We are committed to fostering a vibrant community where buyers discover unique products, and sellers confidently grow their businesses",
        "Get In Touch With Us": "Get In Touch With Us",
        "We Are Here To Help": "We Are Here To Help",
        "If you have an urgent business concern please contact us at":
          "If you have an urgent business concern please contact us at",
        "Send Us Message": "Send Us Message",
        "Your Name": "Your Name",
        "Your Email": "Your Email",
        "Your Message": "Your Message",
        "Send Message": "Send Message",
        abouts:
          "Crafters is dedicated to providing quality products and excellent service to our customers. We strive to bring unique and innovative items that enhance your lifestyle..",
        Links: "Links",
        Home: "Home",
        Products: "Products",
        "About Us": "About Us",

        Contact: "Contact",
        Tel: "Tel",
        Email: "Email",
        "© 2024 Upscale Crafters, all rights reserved":
          "© 2024 Upscale Crafters, all rights reserved",
        "Sign Up with Google": "Sign Up with Google",
        "Enter Your Name": "Enter Your Name",
        "Already have an account": "Already have an account",
        "Forgot Password": "Forgot Password",
        Dashboard: "Dashboard",
        Users: "Users",
        Sellers: "Sellers",
        Analytics: "Analytics",
        Settings: "Settings",
        "Sign Out": "Sign Out",
        Administration: "Administration",
        "DASHBOARD PAGE": "DASHBOARD PAGE",
        Administrator: "Administrator",
        sellers: "sellers",
        Transactions: "Transactions",
        Orders: "Orders",
        IncomeExpense: "IncomeExpense",
        "Buyers 40": "Buyers 40",
        "Sellers 30": "Sellers 30",
        "View all": "View all",
        Name: "Name",
        Action: "Action",
        "Requested To Be A Vendor": "Requested To Be A Vendor",
        "PAYMENT DETAILS": "PAYMENT DETAILS",
        "First Name": "First Name",
        "Second Name": "Second Name",
        "Email Address": "Email Address",
        "Phone Number": "Phone Number",
        Street: "Street",
        "Payment method": "Payment method",
        "Continue To Payment": "Continue To Payment",
        "ORDER SUMMARY": "ORDER SUMMARY",
        "Sub Total": "Sub Total",
        "Delivery Fee": "Delivery Fee",
        Discount: "Discount",
        Total: "Total",
        "Shopping Cart": "Shopping Cart",

        "All Products": "All Products",
        "Search Products": "Search Products",
        Categories: "Categories",
        Electronics: "Electronics",
        Food: "Food",
        Fruits: "Fruits",
        Mechanism: "Mechanism",
        "Sport Kit": "Sport Kit",
        Clothing: "Clothing",
        Books: "Books",
        Furniture: "Furniture",
        Toys: "Toys",
        Stationery: "Stationery",
        Cars: "Cars",
        Shoes: "Shoes",
        "POPULAR PRODUCTS": "POPULAR PRODUCTS",
        ABOUT: "About",
        "Best Deals": "Best Deals",
        stock: "Stock",
        "IN STOCK": "In Stock",
        Description: "Description",
        "No description available": "No description available",
        Quantity: "Quantity",
        Size: "Size",
        "Leave my review": "Leave my review",
        "Show More": "Show More",
        "Show Less": "Show Less",
        "Error fetching order details": "Error fetching order details",
        "No order details available": "No order details available",
        "Delivery Address": "Delivery Address",
        Order: "Order",
        "Placed On": "Placed On",
        "Expected Delivery Date": "Expected Delivery Date",
        "No product found": "No product found",
        "Order Details": "Order Details",
        Product: "Product",

        Price: "Price",

        "Update to": "Update to",
        "Order Completed": "Order Completed",
        "Check Your gmail inbox": "Check Your Gmail inbox",
        Review: "Review",
        Reviews: "Reviews",
        "Related Products": "Related Products",
      },
    },
    FR: {
      translation: {
        Login: "Connexion",
        "Sign Up": "Inscription",
        "Enter your credentials": "Entrez vos identifiants",
        "Enter Your Email": "Entrez votre adresse e-mail",
        "Enter your email address": "Entrez votre adresse e-mail",
        "Enter Your Password": "Entrez votre mot de passe",
        "Enter your password": "Entrez votre mot de passe",
        "Sign In": "Se connecter",
        "Sign In with Google": "Se connecter avec Google",
        "Not Registered yet?": "Pas encore inscrit?",
        "Create an Account": "Créer un compte",
        "Shop Now": "Acheter maintenant",
        "Contact Us": "Contactez-nous",
        here: "ici",
        "to get started": "pour commencer.",
        Welcome:
          "Bienvenue dans notre boutique en ligne! Que vous soyez un acheteur à la recherche de bonnes affaires ou un vendeur souhaitant mettre en valeur vos produits, notre plateforme vous offre l'opportunité de vous connecter et de prospérer. Explorez notre large gamme de produits et créez un compte  ",
        AboutUs:
          "Bienvenue sur Crafters, une plateforme de commerce électronique conçue pour soutenir les PME, artisans et petits entrepreneurs au Rwanda. Notre mission est de connecter les artisans talentueux à des acheteurs en offrant un marché accessible et sécurisé où l'art rencontre le commerce. Crafters simplifie l'expérience de vente en ligne avec des fonctionnalités telles que l'inscription facile, la gestion des produits, le suivi des commandes et la messagerie entre acheteurs et vendeurs. Nous nous engageons à créer une communauté dynamique où les acheteurs découvrent des produits uniques et les vendeurs développent leur activité en toute confiance.",
        "Get In Touch With Us": "Contactez-nous",
        "We Are Here To Help": "Nous sommes là pour vous aider",
        "If you have an urgent business concern please contact us at":
          "Si vous avez une préoccupation urgente, veuillez nous contacter au",
        "Send Us Message": "Envoyez-nous un message",
        "Your Name": "Votre nom",
        "Your Email": "Votre e-mail",
        "Your Message": "Votre message",
        "Send Message": "Envoyer le message",
        abouts:
          "Crafters s'engage à fournir des produits de qualité et un excellent service à nos clients. Nous nous efforçons d'apporter des articles uniques et innovants qui améliorent votre style de vie..",
        Links: "Liens",
        Home: "Accueil",
        Products: "Produits",
        "About Us": "À propos de nous",

        Contact: "Contact",
        Tel: "Tel",
        Email: "Email",
        "© 2024 Upscale Crafters, all rights reserved":
          "© 2024 Upscale Crafters, tous droits réservés",
        "Sign Up with Google": "Inscrivez-vous avec Google",
        "Enter Your Name": "Entrez votre nom",
        "Already have an account": "Vous avez déjà un compte",
        "Forgot Password": "Mot de passe oublié",
        Dashboard: "Tableau de bord",
        Users: "Utilisateurs",
        Sellers: "Vendeurs",
        Analytics: "Analytique",
        Settings: "Paramètres",
        "Sign Out": "Déconnexion",
        Administration: "Administration",
        "DASHBOARD PAGE": "PAGE DU TABLEAU DE BORD",
        Administrator: "Administrateur",
        sellers: "vendeurs",
        Transactions: "Transactions",
        Orders: "Commandes",
        IncomeExpense: "RevenusDépenses",
        "Buyers 40": "Acheteurs 40",
        "Sellers 30": "Vendeurs 30",
        "View all": "Voir tout",
        Name: "Nom",

        Action: "Action",
        "Requested To Be A Vendor": "Demande de devenir un vendeur",
        "PAYMENT DETAILS": "DÉTAILS DE PAIEMENT",
        "First Name": "Prénom",
        "Second Name": "Nom",
        "Email Address": "Adresse e-mail",
        "Phone Number": "Numéro de téléphone",
        Street: "Rue",
        "Payment method": "Méthode de paiement",
        "Continue To Payment": "Continuer vers le paiement",
        "ORDER SUMMARY": "RÉSUMÉ DE LA COMMANDE",
        "Sub Total": "Sous-total",
        "Delivery Fee": "Frais de livraison",
        Discount: "Remise",
        Total: "Total",
        "Shopping Cart": "Panier",

        "All Products": "Tous les produits",
        "Search Products": "Rechercher des produits",
        Categories: "Catégories",
        Electronics: "Électronique",
        Food: "Nourriture",
        Fruits: "Fruits",
        Mechanism: "Mécanisme",
        "Sport Kit": "Kit de sport",
        Clothing: "Vêtements",
        Books: "Livres",
        Furniture: "Meubles",
        Toys: "Jouets",
        Stationery: "Papeterie",
        Cars: "Voitures",
        Shoes: "Chaussures",
        "POPULAR PRODUCTS": "PRODUITS  POPULAIRES",
        ABOUT: "À Propos des",
        "Best Deals": "Meilleures Offres",
        stock: "Stock",
        "IN STOCK": "En Stock",
        Description: "Description",
        "No description available": "Pas de description disponible",
        Quantity: "Quantité",
        Size: "Taille",
        "Leave my review": "Laisser mon avis",
        "Show More": "Afficher Plus",
        "Show Less": "Afficher Moins",
        "Error fetching order details":
          "Erreur lors de la récupération des détails de la commande",
        "No order details available": "Aucun détail de commande disponible",
        "Delivery Address": "Adresse de Livraison",
        Order: "Commande",
        "Placed On": "Passée le",
        "Expected Delivery Date": "Date de Livraison Prévue",
        "No product found": "Aucun produit trouvé",
        "Order Details": "Détails de la Commande",
        Product: "Produit",

        Price: "Prix",

        "Update to": "Mettre à jour vers",
        "Order Completed": "Commande Terminée",
        "Check Your gmail inbox": "Vérifiez votre boîte de réception Gmail",
        Review: "Avis",
        Reviews: "Avis",
        "Related Products": "Produits Connexes",
      },
    },
    KINY: {
      translation: {
        Login: "Injira",
        "Sign Up": "Iyandikishe",
        "Enter your credentials": "Injiza imyirondoro yawe",
        "Enter Your Email": "Injiza Email yawe",
        "Enter your email address": "Injiza aderesi yawe ya email",
        "Enter Your Password": "Injiza Ijambo ry'ibanga",
        "Enter your password": "Injiza ijambo ry'ibanga",
        "Sign In": "Injira",
        "Sign In with Google": "Injira ukoresheje Google",
        "Not Registered yet?": "Nturariyandikisha?",
        "Create an Account": "Hanga Konti",
        "Shop Now": "Gura Ubu",
        "Contact Us": "Twandikire",
        here: "hano",
        "to get started": "kugirango utangire.",
        Welcome:
          "Murakaza neza kuri butike yacu yo kuri interineti! Niba uri umuguzi ushaka kubona ibiciro byiza cyangwa umucuruzi ushaka kugaragaza ibicuruzwa byawe, urubuga rwacu rukugezaho amahirwe yo guhuza no gutera imbere. Reba byinshi mubicuruzwa byacu kandi wiyandikishe  ",
        AboutUs:
          "Murakaza neza kuri Crafters, urubuga rw’ubucuruzi rwashyiriweho gufasha ba rwiyemezamirimo bato, abahanzi, n’abacuruzi mu Rwanda. Intego yacu ni uguhuza abahanzi bafite impano n’abaguzi, dutanga urubuga ruciriritse kandi rufite umutekano aho ubuhanzi buhuza ubucuruzi. Crafters iroroshya urugendo rwo kwiyandikisha, gushyira ibicuruzwa ku rubuga, kugenzura ibicuruzwa byaguzwe, no kugirana ibiganiro hagati y’abaguzi n’abacuruzi. Twiyemeje guteza imbere umuryango w’abakoresha urubuga aho abaguzi bashobora kubona ibicuruzwa bidasanzwe, kandi abacuruzi bakaguka mu bucuruzi bwabo bifitiye icyizere.",

        "Get In Touch With Us": "Tuvugishe",
        "We Are Here To Help": "Turahari Kugufasha",
        "If you have an urgent business concern please contact us at":
          "Niba ufite ikibazo cyihutirwa cya business nyamuneka twandikire kuri",
        "Send Us Message": "Twandikire ubutumwa",
        "Your Name": "Izina ryawe",
        "Your Email": "Imeyili yawe",
        "Your Message": "Ubutumwa bwawe",
        "Send Message": "Ohereza Ubutumwa",
        abouts:
          "Crafters yiyemeje gutanga ibicuruzwa byiza na serivisi nziza kubakiriya bacu. Twiyemeje kuzana ibicuruzwa byihariye kandi bishya bigira uruhare mw'iterambere ry'imibereho yawe..",
        Links: "Amakuru",
        Home: "Ahabanza",
        Products: "Ibicuruzwa",
        "About Us": "Ibyacu",

        Contact: "Amakuru",
        Tel: "Tel",
        Email: "Imeyili",
        "© 2024 Upscale Crafters, all rights reserved":
          "© 2024 Upscale Crafters, uburenganzira bwose burabitswe",
        "Sign Up with Google": "Iyandikishe na Google",
        "Enter Your Name": "Injiza Izina ryawe",
        "Already have an account": "Ufite konti?",
        "Forgot Password": "Wibagiwe Ijambo ry'ibanga",
        Dashboard: "Dashboard",
        Users: "Abakoresha",
        Sellers: "Abacuruzi",
        Analytics: "Ibisobanuro",
        Settings: "Igenamiterere",
        "Sign Out": "Gusohoka",
        Administration: "Ubuyobozi",
        "DASHBOARD PAGE": "URUPAPURO RWA DASHBOARD",
        Administrator: "Umuyobozi",
        sellers: "abacuruzi",
        Transactions: "Ibikorwa",
        Orders: "Amabwiriza",
        IncomeExpense: "Inyungu n'igihombo",
        "Buyers 40": "Abaguzi 40",
        "Sellers 30": "Abacuruzi 30",
        "View all": "Reba byose",
        Name: "Izina",
        Action: "Igikorwa",
        "Requested To Be A Vendor": "Yasabye Kuba Umucuruzi",
        "PAYMENT DETAILS": "AMAKURU Y'UBURYO BW'ISHYURWA",
        "First Name": "Izina rya mbere",
        "Second Name": "Izina rya kabiri",
        "Email Address": "Aderesi ya email",
        "Phone Number": "Numero ya telefone",
        Street: "Umuhanda",
        "Payment method": "Uburyo bwo kwishyura",
        "Continue To Payment": "Komeza kwishyura",
        "ORDER SUMMARY": "INSHAMBA Y'ITUMBA",
        "Sub Total": "Igiteranyo cyose",
        "Delivery Fee": "Amafaranga yo gutanga",
        Discount: "Ingano",
        Total: "Igiteranyo",
        "Shopping Cart": "Agakapu k'ibicuruzwa",

        "All Products": "Ibicuruzwa byose",
        "Search Products": "Shakisha ibicuruzwa",
        Categories: "Ibyiciro",
        Electronics: "Ibikoresho by'ikoranabuhanga",
        Food: "Ibiryo",
        Fruits: "Imbuto",
        Mechanism: "Imashini",
        "Sport Kit": "Ibikoresho by'imikino",
        Clothing: "Imyenda",
        Books: "Ibitabo",
        Furniture: "Ibikoresho byo mu nzu",
        Toys: "Ibikinisho",
        Stationery: "Ibikoresho by'ishuri",
        Cars: "Imodoka",
        Shoes: "Inkweto",
        "POPULAR PRODUCTS": "IBICURUZWA BIZWI",
        ABOUT: "Ibyerekeye",
        "Best Deals": "Ibiciro Byiza",
        stock: "Stock",
        "IN STOCK": "Birahari",
        Description: "Ibisobanuro",
        "No description available": "Nta bisobanuro bihari",
        Quantity: "Ingano",
        Size: "Ingano",
        "Leave my review": "Siga igitekerezo cyanjye",
        "Show More": "Erenga",
        "Show Less": "Garuka",
        "Error fetching order details":
          "Ikosa mu kubona ibisobanuro by'itegeko",
        "No order details available": "Nta bisobanuro by'itegeko bihari",
        "Delivery Address": "Aderesi y'Itangwa",
        Order: "Itegeko",
        "Placed On": "Ryatanzwe ku",
        "Expected Delivery Date": "Itariki y'Itangwa iteganyijwe",
        "No product found": "Nta bicuruzwa byabonetse",
        "Order Details": "Ibisobanuro by'Itegeko",
        Product: "Igicuruzwa",
        Price: "Igiciro",

        "Update to": "Hindura kuri",
        "Order Completed": "Itegeko Ryuzuye",
        "Check Your gmail inbox": "Reba mu gasanduku k'ubutumwa bwa Gmail",
        Review: "Gusuzuma",
        Reviews: "Ubusuzuma",
        "Related Products": "Ibicuruzwa Bifitanye Isano",
      },
    },
  },
  lng: `${currentLanguage}`,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
