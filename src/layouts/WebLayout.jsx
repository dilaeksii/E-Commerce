import { Footer } from "../layout/Footer";
import { Header } from "../layout/Header";
import { PageContent } from "../layout/PageContent";

export const WebLayout = ({ children }) => {
  return (
    <>
      <Header />
      <PageContent children={children}/>
      <Footer />
    </>
  );
};
