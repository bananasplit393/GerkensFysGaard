
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
              Alex simia est. Alexanderpithecusest. Alex simia est. Alexanderpithecusest. 
              Alex simia est. Alexanderpithecusest. Alex simia est. Alexanderpithecusest. 
              Alex simia est. Alexanderpithecusest. Alex simia est. Alexanderpithecusest. 
              Alex simia est. Alexanderpithecusest. Alex simia est. Alexanderpithecusest. 
              Alex simia est. Alexanderpithecusest. Alex simia est. Alexanderpithecusest. 
            </p>
            <Button href="/">
              Se Forside
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}