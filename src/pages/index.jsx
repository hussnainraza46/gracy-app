// pages/index.jsx
import React from 'react'


export function PageTemplate({ title }) {
    return <div className="text-2xl font-semibold">{title}</div>
}


export function DashboardPage() {
    return <PageTemplate title="Dashboard / Dispatch" />
}
export function SafetyPage() { return <PageTemplate title="Safety" /> }
export function MapPage() { return <PageTemplate title="Map" /> }
export function TeamPage() { return <PageTemplate title="Team" /> }
export function DriversPage() { return <PageTemplate title="Drivers" /> }
export function PayrollPage() { return <PageTemplate title="Payroll" /> }
export function FleetPage() { return <PageTemplate title="Fleet" /> }
export function FleetMgmtPage() { return <PageTemplate title="Fleet Management" /> }
export function CardPage() { return <PageTemplate title="Card" /> }
export function PassengerPage() { return <PageTemplate title="Passenger" /> }
export function TripsPage() { return <PageTemplate title="Trips" /> }
export function PayersPage() { return <PageTemplate title="Payers" /> }
export function DocumentsPage() { return <PageTemplate title="Documents" /> }
export function TrainingPage() { return <PageTemplate title="Training" /> }
export function PricingPage() { return <PageTemplate title="Pricing" /> }


export default DashboardPage