import Experience from "@/components/experience/Experience";
import Footer from "@/components/footer/Footer";
import Greetings from "@/components/greetings/Greetings";
import Layout from "@/components/layout/Layout";

const Home = () => {
  return (
    <Layout>
      <Greetings />
      <Experience />
      <Footer />
    </Layout>
  );
};

export default Home;
