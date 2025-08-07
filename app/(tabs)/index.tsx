import { Image } from 'expo-image';
import { FlatList, StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useThemeColor } from '@/hooks/useThemeColor';

type Product = {
  id: string;
  name: string;
  price: string;
  image: string;
};

const products: Product[] = [
  {
    id: '1',
    name: 'Arabica Beans',
    price: '$15',
    image:
      'https://images.unsplash.com/photo-1502741501-5c4b6cebd8c5?auto=format&fit=crop&w=800&q=60',
  },
  {
    id: '2',
    name: 'Espresso Machine',
    price: '$200',
    image:
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=60',
  },
  {
    id: '3',
    name: 'French Press',
    price: '$25',
    image:
      'https://images.unsplash.com/photo-1465800872432-2460a5eeeac6?auto=format&fit=crop&w=800&q=60',
  },
];

function ProductCard({ product }: { product: Product }) {
  const borderColor = useThemeColor({}, 'icon');

  return (
    <ThemedView style={[styles.item, { borderColor }]}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <ThemedText type="subtitle">{product.name}</ThemedText>
      <ThemedText>{product.price}</ThemedText>
    </ThemedView>
  );
}

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductCard product={item} />}
        contentContainerStyle={styles.listContent}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContent: {
    padding: 16,
    gap: 16,
  },
  item: {
    alignItems: 'center',
    padding: 16,
    borderRadius: 8,
    borderWidth: StyleSheet.hairlineWidth,
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 8,
    borderRadius: 8,
  },
});

