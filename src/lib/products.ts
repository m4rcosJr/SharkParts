export type Brand = "BMW" | "Porsche" | "Land Rover" | "Mercedes-Benz";

export interface Product {
  id: string;
  name: string;
  brand: Brand;
  description: string;
  price?: string;
  image: string;
  mercadoLivreUrl: string;
}

export const brands: { name: Brand; logo: string; description: string }[] = [
  {
    name: "BMW",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/600px-BMW.svg.png",
    description: "Performance e sofisticação alemã",
  },
  {
    name: "Porsche",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Porsche_logo.svg/300px-Porsche_logo.svg.png",
    description: "Engenharia esportiva de alta performance",
  },
  {
    name: "Land Rover",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9c/Land_Rover_logo2.png/300px-Land_Rover_logo2.png",
    description: "Robustez e luxo para qualquer terreno",
  },
  {
    name: "Mercedes-Benz",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/300px-Mercedes-Logo.svg.png",
    description: "O melhor ou nada",
  },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Pastilha de Freio Dianteira",
    brand: "BMW",
    description: "Pastilha de freio original para BMW Série 3 e Série 5. Alta durabilidade e performance.",
    price: "R$ 489,90",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=300&fit=crop",
    mercadoLivreUrl: "https://www.mercadolivre.com.br/pagina/shark_parts#client=SEARCH&component_id=menu_home&component=menu_home&label=In%C3%ADcio&tracking_id=94e16b1246af8a0b83a00fd86914d228&global_position=1",
  },
  {
    id: "2",
    name: "Filtro de Óleo Motor",
    brand: "BMW",
    description: "Filtro de óleo premium para motores BMW. Filtragem superior e proteção do motor.",
    price: "R$ 129,90",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop",
    mercadoLivreUrl: "https://www.mercadolivre.com.br/pagina/shark_parts#client=SEARCH&component_id=menu_home&component=menu_home&label=In%C3%ADcio&tracking_id=94e16b1246af8a0b83a00fd86914d228&global_position=1",
  },
  {
    id: "3",
    name: "Disco de Freio Ventilado",
    brand: "Porsche",
    description: "Disco de freio ventilado para Porsche Cayenne e Macan. Performance de frenagem excepcional.",
    price: "R$ 1.289,90",
    image: "https://images.unsplash.com/photo-1600712242805-5f78671b24da?w=400&h=300&fit=crop",
    mercadoLivreUrl: "https://www.mercadolivre.com.br/pagina/shark_parts#client=SEARCH&component_id=menu_home&component=menu_home&label=In%C3%ADcio&tracking_id=94e16b1246af8a0b83a00fd86914d228&global_position=1",
  },
  {
    id: "4",
    name: "Kit Correia Dentada",
    brand: "Porsche",
    description: "Kit completo de correia dentada para motores Porsche. Inclui tensor e rolamentos.",
    price: "R$ 2.890,00",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=300&fit=crop",
    mercadoLivreUrl: "https://www.mercadolivre.com.br/pagina/shark_parts#client=SEARCH&component_id=menu_home&component=menu_home&label=In%C3%ADcio&tracking_id=94e16b1246af8a0b83a00fd86914d228&global_position=1",
  },
  {
    id: "5",
    name: "Amortecedor Dianteiro",
    brand: "Land Rover",
    description: "Amortecedor dianteiro para Land Rover Discovery e Range Rover Sport.",
    price: "R$ 1.650,00",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=300&fit=crop",
    mercadoLivreUrl: "https://www.mercadolivre.com.br/pagina/shark_parts#client=SEARCH&component_id=menu_home&component=menu_home&label=In%C3%ADcio&tracking_id=94e16b1246af8a0b83a00fd86914d228&global_position=1",
  },
  {
    id: "6",
    name: "Bomba d'Água",
    brand: "Land Rover",
    description: "Bomba d'água para motores Land Rover. Peça de alta qualidade e durabilidade.",
    price: "R$ 890,00",
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=400&h=300&fit=crop",
    mercadoLivreUrl: "https://www.mercadolivre.com.br/pagina/shark_parts#client=SEARCH&component_id=menu_home&component=menu_home&label=In%C3%ADcio&tracking_id=94e16b1246af8a0b83a00fd86914d228&global_position=1",
  },
  {
    id: "7",
    name: "Sensor de Estacionamento",
    brand: "Mercedes-Benz",
    description: "Sensor de estacionamento original para Mercedes-Benz Classe C e Classe E.",
    price: "R$ 320,00",
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=400&h=300&fit=crop",
    mercadoLivreUrl: "https://www.mercadolivre.com.br/pagina/shark_parts#client=SEARCH&component_id=menu_home&component=menu_home&label=In%C3%ADcio&tracking_id=94e16b1246af8a0b83a00fd86914d228&global_position=1",
  },
  {
    id: "8",
    name: "Bobina de Ignição",
    brand: "Mercedes-Benz",
    description: "Bobina de ignição para motores Mercedes-Benz. Performance e confiabilidade superiores.",
    price: "R$ 459,90",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400&h=300&fit=crop",
    mercadoLivreUrl: "https://www.mercadolivre.com.br/pagina/shark_parts#client=SEARCH&component_id=menu_home&component=menu_home&label=In%C3%ADcio&tracking_id=94e16b1246af8a0b83a00fd86914d228&global_position=1",
  },
];
