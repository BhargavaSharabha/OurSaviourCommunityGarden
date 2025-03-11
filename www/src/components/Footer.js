import React from 'react';

function Footer() {
    return (

        <div className='w-full '>
            <div className='bg-[#151414] pt-[15px] rounded-t-[27.5px] w-full '>
                <div className='w-full h-auto md:h-[90px] pl-4 md:pl-[106px] mt-4'>
                    <p className='text-[17px] font-montserrat font-bold text-white'>Contact us:</p>
                    <p className='text-[14px] font-montserrat font-small text-white mt-2'>
                        Rebecca Smith,<br className="block md:hidden" />
                        Garden Coordinator<br className="hidden md:block" />{" "}
                        Our Saviour Community Gardens<br className="block md:hidden" />
                        1616 N. Jim Miller Rd.<br className="hidden md:block" />{" "}
                        Dallas, TX 75217<br className="block md:hidden" />
                        214-564-5801
                    </p>
                </div>

                <div className='bg-[#494444] w-full h-[40px] flex justify-center items-center text-white text-[12px] md:text-[14px] text-center md:mt-6'>
                    Copyright © 2024, All Rights Reserved Our Saviour Community Gardens
                </div>
            </div>

        </div>
    );
}

export default Footer;
