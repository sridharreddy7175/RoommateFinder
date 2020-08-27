import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MyRequests from '../components/MyRequests'

export default function HomePage() {
    return (
        <div>
            <Header/>
            <MyRequests/>
            <Footer/>
        </div>
    )
}
