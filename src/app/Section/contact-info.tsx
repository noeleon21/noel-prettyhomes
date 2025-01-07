import { Mail } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { PhoneCall } from 'lucide-react';

export default function ContactInfo() {
    return (
        <div>
            <h1 className="text-center text-4xl sm:text-5xl italic font-bold mb-8"> GET IN TOUCH </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-items-center">
                {/* Email */}
                <div className="flex flex-col items-center text-center">
                    <Mail className="w-24 h-24 sm:w-32 sm:h-32 lg:w-56 lg:h-56" />
                    <p className="mt-4 text-lg sm:text-xl">email@example.com</p>
                </div>
                {/* Address */}
                <div className="flex flex-col items-center text-center">
                    <MapPin className="w-24 h-24 sm:w-32 sm:h-32 lg:w-56 lg:h-56" />
                    <p className="mt-4 text-lg sm:text-xl">123 Main Street, Asquith, NSW</p>
                </div>
                {/* Phone */}
                <div className="flex flex-col items-center text-center">
                    <PhoneCall className="w-24 h-24 sm:w-32 sm:h-32 lg:w-56 lg:h-56" />
                    <p className="mt-4 text-lg sm:text-xl">+61 123 456 789</p>
                </div>
            </div>
        </div>
    );
}
