import fs from "fs/promises";
import path from "path";

function HomePage({ products }) {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.title}</li>
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
