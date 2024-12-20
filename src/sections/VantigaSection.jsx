import React from 'react'

export default function VantigaSection() {
    return (
        <section className="relative bg-[#E67E22] py-16">
            <div className='container absolute -top-[150px] right-0 left-0 mx-auto bg-white rounded-[50px] p-10 max-w-[75%]'>
                <div className="flex flex-row justify-around gap-6 item-center text-center w-full">
                    <div className='flex flex-col space-y-4 items-start p-4'>
                        <img src={'/assets/images/vantiga/contribute-donate.svg'} className='w-14 h-14' />
                        <p className='text-2xl text-[#02306A] font-bold'>Donate</p>
                        <p className='text-start'>Contribute to various causes adopted by CHF. Your donation helps CHF support various causes globally.</p>
                    </div>
                    <div className='flex flex-col space-y-4 items-start p-4'>
                        <img src={'/assets/images/vantiga/contribute-volunteer.svg'} className='w-14 h-14' />
                        <p className='text-2xl text-[#02306A] font-bold'>Volunteer</p>
                        <p className='text-start'>Contribute to various causes adopted by CHF. Your donation helps CHF support various causes globally.</p>
                    </div>
                    <div className='flex flex-col space-y-4 items-start p-4'>
                        <img src={'/assets/images/vantiga/contribute-get-invloved.svg'} className='w-14 h-14' />
                        <p className='text-2xl text-[#02306A] font-bold'>Get Involved</p>
                        <p className='text-start'>Contribute to various causes adopted by CHF. Your donation helps CHF support various causes globally.</p>
                    </div>
                </div>
            </div>
            <div className="container relative mx-auto px-4 w-full py-20 mt-12">
                <div className="flex flex-col justify-center item-center text-center space-y-10 w-full">
                    <h2 className="text-5xl text-white">What is Vantiga?</h2>
                    <p className="text-lg text-white mx-auto w-[75%]">
                        Vantiga refers to monetary contributions made by the Chitrapur Saraswat community members to support the Chitrapur Math and its various initiatives. This practice is an important aspect of community engagement and support, as it enables the Math to sustain its activities, including spiritual programs, cultural preservation, hospitality services and community welfare efforts. Vantiga reflects the commitment of community members to their spiritual heritage and their role in contributing to the ongoing work of the Math in serving the needs of the Chitrapur Saraswat community. It is suggested that every member contributes Vantiga equivalent to 1% of their income. Alternatively, a minimum amount of $1 per day per family ($365 annually) is proposed as a possible contribution.
                    </p>
                </div>
            </div>

            {/* Bottom border pattern */}
            <div className="absolute bottom-0 left-0 right-0">
                <div className="h-8 w-full bg-repeat-x"  >
                    <img src="/assets/images/section/section-border.svg" />
                </div>
            </div>
        </section>
    )
}
