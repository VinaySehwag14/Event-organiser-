import fs from "fs/promises";
import path from "path";
import Link from "next/link";

function HomePage({ products }) {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <Link href={`/products/${product.id}`}>{product.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "dummyBackend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  //* use of redirect next.js feature
  if (!data) {
    return {
      redirect: {
        destination: "/no-data",
      },
    };
  }

  if (data.products.length === 0) {
    return {
      notFound: True,
    };
  }

  return {
    props: {
      products: data.products,
    },
  };
}

export default HomePage;
