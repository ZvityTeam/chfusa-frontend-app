import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import FooterComponent from "./components/Footer/FooterComponent";
import HeaderComponent from "./components/Header/HeaderComponent";
import ContributePage from "./pages/ContributePage";
import ComingSoonPage from "./pages/ComingSoonPage";
import CompletePage from "./pages/payment/CompletePage";
import { DataContext } from "./components/context/DataContext";
import { useContext, useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import ElementsWrapper from "./pages/payment/ElementsWrapper";
import CheckoutForm from './pages/payment/CheckoutForm';
import ProjectsPage from "./pages/ProjectsPage";
import EventPage from "./pages/EventPage";

import { ToastContainer } from 'react-toastify';
function App() {
  const [StripeOptions, setStripeOptions] = useState({ appearance: { theme: 'stripe' }, loader: 'auto' })
  const { data } = useContext(DataContext);
  const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_PUBLIC_KEY}`);
  useEffect(() => {
    setStripeOptions(v => ({ ...v, clientSecret: data.clientSecret }))

  }, [data.clientSecret])

  return (
    <>
      {/* {JSON.stringify(data)} */}
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/contribute" element={<ContributePage />}>
          {
            StripeOptions?.clientSecret ?
              <Route element={<ElementsWrapper stripePromise={stripePromise} options={StripeOptions} />}>
                <Route path="checkout" element={<CheckoutForm />} />
                <Route path="complete" element={<CompletePage />} />
              </Route> : null
          }
        </Route>
        <Route path="/profile" element={<ComingSoonPage />} />
        <Route path="/contact" element={<ComingSoonPage />} />
        <Route path="/donate" element={<ContributePage />} />
        <Route path="/join" element={<ComingSoonPage />} />
      </Routes>
      <FooterComponent />
      <ToastContainer />
    </>
  );
}

export default App;
