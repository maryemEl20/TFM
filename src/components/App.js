import { Routes, Route } from 'react-router-dom';
import Home from '../routes/Home/Home';
import Layout from './Layout';
import Service from '../routes/Services/Service';
import Formation from '../routes/Formations/Formation';
import RendezVous from '../routes/Home/RendezVous';
import Contact from '../routes/Home/Contact';
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="Formations" element={<Formations />} /> */}
          <Route path="service" element={<Service />} />
          <Route path="Rendez-Vous" element={<RendezVous />} />
          <Route path="Contactez-Nous" element={<Contact />} />
           <Route path="*" element={<p>Not found!</p>} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
