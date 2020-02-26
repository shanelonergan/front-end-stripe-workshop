// => imports
import React, { useState } from 'react'

// => URLs
const BASE_URL = 'http://localhost:3000'
const CHARGES_URL = BASE_URL + '/charges'

// => app component
export default function App() {

    const [price, setPrice] = useState(100)

    const handlePrice = (event) => {
        setPrice(event.target.value)
    }

    return (
        <div>
            <h1>Stripe Example Project</h1>
            <form>
                <label>Price:</label>
                <input
                    type="number"
                    value={ price }
                    onChange={ handlePrice }
                />
            </form>

            // Stripe Checkout Goes Here

        </div>
    )
}
