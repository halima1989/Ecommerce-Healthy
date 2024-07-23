"use client"
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import SearchBar from '@/components/SearchBar'
import React from 'react'

const page = () => {
    return (
        <div>
            <Header />
            <SearchBar search={function (query: string): void {
                throw new Error('Function not implemented.')
            }} />
            <Footer />
        </div>
    )
}

export default page
