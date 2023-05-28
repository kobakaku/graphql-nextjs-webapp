import { useQuery } from "@apollo/client";
import { GetTodoDocument, GetTodoQuery } from "../../graphql/dist/client";

export default function Home() {
  const { data } = useQuery<GetTodoQuery>(GetTodoDocument);

  return (
    <div style={{ margin: "0 auto", width: "1000px" }}>
      {data?.todos?.map((todo) => (
        <div key={todo.id}>
          <h1>{todo.text}</h1>
          <p>id:{todo.id}</p>
          <p>text:{todo.text}</p>
        </div>
      ))}
    </div>
  );
}
