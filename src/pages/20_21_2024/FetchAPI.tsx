////7. Use the useEffect hook to fetch data from an API when the component mounts.
import { useEffect, useState } from "react";

const FetchAPI = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const FetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch data, Status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        //Narrowing the type of error
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };
    FetchData();
  }, []);
  if (loading) return <p>Loading....</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div className="p-4">
      <p className="text-xl font-bold">Fetched data</p>
      <ul className="pl-5">
        {data.map((ele) => (
          <li key={ele.id}>
            {ele.id} . {ele.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchAPI;
