'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, ChevronLeft, Plus } from 'lucide-react'
// Sample FAQ data - you can replace with your actual data
const faqData = [
  {
    id: 1,
    question: "Are my donations to CHF including Vantiga tax-deductible in the United States?",
    answer: "Answer text here..."
  },
  {
    id: 2,
    question: "What is the correct amount of Vantiga I need to pay per year to the Math?",
    answer: "Answer text here..."
  },
  {
    id: 3,
    question: "Do I always have to login (join) CHF when accessing the CHF website?",
    answer: "Answer text here..."
  },
  {
    id: 4,
    question: "How do I specify the particular project to which I want to donate?",
    answer: "Answer text here..."
  },
  {
    id: 5,
    question: "When and how (media) will I receive a receipt for my CHF donation?",
    answer: "Answer text here..."
  }
]

const itemsPerPage = 5

export default function FAQSection() {
  const [openQuestion, setOpenQuestion] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(faqData.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentFaqs = faqData.slice(startIndex, startIndex + itemsPerPage)

  const toggleQuestion = (id) => {
    setOpenQuestion(openQuestion === id ? null : id)
  }

  return (
    <div className="relative h-[650px] px-4 mt-16 py-12 md:px-8">
      {/* Cloud 1 - Top right */}
      <div className="absolute top-0 right-0 w-32 h-16">
        <img src="/assets/images/cloud1.svg" alt="Cloud 1" className="w-full h-full object-contain" />
      </div>

      {/* Cloud 2 - Top center-right */}
      <div className="absolute top-12 right-[10%] w-24 h-12">
        <img src="/assets/images/cloud2.svg" alt="Cloud 2" className="w-full h-full object-contain" />
      </div>

      {/* Cloud 3 - Top center */}
      <div className="absolute top-4 right-[20%] w-20 h-10">
        <img src="/assets/images/cloud3.svg" alt="Cloud 3" className="w-full h-full object-contain" />
      </div>

      <div className="relative z-[10] mx-auto max-w-3xl">
        <h1 className="mb-12 text-5xl font-semibold text-[#4285f4]">FAQ's</h1>

        <div className="space-y-4">
        {currentFaqs.map((faq) => (
            <div key={faq.id} className="overflow-hidden">
              <button
                onClick={() => toggleQuestion(faq.id)}
                className="flex w-full items-center gap-4 text-left py-4 "
              >
                <span className="text-white flex items-center rounded-full bg-secondary p-1">
                  <Plus className="h-3 w-3 " />
                </span>
                <span className="text-gray-700 text-lg">{faq.question}</span>
              </button>
              <AnimatePresence>
                {openQuestion === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="ml-9 mb-4"
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
              <div className="border-b border-gray-500" />
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="rounded-full p-2 text-gray-600 hover:bg-gray-100 disabled:opacity-50"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`h-2 w-2 rounded-full ${
                    currentPage === index + 1 ? 'bg-[#FF9966]' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className="rounded-full p-2 text-gray-600 hover:bg-gray-100 disabled:opacity-50"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>

      {/* Mountain shape at the bottom */}
      <div className="absolute -bottom-10 left-0 right-0 -z-9 overflow-hidden">
        <img src="/assets/images/mountain.svg" alt="Mountain" className="w-full h-full object-cover" />
      </div>
    </div>
  )
}

