import { useRouteError } from "react-router-dom";

const Error = ({ error }) => {
  const routeError = useRouteError();
  return (
    <div className="error">
      <h1>Oops!</h1>
      <h2>Something went wrong.</h2>
      <p>
        {routeError.status} - {routeError.statusText}
      </p>
      <p>{routeError.data}</p>
      <p>{error.message}</p>
      <p>Please try again later.</p>
      <p>Thank you for your understanding.</p>
      <p>We apologize for any inconvenience caused.</p>
      <p>Have a great day!</p>
    </div>
  );
};

export default Error;