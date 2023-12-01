import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

const ProductDisplayWrapper = ({
    className,
    children
}:{
    className?: string,
    children: ReactNode
}) => {
    return(
        <section className="py-12">
            <div className={cn("md:flex md:items-center md:justify-between mb-4", className)}>
                {children}
            </div>
        </section>
    )
}

export default ProductDisplayWrapper;