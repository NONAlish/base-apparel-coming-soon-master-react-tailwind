import Input from "./Input";

export default function Main() {
  return (
    <div>
      <h1 className="mb-16 w-96 text-dark text-8xl font-extrabold tracking-wide uppercase">
        <span className="text-gray_linear font-extralight">we're</span> coming
        soon
      </h1>
      <h3 className="mb-16 w-8/12 text-gray_linear font-light text-2xl">
        Hello fellow shoppers! We're currently building our new fashion store.
        Add your email below to stay up-to-date with announcements and our
        launch deals.
      </h3>
      <Input />
    </div>
  );
}
