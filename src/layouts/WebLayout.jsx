import { Footer } from "../layout/Footer";
import { Header } from "../layout/Header";
import { PageContent } from "../layout/PageContent";

export const WebLayout = ({ children }) => {
  return (
    <>
    <div className="overflow-x-hidden">
      <Header />
      <PageContent children={children}/>
      <Footer />
    </div>
      
    </>
  );
};
