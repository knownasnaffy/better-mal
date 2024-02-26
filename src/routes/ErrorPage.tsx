import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError() as {statusText?: string, message: string}
  console.error(error);

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <h1 className='text-2xl font-bold'>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error?.statusText || error?.message}</i>
      </p>
    </div>
  );
}