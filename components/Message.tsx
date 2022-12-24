import { JSX } from "preact";

export default function Message(props: JSX.HTMLAttributes<HTMLDivElement>) {
  return (
    <>
      <div
        class="container px-12 mx-auto text-xl my-12"
        {...props}
      >
      </div>
    </>
  );
}
