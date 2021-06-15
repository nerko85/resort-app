import React from 'react'
import Hero from '../components/Hero'
import Button from '../containers/Button'

export default function NotFound() {
    return (
        <div>
            <Hero title="404" subtitle="Page was not found...">
                <Button type="primary" url="/">Return home</Button>
            </Hero>
        </div>
    )
}
