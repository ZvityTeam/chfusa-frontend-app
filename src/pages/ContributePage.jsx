import React from 'react'
import DonationTable from '../components/Donate/DonationTable'
import VantigaSection from '../sections/VantigaSection'
import HeroSection from '../sections/HeroSection'
import PaymentForm from '../components/Contribute/PaymentForm';
import VolunteerForm from '../components/Contribute/VolunteerForm';
import FAQSection from '../sections/FAQSection';
import { Outlet } from 'react-router-dom'

export default function ContributePage() {
  return (
    <>
      <div className="min-h-screen bg-cream">
        <HeroSection />
        <VantigaSection />
        <DonationTable />
        <PaymentForm />
        <VolunteerForm />
        <FAQSection />
        <Outlet />
      </div>
    </>
  )
}
