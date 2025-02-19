import { Bath, Bed, CarFront } from 'lucide-react';

interface HouseIconsProps {
    bathCount: number;
    bedCount: number;
    carCount: number;
}

export default function HouseIcons({ bathCount, bedCount, carCount }: HouseIconsProps) {
    return (
        <div className='relative flex flex-row space-x-16'>
            <div className="flex items-center space-x-2">
                <Bath size={36} />
                <span className="text-2xl font-semibold">{bathCount}</span>
            </div>
            <div className="flex items-center space-x-2">
                <Bed size={36} />
                <span className="text-2xl font-semibold">{bedCount}</span>
            </div>
            <div className="flex items-center space-x-2">
                <CarFront size={36} />
                <span className="text-2xl font-semibold">{carCount}</span>
            </div>
        </div>
    );
}
