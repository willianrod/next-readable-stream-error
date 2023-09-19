import { redirect } from "next/navigation";
import { Form } from "./form";

const getSomething = async () => {
  return new Promise((resolve) => setTimeout(resolve, 3000));
};

export default async function Login() {
  const response = await getSomething();
  if (!response) redirect("/sample/list");

  return (
    <div>
      <Form />
    </div>
  );
}
