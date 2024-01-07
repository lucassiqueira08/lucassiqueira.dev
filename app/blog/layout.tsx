export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className={`p-2`}>
      <h2 className={'text-xl'}>Blog</h2>
      <nav></nav>
      {children}
    </section>
  )
}