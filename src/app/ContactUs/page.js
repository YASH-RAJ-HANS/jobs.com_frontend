import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";


export default function page() {
  return (
    <div className="w-[80%] m-auto">
        <Navbar />
      <ContactForm />
      <Footer />
    </div>
  );
}