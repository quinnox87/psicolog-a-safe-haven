import React from 'react';

interface SkeletonProps {
    className?: string;
    width?: string;
    height?: string;
    variant?: 'text' | 'rect' | 'circle';
}

const Skeleton: React.FC<SkeletonProps> = ({
    className = "",
    width,
    height,
    variant = 'rect'
}) => {
    const baseClasses = "animate-pulse bg-gray-200";
    const variantClasses = {
        text: "rounded h-4 w-full mb-2",
        rect: "rounded-2xl",
        circle: "rounded-full"
    };

    return (
        <div
            className={`${baseClasses} ${variantClasses[variant]} ${className}`}
            style={{ width, height }}
        />
    );
};

export const BlogSkeleton = () => (
    <div className="bg-white rounded-3xl overflow-hidden border border-[#edefec] shadow-sm flex flex-col h-full">
        <Skeleton height="200px" className="w-full" />
        <div className="p-8 space-y-4">
            <Skeleton width="40%" height="16px" />
            <Skeleton width="90%" height="24px" />
            <Skeleton width="100%" height="16px" />
            <Skeleton width="100%" height="16px" />
            <Skeleton width="30%" height="20px" className="mt-4" />
        </div>
    </div>
);

export const ProductSkeleton = () => (
    <div className="bg-white rounded-3xl overflow-hidden border border-[#edefec] shadow-sm flex flex-col h-full">
        <Skeleton height="240px" className="w-full" />
        <div className="p-8 space-y-4">
            <Skeleton width="100%" height="28px" />
            <Skeleton width="100%" height="40px" />
            <div className="flex justify-between items-center pt-4">
                <Skeleton width="30%" height="24px" />
                <Skeleton width="40%" height="48px" className="rounded-xl" />
            </div>
        </div>
    </div>
);

export default Skeleton;
