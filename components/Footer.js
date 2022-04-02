import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white p-4 text-center max-h-[15vh]">
            <div className="container mx-auto">
                <div className="flex flex-wrap justify-center">
                    <a>Copyright&copy; 2022 geeksforturks.com</a>
                </div>
                <address>
                    <p>İletişim </p>
                    <a href='mailto:support@geeksforturks.com'>support@geeksforturks.com</a>
                </address>
            </div>


        </footer>
    )
}

export default Footer