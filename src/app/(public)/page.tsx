import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-600 to-indigo-800 text-white">
        <div className="mx-auto max-w-7xl px-4 py-24 text-center">
          <h1 className="text-5xl font-bold">Hoc tap thong minh, ket noi gia su</h1>
          <p className="mt-6 text-xl text-blue-100">Nen tang kien thuc giao duc truc tuyen</p>
          <div className="mt-10 flex justify-center gap-4">
            <Link href="/dai-hoc" className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-700">Kham pha</Link>
            <Link href="/tai-lieu" className="rounded-lg border border-blue-400 px-6 py-3 font-semibold text-white hover:bg-blue-500">Tai lieu</Link>
          </div>
        </div>
      </section>
    </>
  );
}
