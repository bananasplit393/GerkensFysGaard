
import { Button } from '../ui/Button';

export default function NotFoundScreen() {
  return (
    <>
      {/* If you have a Head component for setting the page title, use it here */}
      {/* <Head title="Page not found" /> */}
      <div className="hero flex-grow">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Page not found</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
              deleniti eaque aut repudiandae et a id nisi.
            </p>
            <Button href="/" className="bg-green-600 hover:bg-green-700">
              Se Forside
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}