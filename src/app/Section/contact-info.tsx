import { Mail } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { PhoneCall } from 'lucide-react';

export default function ContactInfo() {
    return (
        <div>
            <h1 className="text-center text-4xl sm:text-5xl font-bold mb-8"> GET IN TOUCH </h1>
            <h2 className='text-center text-2xl sm:text-xl font-bold mb-8'> We're always heres to help </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-items-center">
                {/* Email */}
                <div className="flex flex-col items-center justify-center text-center border-double border-brand border-8 w-64 h-64">
                    <Mail className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24" />
                    <p className="mt-4 text-lg sm:text-xl">email@example.com</p>
                </div>
                {/* Address */}
                <div className="flex flex-col items-center justify-center text-center border-double border-brand border-8 w-64 h-64">
                    <MapPin className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24" />
                    <p className="mt-4 text-lg sm:text-xl">123 Main Street, Asquith, NSW</p>
                </div>
                {/* Phone */}
                <div className="flex flex-col items-center justify-center text-center border-double border-brand border-8 w-64 h-64">
                    <PhoneCall className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24" />
                    <p className="mt-4 text-lg sm:text-xl">+61 123 456 789</p>
                </div>
            </div>
        </div>
    );
}
