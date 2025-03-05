// import { Mail } from 'lucide-react';
// import { MapPin } from 'lucide-react';
// import { PhoneCall } from 'lucide-react';
// import Animations from "@/components/ui/animations";
// export default function ContactInfo() {
//     return (
//         <div>
//             <h1 className="text-center text-5xl sm:text-5xl font-bold pt-8 mb-8 relative inline-block text-5xl font-brand-darkblue font-bold after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-[2px] after:w-1/3 after:bg-current"> GET IN TOUCH </h1>
//             <h2 className='text-center text-2xl sm:text-xl font-bold mb-8'> We're always heres to help </h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2  gap-8 items-center justify-items-center pb-8">
//                 {/* Email */}
//                 <Animations animationDirection="left-to-right">
//                 <div className="flex flex-col items-center justify-center text-center border-double border-brand border-8 w-64 h-64">
//                     <Mail className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24" />
//                     <p className="mt-4 text-lg sm:text-xl">info@prettyhomes.com.au</p>
//                 </div>
//                 </Animations>
//                 {/* Address */}
//                 <Animations animationDirection="top-to-bottom">
//                 <div className="flex flex-col items-center justify-center text-center border-double border-brand border-8 w-64 h-64">
//                     <MapPin className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24" />
//                     <p className="mt-4 text-lg sm:text-xl">123 Main Street, Asquith, NSW</p>
//                 </div>
//                 </Animations>
//                 {/* Phone */}
//                 <Animations animationDirection="right-to-left">
//                 <div className="flex flex-col items-center justify-center text-center border-double border-brand border-8 w-64 h-64">
//                     <PhoneCall className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24" />
//                     <p className="mt-4 text-lg sm:text-xl">+61 421 875 640</p>
//                 </div>
//                 </Animations>
//             </div>
//         </div>
//     );
// }
import { Mail } from 'lucide-react';
import { PhoneCall } from 'lucide-react';
import Animations from "@/components/ui/animations";

export default function ContactInfo() {
    return (
        <div>
            <h1 className="text-center text-5xl sm:text-5xl font-bold pt-8 mb-8 relative inline-block text-5xl font-brand-darkblue font-bold after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-[2px] after:w-1/3 after:bg-current"> GET IN TOUCH </h1>
            <h2 className='text-center text-2xl sm:text-xl font-bold mb-8'> We're always here to help </h2>
            <div className="flex flex-wrap justify-center gap-8 pb-8">
                {/* Email */}
                <Animations animationDirection="left-to-right">
                    <div className="flex flex-col items-center justify-center text-center border-double border-brand border-8 w-64 h-64">
                        <Mail className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24" />
                      <a href="mailto:info@prettyhomes.com.au">  <p className="mt-4 text-lg sm:text-xl">info@prettyhomes.com.au</p> </a>
                    </div>
                </Animations>
                {/* Phone */}
                <Animations animationDirection="right-to-left">
                    <div className="flex flex-col items-center justify-center text-center border-double border-brand border-8 w-64 h-64">
                        <PhoneCall className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24" />
                      <a href="tel:+61421875640"> <p className="mt-4 text-lg sm:text-xl">+61 421 875 640</p> </a> 
                    </div>
                </Animations>
            </div>
        </div>
    );
}
