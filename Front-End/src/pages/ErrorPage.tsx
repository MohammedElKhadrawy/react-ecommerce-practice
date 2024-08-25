import { isRouteErrorResponse, Link, useRouteError } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

const ErrorPage = () => {
  const error = useRouteError();

  let errorStatus: number = 404;
  let errorText: string = 'Page not found';

  if (isRouteErrorResponse(error)) {
    errorStatus = error.status;
    errorText = error.statusText;
  }

  return (
    <Container className='error-page'>
      <h1>{errorStatus}</h1>
      <p>{errorText}</p>
      <Link to='/' replace={true}>
        How about going back to safety?
      </Link>
    </Container>
  );
};
export default ErrorPage;
