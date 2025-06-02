import { useEffect } from "react";
import CategoryItem from "../components/CategoryItem";
import { useProductStore } from "../stores/useProductStore";
import FeaturedProducts from "../components/FeaturedProducts";

const categories = [
	{ href: "/jeans", name: "Jeans", imageUrl: "/jeans1.jpg" },
	{ href: "/t-shirts", name: "T-shirts", imageUrl: "/shirts1.jpg" },
	{ href: "/shoes", name: "Shoes", imageUrl: "/shoes1.jpg" },
	{ href: "/glasses", name: "Glasses", imageUrl: "/glasses1.jpg" },
	{ href: "/jackets", name: "Jackets", imageUrl: "/jackets1.jpg" },
	{ href: "/bags", name: "Bags", imageUrl: "/bags1.jpg" },
];

const HomePage = () => {
	const { fetchFeaturedProducts, products, isLoading } = useProductStore();

	useEffect(() => {
		fetchFeaturedProducts();
	}, [fetchFeaturedProducts]);

	return (
		<div className='relative min-h-screen text-red-800 overflow-hidden'>
			<div className='relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
				<h1 className='text-center text-5xl sm:text-6xl font-bold text-red-00 mb-4'>
					Explore Our Categories
				</h1>
				<p className='text-center text-xl text-gray-300 mb-12'>
					Where classic charm meets a conscious choice.
				</p>

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
					{categories.map((category) => (
						<CategoryItem category={category} key={category.name} />
					))}
				</div>

				{!isLoading && products.length > 0 && <FeaturedProducts featuredProducts={products} />}
			</div>
		</div>
	);
};
export default HomePage;