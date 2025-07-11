import type { Metadata } from "next"
import DashboardClient from "./DashboardClient"

export const metadata: Metadata = {
  title: "Dashboard - FilePay",
  description: "Manage your digital files and track performance",
}

export default function DashboardPage() {
  return <DashboardClient />
}
