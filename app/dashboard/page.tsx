import type { Metadata } from "next"
import DashboardClient from "./DashboardClient"

export const metadata: Metadata = {
  title: "Dashboard | FilePay",
  description: "Manage your digital files and track sales performance on FilePay.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function DashboardPage() {
  return <DashboardClient />
}
