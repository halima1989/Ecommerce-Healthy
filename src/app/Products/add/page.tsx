import AddProductForm from '@/components/AddProductForm';
import { useRouter } from 'next/navigation';
import React from 'react'

const page = () => {

    const { push } = useRouter()
    push("/product")

    return (
        <div>
            <AddProductForm />
        </div>
    )
}

export default page
