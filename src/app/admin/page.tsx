import Footer from '@/components/Footer'
import Header from '@/components/Header'
import SearchBar from '@/components/SearchBar'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div>
            <div>
                <Header />
                <SearchBar search={function (query: string): void {
                    throw new Error('no founded')
                }} />
                <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10 bg-gray-800">
                        <Link href="/Products/add">Add products<span aria-hidden="true">&rarr;</span></Link>
                        <Link href="/order">Orders<span aria-hidden="true">&rarr;</span></Link>
                        <Link href="/user">Users<span aria-hidden="true">&rarr;</span></Link>
                        <Link href="">Payment methods<span aria-hidden="true">&rarr;</span></Link>
                        <Link href="">roles<span aria-hidden="true">&rarr;</span></Link>
                    </div>
                    <Footer />
                </div>
            </div>


        </div>
    )
}

export default page

